import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted:', formState)
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ]

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Let&apos;s discuss your next project</p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                  rows={6}
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground"
              >
                <span>Send Message</span>
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
            <div className="space-y-6 rounded-2xl border border-border bg-card p-8">
              <h3 className="text-2xl">Get in Touch</h3>

              <p className="text-muted-foreground">
                I&apos;m always interested in hearing about new opportunities, challenging
                projects, or simply connecting with fellow developers and tech enthusiasts.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@example.com</span>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="mb-4 text-sm text-muted-foreground">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted transition-colors hover:bg-primary/10 hover:text-primary"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1.5 h-3 w-3 animate-pulse rounded-full bg-green-500" />
                <div>
                  <h4 className="mb-2">Available for Projects</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new opportunities for full-time positions and freelance
                    projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
