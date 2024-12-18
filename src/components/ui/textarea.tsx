import * as React from 'react'

import { cn } from '@/lib/utils'

interface Props extends React.ComponentProps<'textarea'> {
  onCustomChange?: (value: string) => void
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, onCustomChange, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[250px] p-4 w-full rounded-md bg-background-default-secondary disabled:cursor-not-allowed
          disabled:opacity-50`,
          // TEXT
          'text-base text-text-default font-medium leading-relaxed transition-colors',
          // FOCUS
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-kivala-secondary',
          //PLACEHOLDER
          'placeholder:text-text-default-secondary placeholder:font-medium placeholder:text-base',
          className,
        )}
        ref={ref}
        onChange={(e) => onCustomChange?.(e?.target?.value)}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
