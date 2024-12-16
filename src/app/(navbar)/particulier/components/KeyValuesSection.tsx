'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const items: { icon: IconType; content: ReactNode }[] = [
  {
    icon: 'VenetianMask',
    content: (
      <span>
        Des codes d’accès inchangés et trop souvent communiqués à de nombreux visiteurs (livreurs,
        visiteurs occasionnels...) sont autant de <span className="font-bold">risques</span> pour un
        immeuble :{' '}
        <span className="italic text-background-kivala-primary">vandalisme, intrusion…</span>
      </span>
    ),
  },
  {
    icon: 'Binary',
    content: (
      <>
        Il est <span className="font-bold">primordial</span> de penser la gestion des accès
        autrement. Résidents, vous devez vous sentir en <span className="font-bold">sécurité</span>{' '}
        et{' '}
        <span className="italic text-background-kivala-primary">
          maîtriser la diffusion des codes
        </span>{' '}
        d’entrée de votre immeuble.{' '}
      </>
    ),
  },
]

export const KeyValuesSection = () => {
  return (
    <SectionWrapper className={'px-0 !pb-12 !pt-0'}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className={`relative flex flex-col items-center gap-12 bg-background-kivala-tertiary w-full py-12 md:py-24 px-6
          max-md:pb-0`}
      >
        <SectionTitle title="Renforcez le contrôle des accès" subtitle="Accès à votre immeuble" />
        <div className="flex max-md:flex-col gap-6 max-w-5xl">
          {items.map(({ icon, content }, index) => (
            <div key={index} className="flex max-md:flex-col max-md:items-center gap-6">
              <Icon
                name={icon}
                size={32}
                containerClassName={
                  'bg-background-kivala text-background-kivala-tertiary rounded-lg h-fit w-fit p-2'
                }
              />
              <span>{content}</span>
            </div>
          ))}
        </div>
        <div
          className="max-md:relative flex items-center absolute -bottom-1 bg-background-default px-8 py-4 rounded-t-lg
            z-1"
        >
          <span className="max-md:text-center text-xl font-medium">
            Kivala® apporte une solution clé en main
          </span>
          <Icon
            name="ArrowDown"
            containerClassName={
              'absolute -bottom-10 left-1/2 -translate-x-1/2 text-background-kivala-primary'
            }
            size={32}
          />
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
