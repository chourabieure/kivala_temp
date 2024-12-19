import { cn } from '@/lib/utils'
import { Icon } from '../Icon'
import { StepProps, StepStatus } from './Step.props'

export const Step = ({ title, description, status, isLastStep }: StepProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Icon
          name={
            status === StepStatus.Completed
              ? 'Check'
              : status === StepStatus.Current
                ? 'CircleDot'
                : 'Dot'
          }
          size={12}
          containerClassName={cn(
            'w-[20px] h-[20px] flex items-center justify-center rounded-full bg-background-kivala-primary/20 text-background-kivala-primary',
            status === StepStatus.Completed &&
              'bg-background-kivala-primary text-text-brand-on-brand',
            status === StepStatus.NotStarted && 'text-transparent',
          )}
        />
        <div className="bg-[#CFD6DC] flex-1 h-[1px]" />
      </div>
      <span
        className={cn(
          'flex flex-col leading-none gap-1',
          status === StepStatus.Current && 'text-background-kivala-primary',
          status === StepStatus.NotStarted && 'opacity-50',
        )}
      >
        <span className={cn('text-lg font-bold')}>{title}</span>
        <span className={cn('text-lg text-text-default-secondary')}>{description}</span>
      </span>
    </div>
  )
}
