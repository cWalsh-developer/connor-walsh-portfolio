import { Rocket, Sparkles, Terminal } from 'lucide-react'
import { motion } from 'motion/react'

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[128px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          className="absolute top-0 -left-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Rocket className="h-16 w-16 text-primary/30" />
        </motion.div>

        <motion.div
          className="absolute right-[-5rem] bottom-0"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="h-16 w-16 text-accent/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div className="inline-block" whileHover={{ scale: 1.02 }}>
            <div className="mb-4 flex items-center justify-center gap-3">
              <Terminal className="h-8 w-8 text-primary" />
              <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-sm tracking-wider text-primary">
                SOFTWARE ENGINEER
              </span>
            </div>
          </motion.div>

          <h1 className="text-6xl tracking-tight md:text-8xl">
            <span className="animate-pulse bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SOFTWARE ENGINEER
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl">
            Building innovative solutions with precision and creativity.
            <br />
            Passionate about sci-fi, aerospace technology, and the art of illusion.
          </p>

          <motion.div
            className="flex justify-center gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-lg bg-primary px-8 py-4 text-primary-foreground"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border border-primary/30 px-8 py-4 text-foreground transition-colors hover:bg-primary/5"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary/30 pt-2">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
