'use client'

import { motion } from 'framer-motion'
import { Icon } from '../Icon'

interface Props {
  showBanner: boolean
}

export const PromotionBar = ({ showBanner }: Props) => {
  return (
    <motion.div
      initial={{ top: -50, opacity: 0 }}
      whileInView={{ top: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        type: 'spring',
      }}
      style={{ top: showBanner ? 0 : -50 }}
      className="fixed z-10 flex w-full justify-center items-center max-md:flex-col gap-4 px-6 bg-gradient-to-tr
        from-[#2f56c6] to-[#283f80] h-[50px] text-text-brand-on-brand text-base"
    >
      <span className="font-bold">Vue à la télé ! ******* investie dans notre solution !</span>
      <div className="flex bg-background-default rounded-full px-3 py-2 items-center h-fit text-background-kivala gap-3">
        <span className="font-bold leading-none">Voir la rediffusion</span>
        <Icon name="MoveRight" />
      </div>
    </motion.div>
  )
}
