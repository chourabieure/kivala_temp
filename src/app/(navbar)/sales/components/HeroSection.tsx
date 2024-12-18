import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'

export const HeroSection = () => {
  return (
    <SectionWrapper className={'pt-6 md:pt-12 !pb-0 lg:gap-8'}>
      <p
        className="flex flex-col items-center text-[12px] md:text-[14px] lg:text-[16px] font-bold text-center
          text-background-kivala-primary leading-tight"
      >
        PRICING
      </p>
      <h1
        className="flex flex-col items-center text-[34px] md:text-[48px] lg:text-[64px] font-bold text-center
          text-background-kivala leading-tight"
      >
        <span className="flex max-md:flex-col items-center md:gap-4">
          Choisissez votre
          <h1 className="text-background-kivala-primary">Platine Kivala</h1>
        </span>
      </h1>
      <p
        className="flex flex-col items-center text-[16px] md:text-[18px] lg:text-[20px] font-medium text-center
          text-background-primary leading-tight"
      >
        Plus que quelques étapes pour installer votre matériel !
      </p>
    </SectionWrapper>
  )
}
