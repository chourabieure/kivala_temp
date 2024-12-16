import { BackofficeSection } from './components/BackofficeSection'
import { HeroSection } from './components/HeroSection'
import { MainSection } from './components/MainSection'
import { ValueSection } from './components/ValueSection'

export default function SyndicPage() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <MainSection />
      <BackofficeSection />
    </>
  )
}
