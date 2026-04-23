import { Globe } from 'lucide-react'
import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  clearUserLanguagePreference,
  getLanguageDisplayName,
  hasManualLanguagePreference,
  setUserLanguagePreference,
  SUPPORTED_LANGUAGE_OPTIONS,
} from '../../i18n'

type LanguageSwitcherProps = {
  compact?: boolean
}

const AUTO_OPTION_VALUE = 'auto'

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation()

  const currentLanguage = i18n.resolvedLanguage ?? 'en'
  const staticCodes = new Set<string>(SUPPORTED_LANGUAGE_OPTIONS.map((option) => option.code))
  const currentBaseLanguage = currentLanguage.toLowerCase().split('-')[0]
  const isManual = hasManualLanguagePreference()
  const hasDynamicLanguage = !staticCodes.has(currentBaseLanguage)

  const selectValue = isManual ? currentLanguage : AUTO_OPTION_VALUE

  const handleLanguageChange = async (selectedValue: string) => {
    if (selectedValue === AUTO_OPTION_VALUE) {
      await clearUserLanguagePreference()
      return
    }

    await setUserLanguagePreference(selectedValue)
  }

  return (
    <div className={`relative inline-flex items-center ${compact ? 'w-full' : ''}`}>
      <Globe className="pointer-events-none absolute left-3 h-4 w-4 text-primary" />
      <select
        value={selectValue}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          void handleLanguageChange(event.target.value)
        }}
        aria-label={t('navigation.language')}
        className={`w-full appearance-none rounded-lg border border-border bg-card/80 py-2 pr-3 pl-9 text-sm text-foreground transition-colors focus:border-primary focus:outline-none ${
          compact ? '' : 'min-w-[168px]'
        }`}
      >
        <option value={AUTO_OPTION_VALUE}>{t('navigation.auto')}</option>

        {SUPPORTED_LANGUAGE_OPTIONS.map((option) => (
          <option key={option.code} value={option.code}>
            {t(option.labelKey)}
          </option>
        ))}

        {hasDynamicLanguage ? (
          <option value={currentLanguage}>
            {getLanguageDisplayName(currentLanguage, currentLanguage)}
          </option>
        ) : null}
      </select>
    </div>
  )
}
