import { Heart, Rocket } from 'lucide-react'
import { motion } from 'motion/react'
import { portfolio } from '../../content/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-12">
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {portfolio.name}
              </div>
              <div className="text-sm text-muted-foreground">{portfolio.role}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>{`\u00A9 ${year} Built with`}</span>
            <Heart className="h-4 w-4 animate-pulse fill-accent text-accent" />
            <span>for ambitious digital products</span>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  )
}
