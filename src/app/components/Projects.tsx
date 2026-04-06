import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const projects = [
  {
    title: 'Distributed Task Scheduler',
    description:
      'High-performance task scheduling system with real-time monitoring, fault tolerance, and dynamic load balancing.',
    image:
      'https://images.unsplash.com/photo-1585051256362-eb56bf4d5ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5JTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzU0MzI1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Node.js', 'Redis', 'Docker', 'Microservices'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'Interactive data visualization platform with live streaming capabilities and custom metric tracking for enterprise applications.',
    image:
      'https://images.unsplash.com/photo-1709409903008-fbc1ce9b7dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMHN0YXJzJTIwY29zbWljfGVufDF8fHx8MTc3NTQzMjUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description:
      'Automated deployment and monitoring solution for multi-cloud environments with cost optimization and security scanning.',
    image:
      'https://images.unsplash.com/photo-1770116316553-9ba33a5666fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjByb2NrZXQlMjBsYXVuY2glMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTQzMjUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'AWS', 'Terraform', 'Kubernetes'],
    gradient: 'from-cyan-500 to-blue-500',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm tracking-wider text-primary">FEATURED WORK</span>
          </div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Building scalable solutions for complex problems</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50">
                <div className="grid gap-8 p-8 md:grid-cols-2">
                  <motion.div
                    className="relative aspect-video overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />

                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                    />
                  </motion.div>

                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-3xl">{project.title}</h3>

                    <p className="text-lg text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary transition-colors hover:text-accent"
                      >
                        <span>View Project</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)',
                    backgroundSize: '200% 100%',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
