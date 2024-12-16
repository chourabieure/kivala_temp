'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const codesTypes: { name: string; desc: string; icon: IconType }[] = [
  {
    name: 'Permanent',
    desc: 'Enfants, famille, proches ...',
    icon: 'Infinity',
  },
  {
    name: 'Régulier',
    desc: "Infirmières, garde d'enfants, aide ménagère ...",
    icon: 'ClockAlert',
  },
  {
    name: 'Usage unique',
    desc: 'Livreur, technicien, maintenance...',
    icon: 'Hourglass',
  },
]

export const AccessTypesSection = () => {
  return (
    <SectionWrapper className={''}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-md:flex-col max-w-5xl gap-12 md:gap-6 justify-between"
      >
        <div className="flex flex-1 flex-col gap-6 justify-between">
          <span className="max-md:text-center text-[24px] md:text-[32px] font-bold leading-tight">
            La solution Kivala
            <br /> adaptée pour tous vos usages
          </span>
          <Button
            variant={'gradient'}
            size={'lg'}
            animation={'translate'}
            className="max-md:hidden w-fit"
          >
            Contactez-nous
            <Icon name="MoveRight" />
          </Button>
        </div>
        <div className="flex flex-1 flex-col gap-6 md:gap-10">
          {codesTypes.map(({ name, icon, desc }, index) => (
            <div className="flex gap-4 md:gap-6 items-center" key={index}>
              <Icon name={icon} size={32} containerClassName={'text-background-kivala-primary'} />
              <span className="flex flex-col leading-none gap-1">
                <span className="text-xl md:text-2xl font-semibold">{name}</span>
                <span className="text-lg md:text-xl font-medium text-text-default-secondary">
                  {desc}
                </span>
              </span>
            </div>
          ))}
        </div>
        <Button variant={'gradient'} size={'lg'} animation={'translate'} className="md:hidden">
          Contactez-nous
          <Icon name="MoveRight" />
        </Button>
      </motion.div>
    </SectionWrapper>
  )
}
