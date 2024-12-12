'use client'
import { Icon } from '@/components/Icon'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <SectionWrapper className={'pt-6 md:pt-12 !pb-0 gap-16'}>
      <div className="flex">
        <div>
          <h1>Vous êtes syndic ou professionnel de l'immobilier ?</h1>
          <h2>Kivala est LA solution pour sécuriser et simplifier la gestion de vos immeubles.</h2>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex w-full justify-center max-md:flex-col gap-4"
        >
          <Button variant={'gradient'} size={'lg'} animation={'translate'}>
            Consulter notre brochure
          </Button>
          <Button variant={'gradient'} size={'lg'} animation={'translate'}>
            Réserver une démonstration
            <Icon name="MoveRight" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
