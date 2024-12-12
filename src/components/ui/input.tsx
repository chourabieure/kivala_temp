import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-[42px] p-4 w-full rounded-md bg-background-default-secondary disabled:cursor-not-allowed
          disabled:opacity-50`,
          // TEXT
          'text-base text-text-default font-medium leading-none transition-colors',
          // FOCUS
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-kivala-secondary',
          // FILE
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          // PLACEHOLDER
          'placeholder:text-text-default-secondary placeholder:font-medium placeholder:text-base',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
