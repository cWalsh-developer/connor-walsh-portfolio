import { ArrowLeft, ArrowRight, Briefcase, Brain, GraduationCap, Route } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const CAREER_START_YEAR = 2018

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <h2 className="text-sm font-semibold tracking-[0.35em] text-primary uppercase">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  )
}

export function AboutPage() {
  const yearsOfExperience = Math.max(new Date().getFullYear() - CAREER_START_YEAR, 1)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/12 blur-[110px]" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-primary/8 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:px-8">
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
          className="overflow-hidden rounded-[2rem] border border-border bg-card/85 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur"
        >
          <div className="border-b border-border bg-gradient-to-r from-primary/8 via-transparent to-transparent px-8 py-10 md:px-12">
            <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-primary uppercase">{t('aboutPage.badge')}</p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">{t('aboutPage.title')}</h1>
            <p className="max-w-4xl text-lg leading-8 text-foreground/90">
              {t('aboutPage.description', {
                yearsOfExperience,
              })}
            </p>
          </div>

          <div className="space-y-12 px-8 py-10 md:px-12">
            <section>
              <SectionHeading title={t('aboutPage.experienceTitle')} />
              <div className="grid gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-border bg-background/35 p-6">
                  <Briefcase className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{t('aboutPage.cards.yearsTitle', { yearsOfExperience })}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t('aboutPage.cards.yearsDescription')}</p>
                </article>

                <article className="rounded-2xl border border-border bg-background/35 p-6">
                  <GraduationCap className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{t('aboutPage.cards.educationTitle')}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t('aboutPage.cards.educationDescription')}</p>
                </article>

                <article className="rounded-2xl border border-border bg-background/35 p-6">
                  <Brain className="mb-4 h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{t('aboutPage.cards.aiTitle')}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t('aboutPage.cards.aiDescription')}</p>
                </article>
              </div>
            </section>

            <section>
              <SectionHeading title={t('aboutPage.projectsTitle')} />
              <div className="space-y-6">
                <article className="rounded-2xl border border-border bg-background/35 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Route className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t('aboutPage.safeMapTitle')}</h3>
                  </div>
                  <p className="leading-7 text-foreground/90">{t('aboutPage.safeMapDescription')}</p>
                </article>

                <article className="rounded-2xl border border-border bg-background/35 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">{t('aboutPage.greenWasteTitle')}</h3>
                  </div>
                  <p className="leading-7 text-foreground/90">{t('aboutPage.greenWasteDescription')}</p>
                </article>
              </div>
            </section>

            <section>
              <SectionHeading title={t('aboutPage.contributionsTitle')} />
              <ul className="space-y-3 rounded-2xl border border-border bg-background/35 p-6">
                <li className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{t('aboutPage.contributions.one')}</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{t('aboutPage.contributions.two')}</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{t('aboutPage.contributions.three')}</span>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-transparent to-transparent p-6">
              <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">{t('aboutPage.beyondLabel')}</p>
              <p className="mt-3 max-w-3xl leading-7 text-foreground/90">{t('aboutPage.beyondDescription')}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#/magic"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
                >
                  {t('aboutPage.magicCta')}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#/cv"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
                >
                  {t('aboutPage.cvCta')}
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
