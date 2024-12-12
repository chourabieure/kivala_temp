import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { SelectOptionsType } from '../CustomeInput.utils'
import { cn } from '@/lib/utils'

interface Props extends React.ComponentProps<typeof Select> {
  isError?: boolean
  selectOptions?: SelectOptionsType
}

export const SelectWithIcon = ({ isError, selectOptions, ...props }: Props) => {
  const { placeholder, defaultValue, selectValues } = selectOptions || {}

  return (
    <Select defaultValue={defaultValue} {...props}>
      <SelectTrigger
        className={cn(
          '[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0',
          isError && 'border border-destructive',
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        className="[&_*[role=option]>span]:text-text-default [&_*[role=option]>span]:font-medium
          [&_*[role=option]>span]:text-base [&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span]:end-3
          [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center
          [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-3"
      >
        {selectValues?.map(({ label, icon }, index) => (
          <SelectItem value={label} key={index}>
            <Icon name={icon} size={16} aria-hidden="true" />
            <span className="truncate">{label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
