'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const normes = [
  <span>
    Matériaux professionnels et résistants
    <br /> aux chocs (<span className="italic">Norme militaire US MILSTD810H</span>)
  </span>,
  'Connexion 4G',
  <>
    Indice d’étanchéité : IP68 <br />
    Température : -25°C à +60°C
  </>,
  'Écran tactile, utilisable avec des gants',
  'Résolution vidéo 4K',
  'Entreprise Française',
]

export const PlatineSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Une installation de qualité" subtitle="Une matériel premium" />
      <div className="flex max-md:flex-col-reverse w-full items-center max-w-5xl gap-16">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex flex-1 w-full flex-col gap-12"
        >
          <span className="text-xl font-medium">
            <span className="text-background-kivala-primary">La platine Kivala®</span> a été conçue
            pour évoluer dans des environnements extrêmes : une qualité et une durabilité optimales,
            pour votre sécurité.
          </span>
          <div className="flex flex-col gap-6">
            {normes.map((norme, index) => (
              <span
                key={index}
                className="flex items-start gap-4 text-xl font-semibold leading-tight"
              >
                <Icon
                  name="Check"
                  containerClassName={'mt-[1px] text-background-kivala-primary'}
                  size={24}
                />
                {norme}
              </span>
            ))}
          </div>
          <Button size={'lg'} variant={'gradient'} animation={'translate'} className="w-fit">
            Demander une démonstration
            <Icon name="MoveRight" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="relative flex-1 flex items-center justify-center"
        >
          <div className="relative w-[220px] md:w-[331px] h-[400px] md:h-[500px]">
            <Image src={'/image/platine.png'} alt="plateforme" fill className="object-contain" />
          </div>
          <motion.div
            initial={{ y: '-30%', x: '-50%', rotate: '10deg', opacity: 0 }}
            whileInView={{ y: '-50%', rotate: '40deg', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
            className="bg-[#F7F9FF] h-[300px] md:h-[450px] w-[300px] md:w-[450px] rounded-[75px] md:rounded-[140px]
              absolute top-1/2 left-1/2 -z-10"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
