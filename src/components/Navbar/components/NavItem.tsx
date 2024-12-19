import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentProps } from 'react'

interface Props {
  href?: string
  label?: string
  className?: ComponentProps<any>['className']
  isSelected?: boolean
  onPress?: () => void
}

export const NavItem = ({ href = '#', label = 'Link', onPress, className, isSelected }: Props) => {
  return (
    <li onClick={onPress}>
      <Link
        href={href}
        className={cn(
          `text-[15px] font-bold text-text-default-secondary hover:text-background-kivala-primary px-5 h-11
          hover:bg-background-default-secondary rounded-md flex items-center justify-center whitespace-nowrap
          hover:-translate-y-[2px] duration-300 ease-in-out transition-all w-full py-4`,
          className,
          isSelected && 'text-background-kivala-primary',
        )}
      >
        {label}
      </Link>
    </li>
  )
}
