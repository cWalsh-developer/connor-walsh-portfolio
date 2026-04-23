import { Github, Instagram, Linkedin, Mail, Send } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePortfolioContent } from '../../content/portfolio'

export function Contact() {
  const { t } = useTranslation()
  const portfolio = usePortfolioContent()

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = t('contactSection.emailSubject', {
      name: formState.name || t('contactSection.websiteVisitor'),
    })
    const body = [
      `${t('contactSection.name')}: ${formState.name}`,
      `${t('contactSection.email')}: ${formState.email}`,
      '',
      formState.message,
    ].join('\n')

    window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const socialLinks = [
    { icon: Github, label: portfolio.socialLinks[0].label, href: portfolio.socialLinks[0].href },
    { icon: Linkedin, label: portfolio.socialLinks[1].label, href: portfolio.socialLinks[1].href },
    { icon: Instagram, label: portfolio.socialLinks[2].label, href: portfolio.socialLinks[2].href },
    { icon: Mail, label: t('contactSection.email'), href: `mailto:${portfolio.contact.email}` },
  ]

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-16 md:mb-20"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">{t('contactSection.title')}</h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">{t('contactSection.subtitle')}</p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card/90 p-5 shadow-[0_20px_44px_rgba(0,0,0,0.24)] sm:p-7">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm tracking-wide text-muted-foreground">
                  {t('contactSection.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                  className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 transition-all focus:border-primary/65 focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder={t('contactSection.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm tracking-wide text-muted-foreground">
                  {t('contactSection.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                  className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 transition-all focus:border-primary/65 focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder={t('contactSection.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm tracking-wide text-muted-foreground">
                  {t('contactSection.message')}
                </label>
                <textarea
                  id="message"
                  required
                  value={formState.message}
                  onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                  rows={6}
                  className="w-full resize-none rounded-lg border border-border bg-muted/40 px-4 py-3 transition-all focus:border-primary/65 focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder={t('contactSection.messagePlaceholder')}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-lg border border-primary/35 bg-primary/12 px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                <span>{t('contactSection.sendMessage')}</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 rounded-2xl border border-border bg-card/90 p-6 shadow-[0_20px_44px_rgba(0,0,0,0.24)] sm:p-8">
              <h3 className="text-2xl">{t('contactSection.getInTouch')}</h3>

              <p className="text-muted-foreground">{portfolio.intro}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{portfolio.contact.email}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">{portfolio.contact.note}</p>

              <div className="border-t border-border pt-6">
                <p className="mb-4 text-sm text-muted-foreground">{t('contactSection.findMeOnline')}</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ scale: 1.06, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/12 hover:text-primary"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="rounded-2xl border border-primary/25 bg-primary/8 p-6 sm:p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                <div>
                  <h4 className="mb-2">{t('contactSection.availableForProjects')}</h4>
                  <p className="text-sm text-muted-foreground">{portfolio.contact.availability}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
