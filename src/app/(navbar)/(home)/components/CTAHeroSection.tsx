'use client'
import { Icon } from '@/components/Icon'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const CTAHeroSection = () => {
  return (
    <SectionWrapper className={'!pt-0 px-6'}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex w-full justify-center max-md:flex-col gap-4"
      >
        <Button variant={'gradient'} size={'lg'} animation={'translate'}>
          Installer Kivala
          <Icon name="MoveRight" />
        </Button>
        <Button variant={'secondary'} size={'lg'} animation={'translate'}>
          Être rappelé
          <Icon name="PhoneCall" />
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
