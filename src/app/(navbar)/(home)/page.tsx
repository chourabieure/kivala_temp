import { HeroSection } from './components/HeroSection'
import { BrandCloudSection } from './components/BrandCloudSection'
import { CTAHeroSection } from './components/CTAHeroSection'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { PlatineSection } from './components/PlatineSection'
import { AppSection } from './components/AppSection'
import { RedirectionCardSection } from './components/RedirectionCardSection'
import { BadgeWinner } from '@/components/BadgeWinner/BadgerWinner'
import { KeyElements } from './components/KeyElements'
import { Testimonial } from './components/Testimonial'
import { VideoSection } from './components/VideoSection'
import { PricingCTASection } from './components/PricingCTASection'
import { FAQSection } from './components/FAQSection'
import { Icon } from '@/components/Icon'
import { PhotosSection } from './components/PhotosSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTAHeroSection />
      <div className="flex justify-center">
        <BadgeWinner />
      </div>
      <BrandCloudSection />
      <div className="flex justify-center py-16">
        <Icon
          name="ArrowDown"
          size={64}
          containerClassName={'text-background-kivala-primary animate-bounce'}
        />
      </div>
      <KeyElements />
      <RedirectionCardSection />
      <VideoSection />
      <PlatineSection />
      <AppSection />
      <Testimonial />
      <FAQSection />
      <PhotosSection />
      <PricingCTASection />
      <BadgeWinner size={'sm'} />
    </>
  )
}
