'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'
import { Icon } from '../Icon'
import { SvgStar } from './components/SvgStar'
import { SvgStarHalf } from './components/SvgStarHalf'

interface Props {
  className?: ComponentProps<any>['className']
  style?: ComponentProps<any>['style']
}

export const Testimonial = ({ className, style }: Props) => {
  return (
    <motion.div
      style={style}
      className={cn(
        'relative flex flex-col gap-3 bg-background-default rounded-xl w-[400px] p-5 drop-shadow-xl z-1',
        className,
      )}
    >
      <div className="absolute -top-[10px] right-[10px] flex items-center gap-2 text-yellow-300">
        <SvgStar />
        <SvgStar />
        <SvgStar />
        <SvgStar />
        <SvgStarHalf />
      </div>
      <span>“La solution est simple d’utilisation et avec une installation rapide.”</span>
      <div className="flex items-center gap-2">
        <div className="h-[45px] w-[45px] rounded-full bg-background-kivala-primary" />
        <span className="flex flex-col gap-2">
          <span className="text-lg text-text-default font-bold leading-none">André W, 87 ans</span>
          <span className="text-sm text-text-default-secondary font-medium leading-none">
            Président conseil syndical
          </span>
        </span>
      </div>
    </motion.div>
  )
}
