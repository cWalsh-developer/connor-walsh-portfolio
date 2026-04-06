import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />

        <section id="skills">
          <Skills />
        </section>

        <Projects />

        <Contact />
      </main>

      <Footer />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 h-32 w-32 border-t-2 border-l-2 border-primary/20" />
        <div className="absolute top-0 right-0 h-32 w-32 border-t-2 border-r-2 border-primary/20" />
        <div className="absolute bottom-0 left-0 h-32 w-32 border-b-2 border-l-2 border-primary/20" />
        <div className="absolute right-0 bottom-0 h-32 w-32 border-r-2 border-b-2 border-primary/20" />
      </div>
    </div>
  )
}
