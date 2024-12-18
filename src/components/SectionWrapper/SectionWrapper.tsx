import { cn } from '@/lib/utils'
import { ComponentProps, forwardRef } from 'react'

interface Props {
  id?: string
  children: React.ReactNode
  className?: ComponentProps<any>['className']
}

export const SectionWrapper = forwardRef<HTMLDivElement, Props>(
  ({ id, children, className }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          `relative flex flex-col items-center justify-center gap-12 md:gap-16 w-full py-12 md:py-16 px-6
          overflow-hidden`,
          className,
        )}
      >
        {children}
      </section>
    )
  },
)
