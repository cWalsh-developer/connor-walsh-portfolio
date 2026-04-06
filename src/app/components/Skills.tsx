import { Cloud, Code, Cpu, Database, Rocket, Wand2 } from 'lucide-react'
import { motion } from 'motion/react'

const skills = [
  {
    category: 'Frontend Development',
    icon: Code,
    items: [
      'React & TypeScript',
      'Modern CSS & Tailwind',
      'State Management',
      'Performance Optimization',
    ],
    color: 'from-primary to-blue-400',
  },
  {
    category: 'Backend Development',
    icon: Database,
    items: ['Node.js & Express', 'RESTful APIs', 'Database Design', 'Authentication & Security'],
    color: 'from-accent to-purple-400',
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Microservices Architecture'],
    color: 'from-cyan-400 to-primary',
  },
  {
    category: 'System Architecture',
    icon: Cpu,
    items: ['Scalable Systems', 'Design Patterns', 'Performance Tuning', 'Technical Documentation'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    category: 'Aerospace Enthusiast',
    icon: Rocket,
    items: ['Orbital Mechanics', 'Mission Design', 'Space Technology', 'Flight Simulation'],
    color: 'from-purple-500 to-secondary',
  },
  {
    category: 'Creative Arts',
    icon: Wand2,
    items: ['Performance Magic', 'UI/UX Design', 'Creative Problem Solving', 'Public Speaking'],
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Technical expertise and personal passions</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
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
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
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
                    className={`mb-4 h-14 w-14 rounded-lg bg-gradient-to-br ${skill.color} p-3 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <skill.icon className="h-full w-full text-white" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
