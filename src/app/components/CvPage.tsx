import { ArrowLeft, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useCvContent } from '../../content/cv'

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <h2 className="text-sm font-semibold tracking-[0.35em] text-primary uppercase">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </div>
  )
}

export function CvPage() {
  const { t } = useTranslation()
  const cv = useCvContent()

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
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.9fr]">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-primary uppercase">{t('cvPage.curriculumVitae')}</p>
                <h1 className="mb-2 text-5xl font-semibold tracking-tight">{cv.name}</h1>
                <p className="mb-5 text-xl text-muted-foreground">{cv.title}</p>
                <p className="max-w-3xl text-lg leading-8 text-foreground/90">{cv.summary}</p>
                <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{cv.profile}</p>
              </div>

              <div className="rounded-2xl border border-border bg-background/45 p-6">
                <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-primary uppercase">{t('cvPage.contactLabel')}</p>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${cv.email}`} className="break-all transition-colors hover:text-foreground">
                      {cv.email}
                    </a>
                  </div>
                  <div className="pt-2">
                    <a href={cv.linkedin} className="text-sm text-primary transition-colors hover:text-accent">
                      {cv.linkedin.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 px-8 py-10 md:px-12">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <section>
                <SectionHeading title={t('cvPage.professionalExperience')} />
                <div className="space-y-6">
                  {cv.experience.map((item) => (
                    <div key={`${item.role}-${item.organisation}`} className="rounded-2xl border border-border bg-background/35 p-6">
                      <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">{item.organisation}</p>
                        </div>
                        <p className="text-sm text-primary">{item.period}</p>
                      </div>
                      <p className="leading-7 text-foreground/90">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="space-y-8">
                <section className="rounded-2xl border border-border bg-background/35 p-6">
                  <SectionHeading title={t('cvPage.technicalSkills')} />
                  <ul className="space-y-3">
                    {cv.technicalSkills.map((skill) => (
                      <li key={skill} className="flex items-start gap-3 text-foreground/90">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-border bg-background/35 p-6">
                  <SectionHeading title={t('cvPage.transferableSkills')} />
                  <ul className="space-y-3">
                    {cv.transferableSkills.map((skill) => (
                      <li key={skill} className="flex items-start gap-3 text-foreground/90">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-border bg-background/35 p-6">
                  <SectionHeading title={t('cvPage.hobbiesInterests')} />
                  <p className="leading-7 text-foreground/90">{cv.interests}</p>
                </section>
              </div>
            </div>

            <section>
              <SectionHeading title={t('cvPage.education')} />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cv.education.map((item) => (
                  <div
                    key={`${item.qualification}-${item.institution}`}
                    className="rounded-2xl border border-border bg-background/35 p-6"
                  >
                    <div className="mb-2 flex flex-col gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">{item.qualification}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>
                      <p className="text-sm text-primary">{item.period}</p>
                    </div>
                    {item.notes.length > 0 ? (
                      <ul className="space-y-2 pt-1">
                        {item.notes.map((note) => (
                          <li key={note} className="flex items-start gap-3 text-foreground/90">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
