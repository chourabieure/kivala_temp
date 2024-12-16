'use client'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/Icon'
import { motion } from 'framer-motion'

const sections: { title: string; icon: IconType; text: ReactNode }[] = [
  {
    title: 'Gain de temps',
    icon: 'Timer',
    text: (
      <>
        <span>
          L'interface en ligne vous permet de{' '}
          <span className="text-background-kivala font-semibold">créer</span>,{' '}
          <span className="text-background-kivala font-semibold">modifier</span> et{' '}
          <span className="text-background-kivala font-semibold">supprimer</span> des utilisateurs
          de manière simple et rapide. Toutes les actions se réalisent en temps réel, garantissant
          que{' '}
          <span className="text-background-kivala font-semibold">
            chaque modification est immédiatement prise en compte
          </span>
          , pour une gestion fluide et efficace des utilisateurs.
        </span>
      </>
    ),
  },
  {
    title: 'Sécurité optimale',
    icon: 'Shield',
    text: (
      <>
        <span>
          Avec le contrôle des accès à{' '}
          <span className="text-background-kivala font-semibold">distance </span>, vous offrez aux
          copropriétaires une solution sécurisée pour réduire les risques de{' '}
          <span className="text-background-kivala font-semibold">vols</span>,{' '}
          <span className="text-background-kivala font-semibold">d'intrusions</span> et de{' '}
          <span className="text-background-kivala font-semibold">nuisances</span> dans les parties
          communes, tout en assurant une gestion simple et efficace des accès.
        </span>
      </>
    ),
  },
  {
    title: 'Solution sur-mesure',
    icon: 'PencilRuler',
    text: (
      <>
        <span>
          Un outil <span className="text-background-kivala font-semibold">intuitif </span>
          et <span className="text-background-kivala font-semibold">novateur </span> qui s’adapte
          aux besoins de chaque résident, en offrant la possibilité de choisir entre un{' '}
          <span className="text-background-kivala font-semibold">code d’accès </span> ou un{' '}
          <span className="text-background-kivala font-semibold">interphone vidéo</span>. Cette
          flexibilité permet de répondre à diverses situations, assurant une gestion des accès
          simple, sécurisée et personnalisée.
        </span>
      </>
    ),
  },
]

export const MainSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col w-full max-w-5xl gap-16">
        {sections.map(({ title, icon, text }, index) => (
          <motion.div
            key={index}
            initial={{ y: -25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className={cn(
              'flex gap-16 px-[96px] items-center',
              index % 2 === 0 && 'flex-row-reverse',
            )}
          >
            <div className="relative h-[270px] w-[270px] flex items-center justify-center">
              <div className="rotate-[30deg] h-full w-full overflow-hidden drop-shadow-lg rounded-[75px]">
                <Image
                  src="/image/gestionnaire-image.png"
                  alt="gestionnaire"
                  fill
                  className="object-cover object-center -rotate-[30deg] scale-[120%]"
                />
              </div>
              <motion.div
                initial={{ top: '50%', left: '50%', y: '-50%', x: '-50%', opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
                className="bg-[#F7F9FF] h-[300px] w-[300px] rounded-[100px] absolute -z-10"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <span className="flex items-center gap-3 text-background-kivala-primary">
                <Icon name={icon} size={24} />
                <span className="text-2xl font-bold">{title}</span>
              </span>
              <span className="text-xl text-[#7B86A9]">{text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
