'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  'Installation de notre matériel',
  "Accès complet à l'application",
  'Dashboard administrateur',
  'Maintenance complète',
  'Support premium',
]

export const PricingCTASection = () => {
  return (
    <SectionWrapper className={'bg-background-kivala-tertiary'}>
      <SectionTitle
        className={'md:hidden'}
        title="Vous êtes prêt à installer Kivala® ?"
        subtitle="Découvrez nos offres"
      />
      <section className="flex w-full max-md:flex-col gap-8 md:gap-16 items-center max-w-5xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex-1 flex flex-col gap-8"
        >
          <span className="text-[48px] font-bold max-md:hidden leading-tight">
            Et vous ?<br /> Quand est-ce que vous installez Kivala chez vous ?
          </span>
          <div className="flex flex-col pl-2 gap-4">
            {values.map((value, index) => (
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
        </motion.div>
        <div className="relative flex-1 w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="flex flex-col bg-background-default rounded-xl p-6 md:p-8 gap-8 z-10"
          >
            <span className="md:text-center flex md:items-center flex-col gap-6">
              <span className="relative text-3xl md:text-[30px] font-bold w-fit">
                Votre devis en 2 clics
              </span>
              <span className="text-xl">
                Définissez vos besoin et
                <span className="text-background-kivala-primary italic font-bold">
                  {' '}
                  recevez votre devis{' '}
                </span>
                .
              </span>
            </span>

            <Button variant={'primary'} size={'lg'} animation={'translate'}>
              Obtenir mon devis
              <Icon name="ScrollText" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="absolute top-0 -translate-y-1/2 -right-[150px] rotate-[30deg] h-[300px] w-[300px] -z-[0]"
          >
            <Image className="" alt="Crown form" src="/svg/crown.svg" fill />
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  )
}
