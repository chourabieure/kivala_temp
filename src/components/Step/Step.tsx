import { StepProps, StepStatus } from './Step.props'

export const Step = ({ title, description, status, isLastStep }: StepProps) => {
  const titleColor =
    status === StepStatus.NotStarted
      ? 'text-[#182244]/50'
      : status === StepStatus.Current
        ? 'text-blue-600'
        : 'text-[#192344]'
  const bubbleColor = status === StepStatus.NotStarted || status === StepStatus.Current ? '/20' : '/100'

  return (
    <div
      className={`flex-col justify-start items-start gap-3 inline-flex ${isLastStep ? 'w-[500px]' : 'w-full'}`}
    >
      <div className="self-stretch h-5 justify-start items-center gap-6 inline-flex">
        <div
          className={`w-5 h-5 bg-blue-600$ rounded-xl flex-col justify-center items-center inline-flex`}
        >
          {status === StepStatus.Current && (
            <div className="w-3 h-3 relative border border-[#FFFFFF] rounded-xl items-center justify-center inline-flex">
              <div className="w-[2px] h-[2px] bg-[#FFFFFF] rounded-xl" />
            </div>
          )}
        </div>
        {!isLastStep && <div className="grow h-px bg-[#cfd6dc]" />}
      </div>
      <div className="self-stretch h-[30px] flex-col justify-center items-start flex">
        <p className={`text-center ${titleColor} text-base font-bold `}>{title}</p>
        <p className="text-center text-[#7b85a8] text-sm font-medium">{description}</p>
      </div>
    </div>
  )
}
