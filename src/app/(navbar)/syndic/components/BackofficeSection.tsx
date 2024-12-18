'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ValuesList, ValuesListType } from '@/components/ValuesList/ValuesList'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const values: ValuesListType[] = [
  {
    label: 'Prise en main rapide',
    icon: 'Zap',
  },
  {
    label: 'Un SAV réactif',
    icon: 'Headset',
  },
  {
    label: 'Version Mobile',
    icon: 'Smartphone',
  },
]

export const BackofficeSection = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const value = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <SectionWrapper ref={ref} className={'bg-background-kivala-tertiary !pb-0'}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex w-full flex-col gap-8 z-[3]"
      >
        <SectionTitle
          title="Dashboard Gestionnaire"
          subtitle="Découvrez notre support administrateur"
        />
        <ValuesList values={values} variant="positive" />
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex w-full justify-center max-md:flex-col gap-4"
        >
          <Button
            variant={'secondary'}
            size={'lg'}
            animation={'translate'}
            className="bg-background-default hover:bg-background-default/80"
          >
            Contactez-nous
            <Icon name="MessagesSquare" />
          </Button>
          <Button variant={'gradient'} size={'lg'} animation={'translate'}>
            Demander une démonstration
            <Icon name="MoveRight" />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="relative w-full max-w-5xl h-[300px] md:h-[500px] z-[2]"
      >
        <Image
          src={'/image/backoffice-screen.png'}
          alt="backoffice-section"
          fill
          className="drop-shadow-xl rounded-t-2xl object-cover object-left-top z-[2]"
        />
      </motion.div>
    </SectionWrapper>
  )
}
