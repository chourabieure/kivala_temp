'use client'
import { HeroSection } from './components/HeroSection'
import { BrandCloudSection } from './components/BrandCloudSection'
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
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <HeroSection />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex w-full justify-center max-md:flex-col gap-4 px-6"
      >
        <Button variant={'secondary'} size={'lg'} animation={'translate'}>
          Être rappelé
          <Icon name="PhoneCall" />
        </Button>
        <Button variant={'gradient'} size={'lg'} animation={'translate'}>
          Installer Kivala
          <Icon name="MoveRight" />
        </Button>
      </motion.div>
      <BrandCloudSection />
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex justify-center pt-16 pb-8"
      >
        <Icon
          name="ArrowDown"
          size={64}
          containerClassName={'text-background-kivala-primary animate-bounce'}
        />
      </motion.div>
      <KeyElements />
      <RedirectionCardSection />
      <PlatineSection />
      <AppSection />
      <VideoSection />
      <Testimonial />
      <FAQSection />
      <PhotosSection />
      <PricingCTASection />
      <BadgeWinner size={'sm'} />
    </>
  )
}
