'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ValuesList, ValuesListType } from '@/components/ValuesList/ValuesList'
import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const values: ValuesListType[] = [
  { label: 'Un SAV expert', icon: 'Headset' },
  { label: 'Installation rapide', icon: 'Zap' },
  {
    label: 'Solution digitale',
    icon: 'Computer',
  },
]

export const HeroSection = () => {
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
    <SectionWrapper ref={ref} className={'pt-[96px] md:pt-[128px] gap-16'}>
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex items-center max-w-5xl w-full md:gap-[96px]"
      >
        <div className="flex flex-1 flex-col gap-[48px] md:gap-[48px]">
          <div className="flex flex-col gap-6 md:gap-3">
            <h2 className="max-md:text-center text-lg font-extrabold text-background-kivala-primary">
              PROFESSIONNEL
            </h2>

            <h1
              className="max-md:text-center text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1]
                md:leading-tight"
            >
              Vous êtes <span className="text-background-kivala-primary">syndic</span> ou{' '}
              <span className="text-background-kivala-primary">
                professionnels de l'immobilier ?
              </span>
            </h1>
            <h2 className="text-md md:text-xl lg:text-2xl font-semibold">
              Kivala est <span className="text-background-kivala-primary">LA</span> solution pour
              <span className="text-background-kivala-primary"> sécuriser</span> et
              <span className="text-background-kivala-primary"> simplifier</span> la gestion de vos
              immeubles.
            </h2>
          </div>

          <div className="flex flex-col gap-12 md:gap-6 w-full">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
              className="flex w-full justify-center max-md:flex-col gap-4"
            >
              <Button variant={'primary'} size={'lg'} animation={'translate'}>
                Demander une démonstration
              </Button>
              <Button variant={'secondary'} size={'lg'} animation={'translate'}>
                Consulter notre brochure
                <Icon name="MoveRight" />
              </Button>
            </motion.div>
            <ValuesList values={values} />
          </div>
        </div>
        <div className="relative flex-1 h-[500px] max-md:hidden bg-background-kivala-tertiary"></div>
      </motion.div>
    </SectionWrapper>
  )
}
