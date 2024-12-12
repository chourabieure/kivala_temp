'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const values = [
  { text: 'Sécurité optimale', icon: 'Shield' },
  {
    text: 'Solution digitale',
    icon: 'Computer',
  },
  {
    text: 'Un SAV Expert',
    icon: 'Headset',
  },
] as { text: string; icon: IconType }[]

export const VideoSection = () => {
  return (
    <SectionWrapper className={'bg-background-kivala-tertiary'}>
      <SectionTitle title="Notre concept en vidéo" subtitle="Besoin d'en savoir plus ?" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="relative w-full max-w-5xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-xl
          overflow-hidden"
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/TpxpaXD03Tw?si=QPkirQ-O-Yh_bIni"
          title="Vidéo explicative"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex flex-col max-w-5xl gap-8"
      >
        <span className="text-2xl font-medium md:text-center">
          Kivala® apporte une solution clé en main, fonctionnelle et simple d’usage, pour vous
          garantir une parfaite maîtrise des accès dans votre immeuble. Un système de gestion
          d’accès nouvelle génération.
        </span>
        <div className="flex w-full gap-6 md:gap-12 items-center flex-wrap justify-center">
          {values.map(({ text, icon }, index) => (
            <span
              key={index}
              className={cn(
                `flex max-md:flex-1 items-center gap-2 md:gap-3 text-xl font-semibold leading-none whitespace-nowrap
                max-md:justify-center`,
              )}
            >
              <Icon name={icon} containerClassName={'text-background-kivala-primary'} size={24} />
              {text}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex w-full justify-center max-md:flex-col gap-4"
      >
        <Button variant={'primary'} size={'lg'} animation={'translate'}>
          Contactez-nous
          <Icon name="MessagesSquare" />
        </Button>
        <Button variant={'gradient'} size={'lg'} animation={'translate'}>
          Consulter la brochure
          <Icon name="MoveRight" />
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
