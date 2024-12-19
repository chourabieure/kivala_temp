import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  return (
    <SectionWrapper className="pt-[96px] md:pt-[128px] !pb-0 relative">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-w-5xl w-full flex-col items-center gap-6"
      >
        <h2 className="text-lg font-extrabold text-background-kivala-primary">TARIFS</h2>
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="max-md:text-center text-[34px] md:text-[48px] lg:text-[56px] font-bold leading-none">
            Choisissez votre <span className="text-background-kivala-primary">Platine Kivala</span>
          </h1>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
