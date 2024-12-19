'use client'

import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const cards = [
  {
    title: 'Particulier',
    text: "Vous êtes résidents et vous souhaiter plus d'informations sur la platine KIvala ?",
    image: '/image/resident-image.png',
    href: '/particulier',
  },
  {
    title: 'Professionnels',
    text: "Vous êtes syndic, gestionnaire ou professionnels de l'immobilier. Kivala vous permet d'apporter de l'innovation et de la sécurité pour vos immeubles",
    image: '/image/gestionnaire-image.png',
    href: '/syndic',
  },
]

export const RedirectionCardSection = () => {
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
    <SectionWrapper ref={ref}>
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
                md:h-[410px] justify-between`,
                index === 1
                  ? 'text-text-brand-on-brand bg-gradient-to-tr from-[#2f56c6] to-[#283f80]'
                  : 'bg-background-kivala-tertiary',
              )}
            >
              <div className="flex flex-col gap-6">
                <span className="font-bold text-[20px] md:text-[24px] text-center leading-none">
                  {title}
                </span>
                <span className="font-medium text-xl text-center leading-snug">{text}</span>
              </div>

              <Button
                variant={'ghost'}
                size={'lg'}
                className={cn(
                  index === 1
                    ? 'hover:bg-background-kivala-primary/20 text-text-brand-on-brand'
                    : 'hover:bg-background-kivala/10 text-background-kivala-primary',
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
      <motion.div
        style={{ y: useTransform(value, [0, 1], [0, 50]) }}
        initial={{ top: 100, right: 50, rotate: '10deg', opacity: 0 }}
        whileInView={{ y: 0, rotate: '40deg', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="bg-[#F7F9FF] h-[500px] w-[500px] rounded-[140px] absolute -z-10"
      />
      <motion.div
        style={{ y: useTransform(value, [0, 1], [0, 50]) }}
        initial={{ bottom: 100, left: 50, rotate: '-10deg', opacity: 0 }}
        whileInView={{ rotate: '-30deg', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="bg-[#F7F9FF] h-[400px] w-[400px] rounded-[140px] absolute -z-10"
      />
    </SectionWrapper>
  )
}
