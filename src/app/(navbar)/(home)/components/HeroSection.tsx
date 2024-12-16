'use client'

import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Testimonial } from '@/components/Testimonial/Testimonial'
import WordRotate from '@/components/ui/word-rotate'
import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const words = ['innovante', 'sécurisée', 'efficace']

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
    <SectionWrapper
      id={'top'}
      ref={ref}
      className={'pt-[96px] md:pt-[calc(128px_+_50px)] !pb-8 gap-16 min-h-screen'}
    >
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex flex-col items-center justify-center gap-8 w-full max-w-5xl"
      >
        <h1
          className="flex flex-col items-center text-[34px] md:text-[48px] lg:text-[56px] font-bold text-center
            text-background-kivala leading-none"
        >
          <span className="flex max-md:flex-col items-center md:gap-4">
            <span>La gestion d’accès</span>
            <WordRotate className="text-background-kivala-primary" words={words} />
          </span>

          <span>pour votre copropriété</span>
        </h1>
        <motion.div className="flex flex-col w-full items-center gap-8 text-md md:text-xl lg:text-2xl text-center font-semibold">
          <h2 className="">
            Kivala maximise le contrôle des accès dans votre immeuble avec un <br />
            <span className="text-background-kivala-primary">code à usage</span> unique pour vos
            différents visiteurs.
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          scale: useTransform(value, [0, 1], [1, 0.9]),
          translateY: useTransform(value, [0, 1], [0, -40]),
        }}
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="relative w-full max-w-7xl h-[600px]"
      >
        <motion.video
          style={{
            width: useTransform(value, [0, 1], ['100%', '80%']),
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-cover rounded-xl"
          playsInline
          autoPlay
          loop
          muted
        >
          <source src="/video/demo.mp4" type="video/mp4" />
        </motion.video>
        <Testimonial
          style={{
            y: useTransform(value, [0, 0.8], [200, 25]),
            x: useTransform(value, [0, 0.8], [-50, 100]),
            opacity: useTransform(value, [0, 0.8], [0, 1]),
          }}
          className={cn('absolute max-tablet:hidden top-0 -left-[200px] ')}
        />
        <Testimonial
          style={{
            y: useTransform(value, [0, 0.8], [-50, -200]),
            x: useTransform(value, [0, 0.8], [50, -100]),
            opacity: useTransform(value, [0, 0.8], [0, 1]),
          }}
          className={cn('absolute max-tablet:hidden bottom-0 -right-[200px] ')}
        />
      </motion.div>

      <motion.div
        style={{ y: useTransform(value, [0, 1], [-100, 0]) }}
        initial={{ top: 200, right: 50, rotate: '10deg', opacity: 0 }}
        whileInView={{ y: 0, rotate: '40deg', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="bg-[#F7F9FF] h-[500px] w-[500px] rounded-[140px] absolute -z-10"
      />
      <motion.div
        style={{ y: useTransform(value, [0, 1], [-100, 0]) }}
        initial={{ bottom: 200, left: 50, rotate: '-10deg', opacity: 0 }}
        whileInView={{ rotate: '-30deg', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="bg-[#F7F9FF] h-[400px] w-[400px] rounded-[140px] absolute -z-10"
      />
    </SectionWrapper>
  )
}
