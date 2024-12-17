import { KeyElements } from '../(home)/components/KeyElements'
import { PricingCTASection } from '../(home)/components/PricingCTASection'
import { ContactCTASection } from '../particulier/components/ContactCTASection'
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
      <KeyElements variant="light" />
      <ContactCTASection />
      <PricingCTASection variant="CTA" />
    </>
  )
}
