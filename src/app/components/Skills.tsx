import { Cloud, Code, Cpu, Database, Rocket, Wand2 } from 'lucide-react'
import { motion } from 'motion/react'
import { portfolio } from '../../content/portfolio'

const skillMeta = [
  {
    category: 'Frontend Systems',
    icon: Code,
    color: 'from-primary to-blue-400',
  },
  {
    category: 'UI Engineering',
    icon: Wand2,
    color: 'from-accent to-purple-400',
  },
  {
    category: 'Product Delivery',
    icon: Cpu,
    color: 'from-cyan-400 to-primary',
  },
  {
    category: 'Backend Familiarity',
    icon: Database,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    category: 'Visual Interests',
    icon: Rocket,
    color: 'from-purple-500 to-secondary',
  },
  {
    category: 'Working Style',
    icon: Cloud,
    color: 'from-pink-500 to-accent',
  },
]

export function Skills() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Core Strengths
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The areas I focus on when turning concepts into polished products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((skill, index) => {
            const meta = skillMeta[index]
            const Icon = meta.icon

            return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-6">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`mb-4 h-14 w-14 rounded-lg bg-gradient-to-br ${meta.color} p-3 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-full w-full text-white" />
                  </div>

                  <h3 className="mb-4">{skill.category}</h3>

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
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
