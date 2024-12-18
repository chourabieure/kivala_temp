'use client'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import Marquee from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const PhotosSection = () => {
  const PictureContainer = () => {
    return (
      <figure
        className={cn('relative rounded-lg bg-background-kivala-tertiary h-[350px] w-[270px]')}
      >
        <Image src={'/temp'} alt={'Picture'} fill />
      </figure>
    )
  }

  return (
    <SectionWrapper className={'!pt-0'}>
      <SectionTitle title="Découvrez nos installations" subtitle="Découvrez nos installations" />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex flex-col gap-6"
      >
        <Marquee className="[--duration:120s]">
          {Array.from({ length: 4 }).map((_, index) => (
            <PictureContainer key={index} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:120s]">
          {Array.from({ length: 4 }).map((_, index) => (
            <PictureContainer key={index} />
          ))}
        </Marquee>
      </motion.div>
    </SectionWrapper>
  )
}
