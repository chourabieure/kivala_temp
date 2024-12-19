import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all' +
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ' +
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        primary:
          'bg-background-kivala-primary hover:bg-background-kivala-primary/90 text-text-brand-on-brand hover:text-text-brand-on-brand',
        secondary:
          'bg-background-kivala-tertiary hover:bg-background-kivala-tertiary/90 text-background-kivala-primary hover:text-background-kivala-primary',
        gradient: 'bg-gradient-to-tr from-[#2f56c6] to-[#283f80] text-text-brand-on-brand',
        ghost: 'bg-transparent hover:bg-background-default-secondary text-text-default-secondary',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-[44px] rounded-lg px-4 md:px-6 text-[15px] font-bold',
        lg: 'h-[48px] rounded-lg px-4 md:px-6 gap-4 text-lg md:text-lg font-bold [&_svg]:size-4 md:[&_svg]:size-5',
        icon: 'h-9 w-9',
        'icon-sm': 'h-[42px] w-[42px] rounded-lg p-0',
        'icon-lg': 'h-[48px] w-[48px] rounded-lg p-0 md:[&_svg]:size-6',
      },
      animation: {
        none: 'transition-none',
        default: 'transition-all duration-300 ease-in-out',
        translate: 'hover:-translate-y-[2px] duration-300 ease-in-out transition-transform',
      },
    },
    defaultVariants: {
      animation: 'default',
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
