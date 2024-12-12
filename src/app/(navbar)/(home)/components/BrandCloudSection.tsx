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
    name: 'bfm',
    logo: '/svg/brands/brand-bfm.svg',
    url: 'https://www.bfmtv.com/paris/replay-emissions/bonjour-paris/ile-de-france-l-acces-a-vos-immeubles-pas-si-securise_VN-202411280261.html',
    color: 'background-kivala-primary',
  },
  {
    name: 'cnews',
    logo: '/svg/brands/brand-cnews.svg',
    url: 'https://www.cnews.fr/videos/france/2024-12-02/ca-va-retarder-lentree-mais-ca-nannule-rien-les-digicodes-loin-de-proteger',
    color: 'transparent',
  },
  {
    name: 'capital',
    logo: '/svg/brands/brand-capital.svg',
    url: 'https://www.capital.fr/immobilier/vous-seriez-surpris-de-savoir-combien-de-personnes-connaissent-le-code-de-votre-immeuble-1505788',
    color: 'transparent',
  },
  {
    name: 'ouest-france',
    logo: '/svg/brands/brand-ouest-france.svg',
    url: 'https://www.ouest-france.fr/ile-de-france/paris-75000/paris-pourquoi-le-digicode-serait-loin-de-proteger-efficacement-votre-immeuble-e5c6b27c-ad8f-11ef-ac7f-1983a1aa62e8',
    color: 'transparent',
  },
  {
    name: 'tf1-info',
    logo: '/svg/brands/brand-tf1-info.svg',
    url: 'https://www.tf1info.fr/immobilier/des-milliers-d-inconnus-ont-acces-au-digicode-de-votre-immeuble-comment-faire-changer-le-code-2335508.html',
    color: 'transparent',
  },
  {
    name: 'le-dauphine',
    logo: '/svg/brands/brand-le-dauphine.svg',
    url: 'https://www.ledauphine.com/magazine-immobilier/2024/11/25/etes-vous-vraiment-en-securite-dans-votre-copropriete',
    color: 'transparent',
  },
  {
    name: 'yahoo-news',
    logo: '/svg/brands/brand-yahoo-news.svg',
    url: '#',
    color: 'transparent',
  },
  {
    name: 'sud-radio',
    logo: '/svg/brands/brand-sud-radio.svg',
    url: 'https://youtu.be/bl2EjKv4Jd4?si=itbLxE9E3EDGoiA5',
    color: 'transparent',
  },
]

export const BrandCloudSection = () => {
  const BrandCard = ({ brand }: { brand: Brand }) => {
    return (
      <Link href={brand.url} target="_blank" rel="noreferrer">
        <figure
          className={cn(
            `relative flex flex-col items-center justify-center gap-4 p-4 rounded-lg hover:scale-105
            transition-transform h-[60px] w-[200px] duration-300 ease-in-out mx-6`,
            `bg-${brand.color}`,
          )}
        >
          <Image src={brand.logo} alt={brand.name} fill />
        </figure>
      </Link>
    )
  }
  return (
    <SectionWrapper className={'px-0'}>
      <SectionTitle title="Ils parlent de nous" subtitle="Un grand merci à eux" />

      <Marquee className="[--duration:40s]">
        {brands.map((brand) => (
          <BrandCard key={brand.name} brand={brand} />
        ))}
      </Marquee>
    </SectionWrapper>
  )
}
