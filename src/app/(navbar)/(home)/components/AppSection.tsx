'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { SvgStar } from '@/components/Testimonial/components/SvgStar'
import { SvgStarHalf } from '@/components/Testimonial/components/SvgStarHalf'
import { Button } from '@/components/ui/button'
import { ValuesList } from '@/components/ValuesList/ValuesList'
import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  {
    label: 'Sécurité optimale',
  },
  {
    label: 'Gain de temps',
  },
  {
    label: 'Solution sur-mesure',
  },
]

const peoples = [
  {
    name: 'John Doe',
    image: '/temp',
  },
  {
    name: 'Robert Johnson',
    image: '/temp',
  },
  {
    name: 'Jane Smith',
    image: '/temp',
  },
  {
    name: 'Emily Davis',
    image: '/temp',
  },
]

export const AppSection = () => {
  return (
    <SectionWrapper>
      <div className="flex w-full flex-col gap-8">
        <SectionTitle
          title="Une solution clé en main"
          subtitle="Application mobile pour les résidents"
        />
        <ValuesList values={values} variant="positive" />
      </div>

      <div className="flex max-md:flex-col w-full items-center justify-between max-w-5xl gap-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="relative flex-1 flex items-center gap-6 justify-center h-[500px]"
        >
          <div
            className="relative max-sm:bottom-0 max-sm:-left-2 max-sm:rotate-[-10deg] max-sm:z-[2] max-sm:absolute
              w-[169px] lg:w-[242px] h-[300px] lg:h-[450px] hover:scale-[102%] hover:rotate-[-3deg] transition-all
              duration-300 ease-in-out"
          >
            <Image
              src={'/image/iphone-mockup-1.png'}
              alt="plateforme"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div
            className="relative max-sm:ml-20 max-sm:rotate-[10deg] w-[219px] lg:w-[292px] h-[375px] lg:h-[500px]
              hover:scale-[102%] hover:rotate-[3deg] transition-all duration-300 ease-in-out"
          >
            <Image
              src={'/image/iphone-mockup-2.png'}
              alt="plateforme"
              fill
              priority
              className="object-contain"
            />
          </div>
          <motion.div
            initial={{ y: '0%', right: '-24px', rotate: '10deg', opacity: 0 }}
            whileInView={{ y: '-50%', rotate: '0deg', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="bg-[#F7F9FF] md:h-[350px] lg:h-[450px] md:w-[350px] lg:w-[450px] rounded-[140px] absolute top-1/2
              -z-10"
          />
          <motion.div
            initial={{ y: '0%', left: '-48px', rotate: '10deg', opacity: 0 }}
            whileInView={{ y: '-50%', rotate: '45deg', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="bg-[#F7F9FF] md:h-[200px] lg:h-[330px] md:w-[200px] lg:w-[330px] rounded-[140px] absolute top-1/2
              -z-10"
          />
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex flex-1 flex-col gap-8 md:gap-16"
        >
          <div className="flex w-full flex-col gap-6">
            <span className="text-xl font-medium">
              Kivala est une application innovante avec des fonctionnalités simples pour
              <span className="text-background-kivala-primary"> optimiser votre sécurité </span>au
              sein de votre immeuble.
            </span>
            <div className="flex max-lg:flex-col gap-3">
              <Button size={'lg'} variant={'gradient'} className="px-4 pr-5">
                <Image src={'/svg/playstore-logo.svg'} alt="playstore" width={32} height={32} />
                <span className="flex flex-col items-start leading-none gap-1">
                  <span className="text-background-kivala-tertiary text-sm">Télécharger sur</span>
                  <span className="text-text-brand-on-brand text-xl">Google Play</span>
                </span>
              </Button>
              <Button size={'lg'} variant={'gradient'} className="px-4 pr-5">
                <Image src={'/svg/apple-logo.svg'} alt="playstore" width={32} height={32} />
                <span className="flex flex-col items-start leading-none gap-1">
                  <span className="text-background-kivala-tertiary text-sm">Télécharger sur</span>
                  <span className="text-text-brand-on-brand text-xl">Apple store</span>
                </span>
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex max-sm:items-center max-lg:flex-col gap-3">
              <div className="flex items-center gap-[-7px] mr-[7px]">
                {peoples.map(({ image, name }, index) => (
                  <div className="-mr-4 relative group" key={index}>
                    <Image
                      height={100}
                      width={100}
                      src={image}
                      alt={name}
                      className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-4 border-white relative transition
                        duration-500 bg-background-kivala-tertiary"
                    />
                  </div>
                ))}
                <div
                  className="-mr-4 flex items-center !m-0 !p-0 justify-center relative bg-background-default rounded-full h-14
                    w-14 border-4 border-white font-bold"
                >
                  + 40
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-300">
                <SvgStar />
                <SvgStar />
                <SvgStar />
                <SvgStar />
                <SvgStarHalf />
              </div>
            </div>
            <span className="text-xl">
              Déjà{' '}
              <span className="font-bold italic text-background-kivala-primary">
                + de 2000 utilisateurs
              </span>{' '}
              satisfaits utilisent notre solution partout en France.
            </span>

            <Button size={'lg'} variant={'secondary'} animation={'translate'}>
              Voir les avis
              <Icon name="MoveRight" />
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
