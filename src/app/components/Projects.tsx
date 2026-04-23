import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { usePortfolioContent } from '../../content/portfolio'
import { ImageFallback } from './ImageFallback'

function ProjectVisual({
  image,
  mobileImage,
  title,
  imageFit,
}: {
  image: string
  mobileImage?: string
  title: string
  imageFit?: 'cover' | 'contain'
}) {
  if (!mobileImage) {
    return (
      <>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
        <ImageFallback
          src={image}
          alt={title}
          className={`h-full w-full ${imageFit === 'contain' ? 'object-contain p-2 md:p-3' : 'object-cover'}`}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-primary/18" />
      </>
    )
  }

  return (
    <>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      <ImageFallback src={image} alt={`${title} desktop view`} className="h-full w-full object-cover object-top" />
      <div className="absolute right-1 bottom-1 z-20 rounded-[0.95rem] bg-[#0a0d14] p-0.5 shadow-[0_12px_26px_rgba(0,0,0,0.36)] ring-1 ring-white/10 sm:right-2 sm:bottom-2 sm:rounded-[1.45rem] sm:p-1 md:rounded-[1.7rem] md:p-1.5">
        <div className="w-[38px] rounded-[0.72rem] bg-black p-0.5 sm:w-[62px] sm:rounded-[1.02rem] sm:p-1 md:w-[84px] md:rounded-[1.2rem]">
          <div className="mx-auto mb-0.5 h-[2px] w-4 rounded-full bg-white/10 sm:mb-1 sm:h-[3px] sm:w-7" />
          <div className="overflow-hidden rounded-[0.56rem] border border-white/8 sm:rounded-[0.84rem] md:rounded-[1rem]">
            <ImageFallback
              src={mobileImage}
              alt={`${title} mobile app view`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mx-auto mt-0.5 h-[2px] w-3 rounded-full bg-white/10 sm:mt-1 sm:h-[3px] sm:w-5" />
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-primary/18" />
    </>
  )
}

export function Projects() {
  const { t } = useTranslation()
  const portfolio = usePortfolioContent()

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute top-[-4rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-primary/14 blur-[120px]" />
        <div className="absolute right-1/4 bottom-[-5rem] h-[20rem] w-[20rem] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/75 px-4 py-2">
            <span className="text-xs tracking-[0.16em] text-primary uppercase">{t('projectsSection.badge')}</span>
          </div>

          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{t('projectsSection.title')}</h2>
          <p className="text-lg text-muted-foreground md:text-xl">{t('projectsSection.subtitle')}</p>
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
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/92 shadow-[0_22px_48px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-primary/45">
                <div className="grid gap-10 p-8 md:grid-cols-2 md:p-9">
                  <motion.div
                    className="relative aspect-video overflow-hidden rounded-2xl border border-border/70"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectVisual
                      image={project.image}
                      mobileImage={'mobileImage' in project ? project.mobileImage : undefined}
                      title={project.title}
                      imageFit={
                        'imageFit' in project &&
                        (project.imageFit === 'cover' || project.imageFit === 'contain')
                          ? project.imageFit
                          : undefined
                      }
                    />
                  </motion.div>

                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-3xl font-semibold tracking-tight">{project.title}</h3>

                    <p className="text-lg text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted/70 px-3 py-1 text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.liveHref}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/35 bg-primary/12 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                      >
                        <span>{t('projectsSection.livePreview')}</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>

                      <motion.a
                        href={project.sourceHref}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/45 px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        <span>{t('projectsSection.sourceCode')}</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
