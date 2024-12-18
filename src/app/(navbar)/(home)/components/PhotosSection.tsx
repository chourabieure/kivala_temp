'use client'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import Marquee from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const PhotosSection = () => {
  const PictureContainer = ({ index }: { index: number }) => {
    return (
      <figure
        className={cn(
          'relative rounded-lg bg-background-kivala-tertiary h-[350px] w-[270px] overflow-hidden',
        )}
      >
        <Image
          src={`/image/gallery/PhotoGallery_${index}.webp`}
          alt={'Picture'}
          fill
          className="object-cover"
        />
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
          {Array.from({ length: 24 }).map((_, index) => (
            <PictureContainer key={index} index={index} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:120s]">
          {Array.from({ length: 24 }).map((_, index) => (
            <PictureContainer key={index} index={24 + index} />
          ))}
        </Marquee>
      </motion.div>
    </SectionWrapper>
  )
}
