'use client'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import Marquee from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const PhotosSection = () => {
  const PictureContainer = () => {
    return (
      <figure
        className={cn('relative rounded-lg bg-background-kivala-tertiary h-[250px] w-[500px]')}
      >
        <Image src={'/temp'} alt={'Picture'} fill />
      </figure>
    )
  }

  return (
    <SectionWrapper>
      <SectionTitle title="Découvrez nos installations" subtitle="Découvrez nos installations" />
      <div className="flex flex-col gap-6">
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
        <Marquee className="[--duration:120s]">
          {Array.from({ length: 4 }).map((_, index) => (
            <PictureContainer key={index} />
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  )
}
