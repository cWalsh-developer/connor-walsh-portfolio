import { ChevronDown, Terminal } from 'lucide-react'
import { motion } from 'motion/react'
import { usePortfolioContent } from '../../content/portfolio'

export function Hero() {
  const portfolio = usePortfolioContent()

  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-35" />

      <motion.div
        className="absolute top-12 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/16 blur-[140px]"
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-[-6rem] h-[24rem] w-[24rem] rounded-full bg-accent/12 blur-[120px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.16, 0.26, 0.16],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="hero-panel transform-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/75 px-4 py-2 shadow-[0_10px_34px_rgba(0,0,0,0.25)]">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-xs tracking-[0.16em] text-primary/95 uppercase md:text-sm">{portfolio.badge}</span>
          </div>

          <h1 className="mt-7 text-5xl font-semibold not-italic text-foreground md:text-7xl">
            {portfolio.role}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 not-italic text-muted-foreground md:text-xl">
            {portfolio.brandStatement} {portfolio.summary}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              className="rounded-lg border border-primary/35 bg-primary/12 px-7 py-3 text-sm font-semibold not-italic text-primary transition-colors hover:bg-primary/20 md:px-8 md:py-3.5 md:text-base"
              onClick={() => document.querySelector(portfolio.primaryCta.href)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {portfolio.primaryCta.label}
            </button>

            <button
              className="rounded-lg border border-border bg-card/65 px-7 py-3 text-sm font-semibold not-italic text-foreground transition-colors hover:bg-card md:px-8 md:py-3.5 md:text-base"
              onClick={() => document.querySelector(portfolio.secondaryCta.href)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {portfolio.secondaryCta.label}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-primary/85"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  )
}
