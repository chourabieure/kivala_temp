'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const cards = [
  {
    title: (
      <>
        <span className="text-background-kivala-primary">Traçabilité </span>des entrées
      </>
    ),
    text: (
      <>
        Soyez <span className="font-bold"> informés </span> et
        <span className="font-bold"> notifiés </span>de toutes les activités (enfant bien rentré de
        l’école, passage de l’infirmière...).
      </>
    ),
    img: '/image/KeyElements/trace.png',
  },
  {
    title: (
      <>
        Fonctionnalité<span className="text-background-kivala-primary"> interphone</span>
      </>
    ),
    text: (
      <>
        Identifiez en<span className="font-bold"> temps réel </span>votre visiteur depuis votre
        smartphone. Autorisez son entrée et/ou donnez vos instructions de livraison.
      </>
    ),
    img: '/image/KeyElements/interphone.png',
  },
  {
    title: (
      <>
        Code à <span className="text-background-kivala-primary"> usage unique </span>des entrées et
        personnalisable
      </>
    ),
    text: (
      <>
        Pour maîtriser les accès dans votre résidence, Kivala vous permet de générer des codes
        d’accès à<span className="font-bold"> usage unique </span>(ou un code permanent).
      </>
    ),
    img: '/image/KeyElements/codes.png',
  },
]

export const KeyElements = () => {
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
    <SectionWrapper ref={ref} className={'bg-background-kivala-tertiary'}>
      <SectionTitle title="Adaptée à tous vos besoins" subtitle="Notre solution sur-mesure" />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex flex-col justify-center gap-12 z-[10]"
      >
        <span className="text-2xl md:text-center max-w-5xl">
          Kivala se charge de l’installation de la platine digitale et vous accompagne pour sa prise
          en main. <br />
          Avec Kivala,
          <span className="text-background-kivala-primary font-bold">
            {' '}
            générez des codes personnalisés{' '}
          </span>
          instantanément et validez l’ouverture de la porte d’entrée,
          <span className="text-background-kivala-primary font-bold"> même à distance.</span>
        </span>
        <div className="flex max-md:flex-col gap-6 max-w-5xl">
          {cards.map(({ title, text, img }, index) => (
            <div
              className="flex flex-1 flex-col relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[500px]
                bg-background-default"
              key={index}
            >
              <div className="relative h-[300px] w-full">
                <Image src={img} alt={'image_' + title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <span className="font-bold text-[22px] leading-tight">{title}</span>
                <span className="text-lg">{text}</span>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex w-full justify-center max-md:flex-col gap-4"
        >
          <Button variant={'primary'} size={'lg'} animation={'translate'}>
            Contactez-nous
            <Icon name="MessagesSquare" />
          </Button>
          <Button variant={'gradient'} size={'lg'} animation={'translate'}>
            Générer un devis
            <Icon name="FileDown" />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: useTransform(value, [0, 1], [-50, 100]) }}
        initial={{ top: 200, left: 50, rotate: '10deg', opacity: 0 }}
        whileInView={{ y: 0, rotate: '40deg', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="bg-background-default/40 h-[500px] w-[500px] rounded-[140px] absolute"
      />
      <motion.div
        style={{ y: useTransform(value, [0, 1], [-100, 200]) }}
        initial={{ bottom: 200, right: 50, rotate: '-10deg', opacity: 0 }}
        whileInView={{ rotate: '-30deg', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="bg-background-default/40 h-[400px] w-[400px] rounded-[140px] absolute"
      />
    </SectionWrapper>
  )
}
