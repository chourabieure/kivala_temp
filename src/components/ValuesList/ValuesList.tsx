'use client'

import { motion } from 'framer-motion'
import { IconType } from '../Icon/Icon.props'
import { cn } from '@/lib/utils'
import { Icon } from '../Icon'

export interface ValuesListType {
  label: string
  icon?: IconType
}

interface Props {
  values: ValuesListType[]
  variant?: 'primary' | 'positive'
}

export const ValuesList = ({ values, variant = 'primary' }: Props) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
      className="flex w-full gap-6 md:gap-12 items-center flex-wrap justify-center"
    >
      {values.map(({ label, icon }, index) => (
        <span
          key={index}
          className={cn(
            `flex max-md:flex-1 items-center gap-2 md:gap-3 text-base font-semibold leading-none
            whitespace-nowrap max-md:justify-center`,
          )}
        >
          {icon === 'Flag' ? (
            <span className="text-2xl">🇫🇷</span>
          ) : (
            <Icon
              name={icon ?? 'Check'}
              containerClassName={cn(
                variant === 'positive'
                  ? 'text-text-positive-tertiary'
                  : 'text-background-kivala-primary',
              )}
              size={18}
            />
          )}
          {label}
        </span>
      ))}
    </motion.div>
  )
}
