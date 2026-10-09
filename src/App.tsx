import { Header } from './components/header/Header.tsx'
import { Hero } from './components/hero/Hero.tsx'
import { OccasionSection } from './components/occasions/OccasionSection.tsx'

export function App() {
  return (
    <div className="min-h-svh bg-ivory text-charcoal">
      <Header />
      <main>
        <Hero />
        <OccasionSection />
      </main>
    </div>
  )
}
