'use client'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const ClassicMethodSection = () => {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-md:flex-col-reverse max-w-4xl items-center gap-12"
      >
        <div className="relative h-[200px] md:h-[300px] w-[200px] md:w-[300px]">
          <Image src={'/image/badge.png'} alt="Image de Badge" fill />
          <motion.div
            initial={{ rotate: '-10deg', y: '-50%', x: '-50%', opacity: 0 }}
            whileInView={{ rotate: '-30deg', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="bg-[#F7F9FF] h-[200px] md:h-[300px] w-[200px] md:w-[300px] rounded-[50px] md:rounded-[75px] absolute
              top-1/2 left-1/2 -z-10"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <span className="max-md:text-center text-[24px] md:text-[32px] font-bold leading-tight">
            Et toujours la <br /> méthode{' '}
            <span className="text-background-kivala-primary">classique</span> !
          </span>
          <span className="text-xl">
            L’application mobile a été conçue pour être utilisable par tous. <br />
            Cependant, le résident peut continuer d’entrer dans son immeuble{' '}
            <span className="text-background-kivala-primary">avec à son badge Vigik</span>.
          </span>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
