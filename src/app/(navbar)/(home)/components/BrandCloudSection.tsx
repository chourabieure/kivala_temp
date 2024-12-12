import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import Marquee from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface Brand {
  name: string
  logo: string
  url: string
  color: string
}

const brands: Brand[] = [
  {
    name: 'le-figaro',
    logo: '/svg/brands/brand-le-figaro.svg',
    url: 'https://www.lefigaro.fr/',
    color: 'transparent',
  },
  {
    name: 'bfm',
    logo: '/svg/brands/brand-bfm.svg',
    url: 'https://www.bfm.fr/',
    color: 'background-kivala-primary',
  },
  {
    name: 'cnews',
    logo: '/svg/brands/brand-cnews.svg',
    url: 'https://www.cnews.fr/',
    color: 'transparent',
  },
]

export const BrandCloudSection = () => {
  const BrandCard = ({ brand }: { brand: Brand }) => {
    return (
      <Link href={brand.url} target="_blank" rel="noreferrer">
        <figure
          className={cn(
            `flex flex-col items-center justify-center gap-4 p-4 rounded-lg hover:scale-105 transition-transform
            duration-300 ease-in-out`,
            `bg-${brand.color}`,
          )}
        >
          <Image src={brand.logo} alt={brand.name} height={200} width={200} />
        </figure>
      </Link>
    )
  }
  return (
    <SectionWrapper className={'px-0'}>
      <SectionTitle title="Ils parlent de nous" subtitle="Un grand merci à eux" />

      <Marquee className="[--duration:20s]">
        {brands.map((brand) => (
          <BrandCard key={brand.name} brand={brand} />
        ))}
      </Marquee>
    </SectionWrapper>
  )
}
