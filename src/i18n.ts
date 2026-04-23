import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import de from './locales/de/translation.json'
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import fr from './locales/fr/translation.json'

export const SUPPORTED_LANGUAGE_OPTIONS = [
  { code: 'en', labelKey: 'languages.en' },
  { code: 'es', labelKey: 'languages.es' },
  { code: 'fr', labelKey: 'languages.fr' },
  { code: 'de', labelKey: 'languages.de' },
] as const

type LanguageOption = (typeof SUPPORTED_LANGUAGE_OPTIONS)[number]
export type SupportedLanguage = LanguageOption['code']

const STATIC_LANGUAGES = SUPPORTED_LANGUAGE_OPTIONS.map((option) => option.code)

const MANUAL_LANGUAGE_KEY = 'languagePreferenceManual'
const MANUAL_LOCALE_KEY = 'languagePreferenceLocale'
const GEO_LOOKUP_COMPLETE_KEY = 'geoLanguageLookupComplete'
const RUNTIME_TRANSLATION_CACHE_PREFIX = 'runtimeTranslation:'

const RUNTIME_TRANSLATION_API_URL = import.meta.env.VITE_RUNTIME_TRANSLATION_API_URL as
  | string
  | undefined
const RUNTIME_TRANSLATION_API_KEY = import.meta.env.VITE_RUNTIME_TRANSLATION_API_KEY as
  | string
  | undefined

type TranslationObject = Record<string, unknown>

const isTranslationObject = (value: unknown): value is TranslationObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const normalizeLocale = (value: string | null | undefined): string => {
  if (!value) {
    return 'en'
  }

  return value.trim().replace('_', '-')
}

const getBaseLanguage = (locale: string): string => normalizeLocale(locale).toLowerCase().split('-')[0]

const isStaticLanguage = (value: string): value is SupportedLanguage =>
  STATIC_LANGUAGES.includes(value as SupportedLanguage)

const getBrowserPreferredLocale = () => {
  if (typeof navigator === 'undefined') {
    return null
  }

  const browserLocales = navigator.languages?.length
    ? navigator.languages
    : navigator.language
      ? [navigator.language]
      : []

  return browserLocales.length > 0 ? normalizeLocale(browserLocales[0]) : null
}

const getRuntimeTranslationCacheKey = (locale: string) =>
  `${RUNTIME_TRANSLATION_CACHE_PREFIX}${normalizeLocale(locale).toLowerCase()}`

const readRuntimeTranslationCache = (locale: string): TranslationObject | null => {
  try {
    const cached = localStorage.getItem(getRuntimeTranslationCacheKey(locale))
    if (!cached) {
      return null
    }

    const parsed = JSON.parse(cached) as unknown
    return isTranslationObject(parsed) ? parsed : null
  } catch {
    return null
  }
}

const writeRuntimeTranslationCache = (locale: string, content: TranslationObject) => {
  try {
    localStorage.setItem(getRuntimeTranslationCacheKey(locale), JSON.stringify(content))
  } catch {
    // Skip cache write failures silently.
  }
}

const replaceInterpolationMarkers = (text: string) => {
  const markers: string[] = []
  const normalized = text.replace(/\{\{[^}]+\}\}/g, (match) => {
    const token = `__I18N_TOKEN_${markers.length}__`
    markers.push(match)
    return token
  })

  return { normalized, markers }
}

const restoreInterpolationMarkers = (text: string, markers: string[]) =>
  markers.reduce(
    (result, marker, markerIndex) => result.replace(new RegExp(`__I18N_TOKEN_${markerIndex}__`, 'g'), marker),
    text,
  )

const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  if (!RUNTIME_TRANSLATION_API_URL) {
    return text
  }

  if (!text.trim()) {
    return text
  }

  const { normalized, markers } = replaceInterpolationMarkers(text)

  try {
    const response = await fetch(RUNTIME_TRANSLATION_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(RUNTIME_TRANSLATION_API_KEY ? { 'X-API-Key': RUNTIME_TRANSLATION_API_KEY } : {}),
      },
      body: JSON.stringify({
        q: normalized,
        source: 'en',
        target: targetLanguage,
        format: 'text',
      }),
    })

    if (!response.ok) {
      return text
    }

    const payload = (await response.json()) as { translatedText?: string }
    if (!payload.translatedText) {
      return text
    }

    return restoreInterpolationMarkers(payload.translatedText, markers)
  } catch {
    return text
  }
}

