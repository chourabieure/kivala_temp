'use client'

import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { ComponentProps, ReactNode, useState } from 'react'

import { CustomInputFormat, CustomInputFormatType, SelectOptionsType } from './CustomeInput.utils'
import { CustomToolTip } from './components/Tooltip'
import { SelectWithIcon } from './formats/SelectWithIcon'
import { Icon } from '../Icon'
import { Textarea } from '../ui/textarea'

interface Props extends React.ComponentProps<typeof Input> {
  label?: string
  placeholder?: string
  required?: boolean
  className?: ComponentProps<any>['className']
  tooltip?: ReactNode
  format?: CustomInputFormatType
  selectOptions?: SelectOptionsType
}

export const CustomInput = ({
  label = 'Label',
  required,
  placeholder = 'e.g. Placeholder',
  className,
  tooltip,
  format = CustomInputFormat.Text,
  selectOptions,
  ...props
}: Props) => {
  const shouldDisplayLabel = label && format !== CustomInputFormat.Search
  const isError = false

  const formatList = {
    [CustomInputFormat.Email]: null,
    [CustomInputFormat.Password]: null,
    [CustomInputFormat.SelectWithIcon]: (
      <SelectWithIcon selectOptions={selectOptions} disabled={props.disabled} />
    ),
    [CustomInputFormat.Text]: (
      <Input
        placeholder={placeholder}
        className={cn(isError && 'border border-destructive')}
        {...props}
      />
    ),
    [CustomInputFormat.Search]: (
      <div className="relative">
        <Icon name="Search" containerClassName={'absolute top-1/2 left-4 -translate-y-1/2'} />
        <Input
          placeholder={placeholder}
          className={cn(
            'pl-[44px] bg-background-default-card border border-border-default-card',
            isError && 'border border-destructive',
          )}
          {...props}
        />
      </div>
    ),
    [CustomInputFormat.TextArea]: (
      <Textarea className={cn(isError && 'border border-destructive')} placeholder={placeholder} />
    ),
  }
  if (!format) return null
  return (
    <div className={cn('flex flex-col gap-[11px]', className)}>
      {shouldDisplayLabel && (
        <span
          className={
            'font-medium flex pl-[6px] gap-[6px] items-center text-text-default-secondary text-base leading-none'
          }
        >
          {label} {required && <span className="text-border-danger-tertiary">*</span>}
          {tooltip && <CustomToolTip tooltip={tooltip} />}
        </span>
      )}
      {formatList[format]}
    </div>
  )
}