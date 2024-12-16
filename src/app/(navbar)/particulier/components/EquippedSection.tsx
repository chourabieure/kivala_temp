'use client'
import { Icon } from '@/components/Icon'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const EquippedCTASection = () => {
  return (
    <SectionWrapper className={'max-md:gap-6 bg-background-kivala-tertiary'}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex w-full max-w-5xl bg-background-default rounded-xl overflow-hidden"
      >
        <div className="relative max-md:hidden w-[600px]">
          <Image
            src="/image/platine-installation.png"
            alt="Image de platine d'installation"
            fill
            className="object-cover"
          />
        </div>
        <span className="flex flex-col gap-3 p-6 md:p-12">
          <span className="text-[28px] font-bold leading-tight">
            Votre résidence n'est pas encore équipée ?
          </span>
          <span className="text-xl">
            Kivala® se charge de contacter votre syndic pour vous et d'organiser l'installation
            dans votre immeuble...{' '}
            <span className="text-background-kivala-primary italic">
              Nous nous occupons de tout
            </span>
            .
          </span>
        </span>
      </motion.div>
      <div className="flex max-md:flex-col gap-3 md:gap-6 max-md:w-full">
        <Button variant={'gradient'} size={'lg'} animation={'translate'}>
          Demander l'installation
          <Icon name="ArrowDownToDot" />
        </Button>
        <Button
          variant={'secondary'}
          size={'lg'}
          animation={'translate'}
          className="bg-background-default hover:bg-background-default/80"
        >
          Consulter la brochure
          <Icon name="MoveRight" />
        </Button>
      </div>
    </SectionWrapper>
  )
}
