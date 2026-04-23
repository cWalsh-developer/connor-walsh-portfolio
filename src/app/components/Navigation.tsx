import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePortfolioContent } from '../../content/portfolio'
import { LanguageSwitcher } from './LanguageSwitcher'

type NavItem = {
  href: string
  label: string
  mode: 'route' | 'section'
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const portfolio = usePortfolioContent()

  const navItems: NavItem[] = [
    { label: t('navigation.about'), href: '#/about', mode: 'route' },
    { label: t('navigation.magic', { defaultValue: 'Magic' }), href: '#/magic', mode: 'route' },
    { label: t('navigation.skills'), href: '#skills', mode: 'section' },
    { label: t('navigation.projects'), href: '#projects', mode: 'section' },
    { label: t('navigation.contact'), href: '#contact', mode: 'section' },
  ]

  const handleNavClick = (item: NavItem) => {
    if (item.mode === 'route') {
      window.location.hash = item.href
      setIsOpen(false)
      return
    }

    const element = document.querySelector(item.href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/78 backdrop-blur-2xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.01 }}>
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-gradient-to-br from-primary/28 to-primary/6 p-1">
              <span className="inline-block whitespace-nowrap text-[1rem] leading-none font-bold tracking-[-0.03em] text-white">
                {'{C W}'}
              </span>
            </div>
            <span className="text-lg font-semibold tracking-wide text-foreground">
              {portfolio.name}
            </span>
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative rounded-md px-1 py-1 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <motion.div className="absolute -bottom-0.5 left-1 right-1 h-px bg-primary/75 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            ))}

            <LanguageSwitcher />

            <motion.a
              href={portfolio.resume.href}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-lg border border-primary/35 bg-primary/12 px-5 py-2 text-sm font-semibold text-primary no-underline transition-colors hover:bg-primary/18"
            >
              {portfolio.resume.label}
            </motion.a>
          </div>

          <motion.button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="overflow-hidden md:hidden"
        >
          <div className="mt-3 space-y-2 rounded-xl border border-border bg-card/90 p-3 pt-3 pb-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isOpen ? 0 : -20,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item)}
                className="block w-full rounded-lg px-4 py-2 text-left text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </motion.button>
            ))}
            <div className="px-4 pt-2 pb-1">
              <LanguageSwitcher compact />
            </div>
            <motion.a
              href={portfolio.resume.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: isOpen ? 0 : -20,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-primary/35 bg-primary/12 px-4 py-2 text-sm font-semibold text-primary no-underline"
            >
              {portfolio.resume.label}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
