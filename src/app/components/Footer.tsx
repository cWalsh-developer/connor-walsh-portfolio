import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { usePortfolioContent } from '../../content/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()
  const portfolio = usePortfolioContent()

  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-12">
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-gradient-to-br from-primary/25 to-primary/6 p-1">
              <span className="inline-block whitespace-nowrap text-[0.86rem] leading-none font-bold tracking-[-0.02em] text-white">
                {'{C W}'}
              </span>
            </div>
            <div>
              <div className="text-foreground">{portfolio.name}</div>
              <div className="text-sm text-muted-foreground">{portfolio.role}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>{`\u00A9 ${year} ${portfolio.name}`}</span>
            <span className="h-1 w-1 rounded-full bg-primary/80" />
            <span>{t('footer.tagline')}</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  )
}
