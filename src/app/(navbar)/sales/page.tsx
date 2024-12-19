'use client'
import { SalesForm } from './components/SalesForm'
import { HeroSection } from './pages/HeroSection'
import { ContactCTASection } from '../particulier/components/ContactCTASection'

export default () => {
  return (
    <>
      <HeroSection />
      <SalesForm />
      <ContactCTASection />
    </>
  )
}
