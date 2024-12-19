'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SvgStar } from '@/components/Testimonial/components/SvgStar'
import { SvgStarHalf } from '@/components/Testimonial/components/SvgStarHalf'
export type TestimonialType = {
  quote: string
  name: string
  designation?: string
  src?: string
  stars?: number
}
const reviews: TestimonialType[] = [
  {
    name: 'Lily—h',
    designation: 'Syndic',
    quote:
      'Cette idée est génial ! Je peux suivre les entrées de mes enfants à la maison , et générer des codes temporaires pour les livreurs. Vraiment merci KIVALA !',
    stars: 5,
    src: '/image/testimonial/review-1.webp',
  },
  {
    name: 'Chantal79-81',
    designation: 'Syndic',
    quote:
      "kivala est l'application idéale lorsqu'on veut arrêter les vas-et-viens non maîtrisés dans notre immeuble. Au quotidien c'est à la fois très simple d'utilisation, riche d'informations et très efficace pour retrouver de la sécurité",
    stars: 3,
    src: '/image/testimonial/review-2.webp',
  },
  {
    name: 'JJojo78999',
    designation: 'Syndic',
    quote:
      "Kivala a complètement transformé la manière dont je gère les accès à mon immeuble. Grâce à ses codes personnalisés, je n’ai plus à m'inquiéter pour mes livraisons ou l’accès de mes visiteurs.",
    stars: 4,
    src: '/image/testimonial/review-3.webp',
  },
  {
    name: 'Lily—h',
    designation: 'Syndic',
    quote:
      'Cette idée est génial ! Je peux suivre les entrées de mes enfants à la maison , et générer des codes temporaires pour les livreurs. Vraiment merci KIVALA !',
    stars: 5,
    src: '/image/testimonial/review-1.webp',
  },
  {
    name: 'Chantal79-81',
    designation: 'Syndic',
    quote:
      "kivala est l'application idéale lorsqu'on veut arrêter les vas-et-viens non maîtrisés dans notre immeuble. Au quotidien c'est à la fois très simple d'utilisation, riche d'informations et très efficace pour retrouver de la sécurité",
    stars: 3,
    src: '/image/testimonial/review-2.webp',
  },
  {
    name: 'JJojo78999',
    designation: 'Syndic',
    quote:
      "Kivala a complètement transformé la manière dont je gère les accès à mon immeuble. Grâce à ses codes personnalisés, je n’ai plus à m'inquiéter pour mes livraisons ou l’accès de mes visiteurs.",
    stars: 4,
    src: '/image/testimonial/review-3.webp',
  },
  {
    name: 'JJojo78999',
    designation: 'Syndic',
    quote:
      "Kivala a complètement transformé la manière dont je gère les accès à mon immeuble. Grâce à ses codes personnalisés, je n’ai plus à m'inquiéter pour mes livraisons ou l’accès de mes visiteurs.",
    stars: 4,
    src: '/image/testimonial/review-3.webp',
  },
  {
    name: 'JJojo78999',
    designation: 'Syndic',
    quote:
      "Kivala a complètement transformé la manière dont je gère les accès à mon immeuble. Grâce à ses codes personnalisés, je n’ai plus à m'inquiéter pour mes livraisons ou l’accès de mes visiteurs.",
    stars: 4,
    src: '/image/testimonial/review-3.webp',
  },
]

export const Testimonial = () => {
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

  const TestimonialCard = ({ review }: { review: TestimonialType }) => {
    const { name, designation, quote, stars, src } = review
    return (
      <div className="flex flex-col items-center bg-background-default rounded-xl p-6 gap-4 w-[300px]">
        <div className="flex w-full items-center gap-3">
          <div className="relative h-[50px] w-[50px] rounded-full">
            <Image
              src={src ?? ''}
              alt="review-profil-picture"
              fill
              className="rounded-full object-cover select-none"
            />
          </div>
          <span className="flex flex-col items-start gap-1 select-none">
            <span className="text-[20px] font-bold leading-none text-center">{name}</span>
            <span className="text-[18px] font-bold leading-none text-center text-background-kivala-primary">
              {designation}
            </span>
          </span>
        </div>

        <span className="text-lg select-none">{quote}</span>
        <div className="flex items-center gap-1 text-yellow-300">
          {Array.from({ length: stars ?? 0 }).map((_, index) => (
            <SvgStar key={index} />
          ))}

          {Array.from({ length: 5 - (stars ?? 5) }).map((_, index) => (
            <SvgStarHalf key={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <SectionWrapper ref={ref} className={'bg-background-kivala-tertiary z-[0] !px-0'}>
      <div className="relative">
        <SectionTitle
          title={
            <>
              Ce que nos clients
              <br /> pensent de nous
            </>
          }
          subtitle="Vos avis comptent"
        />
        <motion.div
          style={{ left: -100, top: 10, rotate: '-40deg', opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute max-md:hidden"
        >
          <Image src={'/svg/quote.svg'} alt="siren" width={75} height={75} />
        </motion.div>
        <motion.div
          style={{ right: -100, top: 10, scaleX: -1, rotate: '-40deg', opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute max-md:hidden"
        >
          <Image src={'/svg/quote.svg'} alt="siren" width={75} height={75} />
        </motion.div>
      </div>

      <div className="flex flex-col w-full gap-12">
        <Carousel
          plugins={[
            AutoScroll({
              speed: 1,
              startDelay: 0,
            }),
          ]}
          className="w-full relative flex flex-col gap-12"
          opts={{
            loop: true,
          }}
        >
          {/* <div className="relative flex justify-center gap-6">
            <CarouselPrevious className="relative" />
            <CarouselNext className="relative" />
          </div> */}

          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem className="basis-[332px]" key={index}>
                <TestimonialCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionWrapper>
  )
}
