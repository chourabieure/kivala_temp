'use client'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const ValueSection = () => {
  return (
    <SectionWrapper className={'bg-background-kivala-tertiary'}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="relative flex flex-col gap-8 items-center"
      >
        <span
          className="bg-background-kivala-primary font-bold rounded-full px-4 py-2 text-center text-text-brand-on-brand
            w-fit"
        >
          Une solution adapté pour vos immeubles
        </span>
        <span className="text-[32px] font-bold leading-tight max-md:text-center">
          Maîtrisez vos accès et renforcez la sécurité pour vos résidents.
        </span>
        <span className="text-xl font-medium leading-tight max-md:text-center">
          En qualité de syndic, misez sur l'innovation et l'efficacité.
        </span>
      </motion.div>
      <motion.div
        style={{ left: -100, bottom: -150, rotate: '30deg', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute max-md:hidden"
      >
        <Image src={'/svg/shield-shape.svg'} alt="shield" width={450} height={450} />
      </motion.div>
      <motion.div
        style={{ right: -100, top: -150, rotate: '-150deg', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute max-md:hidden"
      >
        <Image src={'/svg/siren-shape.svg'} alt="siren" width={450} height={450} />
      </motion.div>
    </SectionWrapper>
  )
}
