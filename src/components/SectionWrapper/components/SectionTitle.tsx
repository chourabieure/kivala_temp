'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ComponentProps, ReactNode } from 'react'

interface Props {
  title?: string | ReactNode
  subtitle?: string
  className?: ComponentProps<any>['className']
}

export const SectionTitle = ({ title = 'Title', subtitle, className }: Props) => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
      className={cn(
        'flex flex-col items-center justify-center gap-3 text-center text-background-kivala ',
        className,
      )}
    >
      {subtitle && (
        <span className="text-xl md:text-2xl font-bold text-text-default-tertiary leading-none">
          {subtitle}
        </span>
      )}
      <span className="text-[24px] md:text-[32px] font-bold leading-none">{title}</span>
    </motion.div>
  )
}
