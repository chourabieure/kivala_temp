import { Icon } from '@/components/Icon'
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipArrow, TooltipContent } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

interface Props {
  tooltip?: ReactNode
}

export const CustomTooltip = ({ tooltip }: Props) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <Icon name="Info" size={14} containerClassName={'text-background-kivala-primary'} />
      </TooltipTrigger>
      <TooltipContent
        className="bg-background-default rounded-md max-w-[400px] drop-shadow-md p-3 text-base italic"
        align="center"
        side="right"
      >
        {tooltip}
        <TooltipArrow className="-rotate-90 fill-background-default -mt-2 mb-2" asChild>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25">
            <path d="M1.5 15.0981C-0.500002 13.9434 -0.499998 11.0566 1.5 9.90192L17.25 0.808652C19.25 -0.34605 21.75 1.09733 21.75 3.40673V21.5933C21.75 23.9027 19.25 25.346 17.25 24.1913L1.5 15.0981Z" />
          </svg>
        </TooltipArrow>
      </TooltipContent>
    </Tooltip>
  )
}
