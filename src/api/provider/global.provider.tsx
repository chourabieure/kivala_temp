import { TooltipProvider } from '@/components/ui/tooltip'
import { ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'

interface Props {
  children: ReactNode
}

export const GlobalProvider = ({ children }: Props) => {
  return (
    <>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster
        toastOptions={{
          classNames: {
            error:
              'text-text-danger-tertiary bg-background-danger-tertiary border-border-danger-tertiary',
            success:
              'text-text-positive-tertiary bg-background-positive-tertiary border-border-positive-tertiary',
            warning:
              'text-text-warning-tertiary bg-background-warning-tertiary border-border-warning-tertiary',
            info: 'text-background-kivala-primary bg-background-kivala-tertiary border-background-kivala-primary',
          },
        }}
      />
    </>
  )
}
