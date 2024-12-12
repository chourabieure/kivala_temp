import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `flex min-h-[250px] p-4 w-full rounded-md bg-background-default-secondary disabled:cursor-not-allowed
          disabled:opacity-50`,
          // TEXT
          'text-base text-text-default font-medium leading-normal transition-colors',
          // FOCUS
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-kivala-secondary',
          //PLACEHOLDER
          'placeholder:text-text-default-secondary placeholder:font-medium placeholder:text-base',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
