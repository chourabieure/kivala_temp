'use client'

import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    title: 'Particulier',
    text: "Vous êtes résidents et vous souhaiter plus d'informations sur la platine KIvala ?",
    image: '/image/resident-image.png',
    href: '#',
  },
  {
    title: 'Professionnels',
    text: "Vous êtes syndic, gestionnaire ou professionnels de l'immobilier. Kivala vous permet d'apporter de l'innovation et de la sécurité pour vos immeubles",
    image: '/image/gestionnaire-image.png',
    href: '#',
  },
]

export const RedirectionCardSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Vous êtes :" subtitle="Par où commencer ?" />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-md:flex-col w-full gap-6 md:gap-16 max-w-5xl ease-in-out md:mb-[80px]"
      >
        {cards.map(({ title, text, image, href }, index) => (
          <Link
            href={href}
            key={index}
            className="group flex-1 hover:scale-[102%] transition-all duration-300 ease-in-out"
          >
            <div
              className={cn(
                `relative flex-1 flex flex-col pb-8 md:pb-[130px] pt-8 md:pt-12 max-md:gap-8 px-8 rounded-xl
                text-text-brand-on-brand md:h-[410px] justify-between`,
                index === 1 ? 'bg-background-kivala' : 'bg-background-kivala-primary',
              )}
            >
              <div className="flex flex-col gap-6">
                <span className="font-semibold text-[24px] md:text-[32px] text-center leading-none">
                  {title}
                </span>
                <span className="font-semibold text-xl text-center leading-snug">{text}</span>
              </div>

              <Button
                variant={'ghost'}
                size={'lg'}
                className={cn(
                  'text-text-brand-on-brand',
                  index === 1
                    ? 'hover:bg-background-kivala-primary/20'
                    : 'hover:bg-background-kivala/20',
                )}
              >
                En savoir plus
                <Icon name="MoveRight" />
              </Button>
              <div
                className={cn(
                  `max-md:hidden absolute left-1/2 -bottom-1/3 -translate-x-1/2 -translate-y-1/3 h-[180px]
                  w-[calc(100%_-_64px)] rounded-lg overflow-hidden transition-all duration-300 ease-in-out
                  group-hover:translate-y-[calc(-33.33%_-_10px)] pointer-events-none`,
                )}
              >
                <Image alt={'Image de ' + title} src={image} className="object-cover" fill />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
