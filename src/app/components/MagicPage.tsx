import { ArrowLeft, ArrowRight, BookOpenText, Sparkles, Theater, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const PERFORMANCE_START_YEAR = 2008
const PSYCHOLOGY_START_YEAR = 2014

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <h2 className="text-sm font-semibold tracking-[0.35em] text-primary uppercase">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  )
}

export function MagicPage() {
  const yearsPerforming = Math.max(new Date().getFullYear() - PERFORMANCE_START_YEAR, 1)
  const yearsInPsychology = Math.max(new Date().getFullYear() - PSYCHOLOGY_START_YEAR, 1)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-12 h-72 w-72 rounded-full bg-primary/12 blur-[110px]" />
        <div className="absolute right-4 bottom-24 h-80 w-80 rounded-full bg-primary/8 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-col gap-4">
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('cvPage.backToPortfolio')}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="overflow-hidden rounded-[1.6rem] border border-border bg-card/85 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:rounded-[2rem]"
        >
          <div className="border-b border-border bg-gradient-to-r from-primary/8 via-transparent to-transparent px-5 py-8 sm:px-7 sm:py-9 md:px-12 md:py-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-primary uppercase">{t('magicPage.badge')}</p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{t('magicPage.title')}</h1>
            <p className="max-w-4xl text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
              {t('magicPage.description', {
                yearsInPsychology,
              })}
            </p>
          </div>

          <div className="space-y-8 px-5 py-8 sm:space-y-10 sm:px-7 sm:py-9 md:space-y-12 md:px-12 md:py-10">
            <section>
              <SectionHeading title={t('magicPage.glanceTitle')} />
              <div className="grid gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                  <Sparkles className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{t('magicPage.cards.yearsTitle', { yearsPerforming })}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t('magicPage.cards.yearsDescription')}</p>
                </article>

                <article className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                  <Theater className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{t('magicPage.cards.internationalTitle')}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {t('magicPage.cards.internationalDescription')}
                  </p>
                </article>

                <article className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                  <Users className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{t('magicPage.cards.audiencesTitle')}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t('magicPage.cards.audiencesDescription')}</p>
                </article>
              </div>
            </section>

            <section>
              <SectionHeading title={t('magicPage.psychologyTitle')} />
              <div className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t('magicPage.psychology.one')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t('magicPage.psychology.two')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t('magicPage.psychology.three')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t('magicPage.psychology.four')}</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <SectionHeading title={t('magicPage.notableTitle')} />
              <div className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                <p className="leading-7 text-foreground/90">{t('magicPage.notableDescription')}</p>
              </div>
            </section>

            <section>
              <SectionHeading title={t('magicPage.creativeTitle')} />
              <div className="space-y-6">
                <article className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                  <h3 className="text-xl font-semibold">{t('magicPage.consultingTitle')}</h3>
                  <p className="mt-3 leading-7 text-foreground/90">{t('magicPage.consultingDescription')}</p>
                </article>

                <article className="rounded-2xl border border-border bg-background/35 p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <BookOpenText className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t('magicPage.writingTitle')}</h3>
                  </div>
                  <p className="leading-7 text-foreground/90">{t('magicPage.writingDescription')}</p>
                </article>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-transparent to-transparent p-5 sm:p-6">
              <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">{t('magicPage.developerLabel')}</p>
              <p className="mt-3 max-w-3xl leading-7 text-foreground/90">{t('magicPage.developerDescription')}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
                >
                  {t('magicPage.developerCta')}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#/cv"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
                >
                  {t('magicPage.cvCta')}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
