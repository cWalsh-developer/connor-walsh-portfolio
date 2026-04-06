import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { portfolio } from '../../content/portfolio'
import { ImageFallback } from './ImageFallback'

function ProjectVisual({
  image,
  mobileImage,
  title,
  gradient,
  imageFit,
}: {
  image: string
  mobileImage?: string
  title: string
  gradient: string
  imageFit?: 'cover' | 'contain'
}) {
  if (!mobileImage) {
    return (
      <>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
        <ImageFallback
          src={image}
          alt={title}
          className={`h-full w-full ${imageFit === 'contain' ? 'object-contain p-2 md:p-3' : 'object-cover'}`}
        />
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
        />
      </>
    )
  }

  return (
    <>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/18 to-accent/12 mix-blend-screen" />
      <ImageFallback src={image} alt={`${title} desktop view`} className="h-full w-full object-cover object-top" />
      <div className="absolute right-2 bottom-2 z-20 rounded-[1.8rem] bg-[#0a0d14] p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.42)] ring-1 ring-white/10">
        <div className="w-[92px] rounded-[1.35rem] bg-black p-1.5 md:w-[108px]">
          <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-white/10" />
          <div className="overflow-hidden rounded-[1.1rem] border border-white/8">
            <ImageFallback
              src={mobileImage}
              alt={`${title} mobile app view`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mx-auto mt-1.5 h-1 w-7 rounded-full bg-white/10" />
        </div>
      </div>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-18`}
      />
    </>
  )
}

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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A few project directions that show how I approach product, layout, and frontend craft.
          </p>
        </motion.div>

        <div className="space-y-8">
          {portfolio.projects.map((project, index) => (
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
                    <ProjectVisual
                      image={project.image}
                      mobileImage={'mobileImage' in project ? project.mobileImage : undefined}
                      title={project.title}
                      gradient={project.gradient}
                      imageFit={'imageFit' in project ? project.imageFit : undefined}
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
                      <motion.a
                        href={project.liveHref}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary transition-colors hover:text-accent"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>

                      <motion.a
                        href={project.sourceHref}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </motion.a>
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
