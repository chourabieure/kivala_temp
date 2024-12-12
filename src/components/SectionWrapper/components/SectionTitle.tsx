'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ComponentProps, ReactNode } from 'react'

interface Props {
  title?: string | ReactNode
  subtitle?: string
  className?: ComponentProps<any>['className']
}

export const SectionTitle = ({ title = 'Title', subtitle = 'Subtitle', className }: Props) => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
      className={cn('flex flex-col items-center justify-center gap-4 text-center', className)}
    >
      <span className="text-2xl md:text-3xl font-bold text-text-default-tertiary leading-none">
        {subtitle}
      </span>
      <span className="text-[32px] md:text-[48px] font-bold text-background-kivala leading-none">
        {title}
      </span>
    </motion.div>
  )
}