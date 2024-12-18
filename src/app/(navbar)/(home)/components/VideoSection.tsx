'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ValuesList, ValuesListType } from '@/components/ValuesList/ValuesList'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ValueSection } from '../../syndic/components/ValueSection'

const values: ValuesListType[] = [
  { label: 'Sécurité optimale', icon: 'Shield' },
  {
    label: 'Solution digitale',
    icon: 'Computer',
  },
  {
    label: 'Un SAV Expert',
    icon: 'Headset',
  },
]

export const VideoSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Notre concept en vidéo" subtitle="Besoin d'en savoir plus ?" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="relative w-full max-w-5xl h-[200px] sm:h-[275px] md:h-[350px] lg:h-[500px] rounded-xl
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
        <span className="text-xl font-medium md:text-center">
          Kivala® apporte une solution clé en main, fonctionnelle et simple d’usage, pour vous
          garantir une parfaite maîtrise des accès dans votre immeuble. Un système de gestion
          d’accès nouvelle génération.
        </span>
        <ValuesList values={values} />
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex w-full justify-center max-md:flex-col gap-4"
      >
        <Button variant={'secondary'} size={'lg'} animation={'translate'}>
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