const translateObjectDeep = async (value: unknown, targetLanguage: string): Promise<unknown> => {
  if (typeof value === 'string') {
    return translateText(value, targetLanguage)
  }

  if (Array.isArray(value)) {
    const translatedArray: unknown[] = []
    for (const arrayItem of value) {
      translatedArray.push(await translateObjectDeep(arrayItem, targetLanguage))
    }
    return translatedArray
  }

  if (isTranslationObject(value)) {
    const translatedObject: TranslationObject = {}
    for (const [entryKey, entryValue] of Object.entries(value)) {
      translatedObject[entryKey] = await translateObjectDeep(entryValue, targetLanguage)
    }
    return translatedObject
  }

  return value
}

const registerRuntimeTranslation = (locale: string, translation: TranslationObject) => {
  const normalizedLocale = normalizeLocale(locale)
  const baseLanguage = getBaseLanguage(normalizedLocale)

  i18n.addResourceBundle(normalizedLocale, 'translation', translation, true, true)

  if (!i18n.hasResourceBundle(baseLanguage, 'translation')) {
    i18n.addResourceBundle(baseLanguage, 'translation', translation, true, true)
  }
}

const loadRuntimeTranslation = async (locale: string) => {
  const normalizedLocale = normalizeLocale(locale)
  const baseLanguage = getBaseLanguage(normalizedLocale)

  if (baseLanguage === 'en') {
    return true
  }

  if (i18n.hasResourceBundle(normalizedLocale, 'translation')) {
    return true
  }

  const cached = readRuntimeTranslationCache(normalizedLocale)
  if (cached) {
    registerRuntimeTranslation(normalizedLocale, cached)
    return true
  }

  if (!RUNTIME_TRANSLATION_API_URL) {
    return false
  }

  const translated = await translateObjectDeep(en, baseLanguage)
  if (!isTranslationObject(translated)) {
    return false
  }

  registerRuntimeTranslation(normalizedLocale, translated)
  writeRuntimeTranslationCache(normalizedLocale, translated)
  return true
}

const applyLocale = async (locale: string) => {
  const normalizedLocale = normalizeLocale(locale)
  const baseLanguage = getBaseLanguage(normalizedLocale)

  if (isStaticLanguage(baseLanguage)) {
    await i18n.changeLanguage(baseLanguage)
    return
  }

  const hasRuntimeTranslation = await loadRuntimeTranslation(normalizedLocale)
  if (hasRuntimeTranslation) {
    await i18n.changeLanguage(normalizedLocale)
    return
  }

  await i18n.changeLanguage('en')
}

const fetchGeoPreferredLocale = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/')
    if (!response.ok) {
      return null
    }

    const payload = (await response.json()) as { languages?: string }
    const firstLanguage = payload.languages?.split(',')[0]?.trim()
    return firstLanguage ? normalizeLocale(firstLanguage) : null
  } catch {
    return null
  }
}

const resources = {
  de: { translation: de },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
}

void i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
})

export const hasManualLanguagePreference = () =>
  typeof window !== 'undefined' && localStorage.getItem(MANUAL_LANGUAGE_KEY) === 'true'

export const clearUserLanguagePreference = async () => {
  localStorage.removeItem(MANUAL_LANGUAGE_KEY)
  localStorage.removeItem(MANUAL_LOCALE_KEY)
  await applyAutomaticLocale()
}

export const setUserLanguagePreference = async (locale: string) => {
  const normalizedLocale = normalizeLocale(locale)
  localStorage.setItem(MANUAL_LANGUAGE_KEY, 'true')
  localStorage.setItem(MANUAL_LOCALE_KEY, normalizedLocale)
  localStorage.setItem(GEO_LOOKUP_COMPLETE_KEY, 'true')
  await applyLocale(normalizedLocale)
}

export const applyAutomaticLocale = async () => {
  if (typeof window === 'undefined') {
    return
  }

  if (hasManualLanguagePreference()) {
    const manualLocale = localStorage.getItem(MANUAL_LOCALE_KEY)
    if (manualLocale) {
      await applyLocale(manualLocale)
    }
    return
  }

  const browserLocale = getBrowserPreferredLocale()
  if (browserLocale) {
    await applyLocale(browserLocale)
    return
  }

  if (localStorage.getItem(GEO_LOOKUP_COMPLETE_KEY) === 'true') {
    return
  }

  const geoLocale = await fetchGeoPreferredLocale()
  if (geoLocale) {
    await applyLocale(geoLocale)
  }

  localStorage.setItem(GEO_LOOKUP_COMPLETE_KEY, 'true')
}

export const getLanguageDisplayName = (locale: string, displayLocale: string) => {
  const baseLanguage = getBaseLanguage(locale)

  try {
    const languageDisplayNames = new Intl.DisplayNames([displayLocale], {
      type: 'language',
    })

    return languageDisplayNames.of(baseLanguage) ?? locale
  } catch {
    return locale
  }
}

export default i18n
