import { Step } from '@/components/Step/Step'
import { SalesPageKey } from '../Sales.props'
import { salesWorkflow, salesWorkflowInfo } from '../Sales.utils'
import { StepStatus } from '@/components/Step/Step.props'

interface Props {
  currentPageKey: SalesPageKey
}
export const Stepper = ({ currentPageKey }: Props) => {
  const stepStatus = (pageKey: SalesPageKey) => {
    if (pageKey === currentPageKey) return StepStatus.Current
    if (salesWorkflow.indexOf(pageKey) < salesWorkflow.indexOf(currentPageKey)) {
      return StepStatus.Completed
    }
    return StepStatus.NotStarted
  }
  return (
    <nav className="flex flex-row justify-center gap-4 w-full pt-2">
      {salesWorkflow.map((step, index) => (
        <Step
          key={index}
          title={salesWorkflowInfo[step].title}
          description={salesWorkflowInfo[step].subtitle}
          status={stepStatus(step)}
          isLastStep={step === 'checkout'}
        />
      ))}
    </nav>
  )
}
