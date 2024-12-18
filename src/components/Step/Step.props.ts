export enum StepStatus {
  Completed = 'completed',
  Current = 'current',
  NotStarted = 'notStarted',
}

export interface StepProps {
  title: string
  description: string
  status: StepStatus
  isLastStep?: boolean
}
