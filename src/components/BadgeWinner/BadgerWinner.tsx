'use client'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import { ComponentProps, useEffect, useState } from 'react'

interface Props {
  className?: ComponentProps<any>['className']
  size?: 'sm' | 'md'
}

const badgeVariants = cva('flex gap-4 items-center', {
  variants: {
    size: {
      sm:
        'bg-background-default shadow-md drop-shadow-2xl rounded-full fixed z-10 ' +
        '[&>img]:w-[20px] [&_h3]:text-base [&_h4]:text-base gap-3 py-0 py-3 px-4 right-4 bottom-4 ' +
        'md:[&>img]:w-[30px] md:[&_h3]:text-lg md:[&_h4]:text-xl md:gap-3 md:py-0 md:py-3 md:px-4 md:right-8 md:bottom-8',
      md:
        '[&>img]:w-[42px] [&_h3]:text-[24px] [&_h4]:text-[24px] ' +
        'md:[&>img]:w-[50px] md:[&_h3]:text-[28px] md:[&_h4]:text-[38px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const BadgeWinner = ({ className, size = 'md' }: Props) => {
  const { scrollY } = useScroll()
  const [showBadge, setShowBadge] = useState(false)

  useEffect(() => {
    // Update the badge visibility on component mount
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const fullHeight = document.body.scrollHeight
      if (
        scrollY.get() > viewportHeight + 300 &&
        scrollY.get() + viewportHeight + 300 < fullHeight
      ) {
        setShowBadge(true)
      } else {
        setShowBadge(false)
      }
    }

    // Listen to scrollY changes
    const unsubscribe = scrollY.on('change', handleScroll)

    // Clean up the listener on unmount
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={
        size === 'sm' && !showBadge
          ? { y: 25, opacity: 0, pointerEvents: 'none' }
          : { y: 0, opacity: 1 }
      }
      transition={{ duration: 1.6, ease: 'easeInOut', type: 'spring' }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: 'easeInOut' },
      }}
      className={cn('cursor-pointer', badgeVariants({ size }), className)}
    >
      <Image className="scale-x-[-1]" alt="laurier" src={'/svg/laurier.svg'} height={0} width={0} />
      <div className="flex flex-col">
        <h3 className="text-background-kivala-primary text-xl font-bold leading-none text-center">
          Gagnant
        </h3>
        <h4 className="text-background-kivala text-center text-3xl font-extrabold italic leading-tight">
          Grands Prix de
          <br /> la <span className="text-background-kivala-primary">Copro</span> 2024
        </h4>
      </div>
      <Image alt="laurier" src={'/svg/laurier.svg'} height={0} width={0} />
    </motion.div>
  )
}
