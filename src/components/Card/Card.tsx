'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ComponentProps, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: ComponentProps<any>['className']
}

export const Card = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'flex bg-[#FCFCFD] rounded-lg border border-border-default-card p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
