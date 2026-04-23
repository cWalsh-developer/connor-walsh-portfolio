import { BrainCircuit, Code, Database, MessagesSquare, Smartphone } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { usePortfolioContent } from '../../content/portfolio'

const skillMeta = {
  backend: {
    icon: Database,
  },
  frontend: {
    icon: Code,
  },
  mobile: {
    icon: Smartphone,
  },
  ai: {
    icon: BrainCircuit,
  },
  workflow: {
    icon: MessagesSquare,
  },
} as const

export function Skills() {
  const { t } = useTranslation()
  const portfolio = usePortfolioContent()

  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,210,255,0.1),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{t('skillsSection.title')}</h2>
          <p className="text-lg text-muted-foreground md:text-xl">{t('skillsSection.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((skill, index) => {
            const meta = skillMeta[skill.id]
            const Icon = meta.icon

            return (
            <motion.article
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/88 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition-colors duration-300 group-hover:border-primary/45">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,210,255,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/35 bg-primary/12 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-4 text-xl">{skill.category}</h3>

                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
