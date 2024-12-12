import { cn } from '@/lib/utils'
import { ComponentProps, forwardRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: ComponentProps<any>['className']
}

export const SectionWrapper = forwardRef<HTMLDivElement, Props>(({ children, className }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        `relative flex flex-col items-center justify-center gap-12 md:gap-16 w-full py-12 md:py-24 px-6
        overflow-hidden`,
        className,
      )}
    >
      {children}
    </section>
  )
})
