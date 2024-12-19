'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const values = [
  'Installation de notre matériel',
  "Accès complet à l'application",
  'Dashboard administrateur',
  'Maintenance complète',
  'Support premium',
]
interface Props {
  variant?: 'default' | 'CTA'
}

const variantObject = {
  title: {
    default: (
      <>
        Et vous ?<br /> Quand est-ce que vous installez Kivala chez vous ?
      </>
    ),
    CTA: 'Convaincu par notre solution ?',
  },
  subTitle: {
    default: '',
    CTA: 'Choisissez votre matériel et accédez à votre platine, vos applications et votre dashboard.',
  },
  values: {
    default: [
      'Installation de notre matériel',
      "Accès complet à l'application",
      'Dashboard administrateur',
      'Maintenance complète',
      'Support premium',
    ],
    CTA: [
      'Dashboard administrateur',
      'Installation de notre matériel',
      'Maintenance complète, et bien plus ...',
    ],
  },
}

export const PricingCTASection = ({ variant = 'default' }: Props) => {
  return (
    <SectionWrapper className={'bg-background-kivala-tertiary'}>
      <section className="flex w-full max-md:flex-col gap-8 md:gap-16 items-center max-w-5xl z-0">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex-1 flex flex-col gap-8 md:gap-12 z-[2]"
        >
          <span className="flex flex-col max-md:text-center gap-3">
            <span className="text-[24px] md:text-[32px] font-bold leading-tight">
              {variantObject.title[variant]}
            </span>
            {variantObject.subTitle[variant] && (
              <span className="text-xl font-mediuem leading-tight">
                {variantObject.subTitle[variant]}
              </span>
            )}
          </span>

          <div className="flex flex-col pl-2 gap-4">
            {variantObject.values[variant].map((value, index) => (
              <span key={index} className="flex items-center gap-4">
                <Icon
                  name="CircleCheck"
                  size={24}
                  containerClassName={'text-background-kivala-primary'}
                />
                <span className="text-xl font-semibold">{value}</span>
              </span>
            ))}
          </div>
          {variant === 'CTA' && (
            <Link href="/contact">
              <Button
                variant={'secondary'}
                size={'lg'}
                className="md:w-fit bg-background-default hover:bg-background-default/80"
                animation={'translate'}
              >
                Contactez-nous
                <Icon name="MessagesSquare" />
              </Button>
            </Link>
          )}
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="relative flex flex-col flex-1 w-full bg-background-default rounded-xl p-6 md:p-8 gap-8 z-10"
          >
            <span className="flex flex-col text-center items-center gap-3">
              <span className="relative text-3xl md:text-[30px] font-bold w-fit">
                Votre devis en 2 clics
              </span>
              <span className="text-xl">
                Définissez vos besoins et{' '}
                <span className="text-background-kivala-primary italic font-bold">
                  recevez votre devis{' '}
                </span>
                immédiatement.
              </span>
            </span>

            <Link href="/sales">
              <Button variant={'gradient'} size={'lg'} animation={'translate'} className="w-full">
                Obtenir mon devis
                <Icon name="ScrollText" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '-60%', top: 0, right: -200, rotate: '30deg' }}
            whileInView={{ opacity: 1, y: '-50%', right: -150 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="absolute h-[300px] w-[300px] -z-[0]"
          >
            <Image className="" alt="Crown form" src="/svg/crown.svg" fill />
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  )
}
