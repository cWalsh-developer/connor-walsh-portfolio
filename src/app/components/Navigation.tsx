import { Menu, Rocket, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePortfolioContent } from '../../content/portfolio'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const portfolio = usePortfolioContent()

  const navItems = [
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.skills'), href: '#skills' },
    { label: t('navigation.projects'), href: '#projects' },
    { label: t('navigation.contact'), href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl text-transparent">
              {portfolio.name}
            </span>
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            ))}

            <LanguageSwitcher />

            <motion.a
              href={portfolio.resume.href}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 font-semibold text-black no-underline"
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
          <div className="space-y-2 pt-4 pb-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isOpen ? 0 : -20,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
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
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2 font-semibold text-black no-underline"
            >
              {portfolio.resume.label}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
