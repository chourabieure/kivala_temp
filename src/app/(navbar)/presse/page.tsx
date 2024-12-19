'use client'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { MEDIA_LINKS } from '@/constants/infos'
import { motion } from 'framer-motion'

export default function PressePage() {
  return (
    <SectionWrapper className={'pt-[96px] md:pt-[128px]'}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-w-5xl w-full flex-col items-center gap-6"
      >
        <h2 className="text-lg font-extrabold text-background-kivala-primary">PRESSE ET MÉDIAS</h2>
        <div className="flex flex-col items-center gap-8 w-full">
          <h3 className="text-md md:text-xl font-medium leading-snug md:text-center">
            Retrouvez ici les liens de presses parlant de{' '}
            <span className="text-background-kivala-primary">Kivala</span>
          </h3>
        </div>
        <div className="grid max-md:w-full sm:grid-cols-2 gap-4 md:gap-x-24 md:pt-12">
          {Object.keys(MEDIA_LINKS).map((key, index) => {
            const href = MEDIA_LINKS[key as keyof typeof MEDIA_LINKS]
            return (
              <a href={href} key={index} className="group flex items-center gap-2">
                <span className="bg-background-kivala-primary h-1 w-1 rounded-full" />
                <span className="text-[15px] text-background-kivala-secondary font-semibold group-hover:underline">
                  {key}
                </span>
              </a>
            )
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
