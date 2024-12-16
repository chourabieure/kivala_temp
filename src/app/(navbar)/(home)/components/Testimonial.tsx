import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { AnimatedTestimonials, TestimonialType } from '@/components/ui/animated-testimonials'

const reviews: TestimonialType[] = [
  {
    name: 'Lily—h',
    quote:
      'Cette idée est génial ! Je peux suivre les entrées de mes enfants à la maison , et générer des codes temporaires pour les livreurs. Vraiment merci KIVALA !',
    stars: 5,
    src: '/image/testimonial/review-1.webp',
  },
  {
    name: 'Chantal79-81',
    quote:
      "kivala est l'application idéale lorsqu'on veut arrêter les vas-et-viens non maîtrisés dans notre immeuble. Au quotidien c'est à la fois très simple d'utilisation, riche d'informations et très efficace pour retrouver de la sécurité",
    stars: 3,
    src: '/image/testimonial/review-2.webp',
  },
  {
    name: 'JJojo78999',
    quote:
      "Kivala a complètement transformé la manière dont je gère les accès à mon immeuble. Grâce à ses codes personnalisés, je n’ai plus à m'inquiéter pour mes livraisons ou l’accès de mes visiteurs.",
    stars: 4,
    src: '/image/testimonial/review-3.webp',
  },
]

export const Testimonial = () => {
  return (
    <SectionWrapper className={'bg-background-kivala-tertiary z-[0]'}>
      <SectionTitle
        title={
          <>
            Des résidents satisfaits
            <br /> et vous ?
          </>
        }
        subtitle="Vos avis comptent"
      />
      <AnimatedTestimonials autoplay testimonials={reviews} />
    </SectionWrapper>
  )
}
