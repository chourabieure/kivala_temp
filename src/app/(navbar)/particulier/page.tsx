import { KeyElements } from '../(home)/components/KeyElements'
import { PricingCTASection } from '../(home)/components/PricingCTASection'
import { AccessTypesSection } from './components/AccessTypesSection'
import { ClassicMethodSection } from './components/ClassicMethodSection'
import { ContactCTASection } from './components/ContactCTASection'
import { EquippedCTASection } from './components/EquippedSection'
import { HeroSection } from './components/HeroSection'
import { KeyValuesSection } from './components/KeyValuesSection'

export default function ParticulierPage() {
  return (
    <>
      <HeroSection />
      <KeyValuesSection />
      <AccessTypesSection />
      <KeyElements />
      <ClassicMethodSection />
      <EquippedCTASection />
      <ContactCTASection />
      <PricingCTASection variant="CTA" />
    </>
  )
}
