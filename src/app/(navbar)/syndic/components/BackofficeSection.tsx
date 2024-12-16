'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Button } from '@/components/ui/button'
import { ValuesList, ValuesListType } from '@/components/ValuesList/ValuesList'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const values: ValuesListType[] = [
  {
    label: 'Prise en main rapide',
    icon: 'Zap',
  },
  {
    label: 'Un SAV réactif',
    icon: 'Headset',
  },
]

export const BackofficeSection = () => {
  return (
    <SectionWrapper className={'bg-background-kivala-tertiary'}>
      <div className="flex w-full flex-col gap-8">
        <SectionTitle
          title="Dashboard Gestionnaire"
          subtitle="Découvrez notre support administrateur"
        />
        <ValuesList values={values} variant="positive" />
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex w-full justify-center max-md:flex-col gap-4"
        >
          <Button variant={'gradient'} size={'lg'} animation={'translate'}>
            Demander une démonstration
          </Button>
          <Button
            variant={'secondary'}
            size={'lg'}
            animation={'translate'}
            className="bg-background-default hover:bg-background-default/80"
          >
            Contactez-nous
            <Icon name="MessagesSquare" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
