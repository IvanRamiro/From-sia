import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { OccasionSection } from './components/OccasionSection.tsx'

function App() {
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

export default App
