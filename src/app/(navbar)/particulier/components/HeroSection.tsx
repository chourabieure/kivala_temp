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
  { label: 'Sécurité optimale', icon: 'Shield' },
  {
    label: 'Entreprise française',
    icon: 'Flag',
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
    <SectionWrapper ref={ref} className={'pt-[96px] md:pt-[calc(128px_+_50px)] gap-16'}>
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex items-center max-w-5xl w-full md:gap-[96px]"
      >
        <div className="relative flex-1 h-[500px] w-[500px] max-md:hidden">
          <Image
            src={'/image/particulier-hero.png'}
            alt={''}
            fill
            className="object-cover rounded-xl overflow-hidden"
          />
          <motion.div
            style={{
              y: useTransform(value, [0, 1], [10, 25]),
              x: useTransform(value, [0, 1], [-25, 0]),
              right: -50,
              top: 0,
            }}
            className={cn(
              `absolute max-tablet:hidden flex gap-3 bg-background-default/80 backdrop-filter backdrop-blur-sm
              rounded-xl w-fit p-5 drop-shadow-xl z-1 font-medium`,
            )}
          >
            <Icon name="LockKeyhole" size={24} />
            <span>
              Code d'accès à<span className="text-background-kivala-primary"> usage unique</span>
            </span>
          </motion.div>
          <motion.div
            style={{
              y: useTransform(value, [0, 1], [-10, -25]),
              x: useTransform(value, [0, 1], [25, 0]),
              left: -50,
              bottom: 0,
            }}
            className={cn(
              `absolute max-tablet:hidden flex gap-3 bg-background-default/80 backdrop-filter backdrop-blur-sm
              rounded-xl w-fit p-5 drop-shadow-xl z-1 font-medium`,
            )}
          >
            <Icon name="ScanEye" size={24} />
            <span>
              Interphone <span className="text-background-kivala-primary">visio-intéractif</span>
            </span>
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col gap-[48px] md:gap-[48px]">
          <div className="flex flex-col gap-6 md:gap-3">
            <h2 className="max-md:text-center text-lg font-extrabold text-background-kivala-primary">
              PARTICULIER
            </h2>

            <h1
              className="max-md:text-center text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1]
                md:leading-tight"
            >
              Faites entrer
              <br /> la <span className="text-background-kivala-primary">sérénité !</span>
            </h1>
            <h2 className="text-md md:text-xl lg:text-2xl font-semibold">
              Se sentir en sécurité dans son immeuble est{' '}
              <span className="text-background-kivala-primary font-semibold">essentiel</span>,
              Kivala vous accompagne{' '}
              <span className="text-background-kivala-primary font-semibold">
                en toute simplicité
              </span>
              .
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
              <Button variant={'secondary'} size={'lg'} animation={'translate'}>
                Contacter mon Syndic
                <Icon name="Building" />
              </Button>
              <Button variant={'gradient'} size={'lg'} animation={'translate'}>
                Effectuer un Devis
              </Button>
            </motion.div>
            <ValuesList values={values} />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
