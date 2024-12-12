import { icons } from 'lucide-react'
import { IconProps } from './Icon.props'
import React, { FC, memo, ReactElement } from 'react'
import { cn } from '@/lib/utils'
const tailwindConfig = require('../../../tailwind.config.ts')

export const Icon: FC<IconProps> = memo(
  ({
    containerClassName,
    name,
    loading,
    disabled = false,
    color,
    size = 16,
    ...props
  }: IconProps): ReactElement => {
    if (!(name in icons)) return <></>

    const iconColor: string = (color && tailwindConfig.default.theme?.extend.colors[color]) ?? color
    // @ts-ignore
    const LucideIcon = icons[name]

    return (
      <div className={cn(`icon-${name}`, disabled ? 'opacity-50' : '', containerClassName)}>
        {loading ? (
          <div className="h-full px-0 animate-spin">
            <LucideIcon color="primary" height={20} name="Loader" width={20} />
          </div>
        ) : (
          <LucideIcon color={iconColor} size={size} {...props} />
        )}
      </div>
    )
  },
)

Icon.displayName = 'Icon'
