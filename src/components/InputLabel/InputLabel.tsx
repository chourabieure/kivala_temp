import { ReactNode } from 'react'
import { CustomToolTip } from '../CustomInput/components/Tooltip'

interface Props {
  label: string
  required?: boolean
  labelRight?: ReactNode
  tooltip?: ReactNode
}

export const InputLabel = ({ label, required, labelRight, tooltip }: Props) => {
  return (
    <span className="flex pb-[11px] justify-between font-medium text-text-default-secondary text-base leading-none">
      <span className={'flex pl-[6px] gap-[6px] items-center'}>
        {label} {required && <span className="text-border-danger-tertiary">*</span>}
        {tooltip && <CustomToolTip tooltip={tooltip} />}
      </span>
      {labelRight}
    </span>
  )
}
