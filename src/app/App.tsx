import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Contact } from './components/Contact'
import { CvPage } from './components/CvPage'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MagicPage } from './components/MagicPage'
import { Navigation } from './components/Navigation'
import { AboutPage } from './components/AboutPage'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { applyAutomaticLocale } from '../i18n'

export default function App() {
  const [route, setRoute] = useState(window.location.hash)
  const { i18n } = useTranslation()
  const visualParam = new URLSearchParams(window.location.search).get('visual')
  const visualPreset = visualParam === 'a' ? 'visual-a' : 'visual-b'

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const pageRoutes = new Set(['#/about', '#/magic', '#/cv', '#', ''])
    if (pageRoutes.has(route)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [route])

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'en'
  }, [i18n.resolvedLanguage])

  useEffect(() => {
    void applyAutomaticLocale()
  }, [])

  if (route === '#/cv') {
    return <div className={visualPreset}><CvPage /></div>
  }

  if (route === '#/about') {
    return <div className={visualPreset}><AboutPage /></div>
  }

  if (route === '#/magic') {
    return <div className={visualPreset}><MagicPage /></div>
  }

  return (
    <div className={`${visualPreset} min-h-screen bg-background text-foreground`}>
      <Navigation />

      <main>
        <Hero />

        <section id="skills">
          <Skills />
        </section>

        <Projects />

        <Contact />
      </main>

      <Footer />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(122,210,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20" />
      </div>
    </div>
  )
}
