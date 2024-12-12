import { IconType } from '../Icon/Icon.props'

export const CustomInputFormat = {
  Email: 'email',
  Password: 'password',
  SelectWithIcon: 'selectWithIcon',
  Text: 'text',
  TextArea: 'textarea',
  Search: 'search',
} as const

export type CustomInputFormatType = (typeof CustomInputFormat)[keyof typeof CustomInputFormat]

export interface SelectValuesType {
  label: string
  icon: IconType
}

export interface SelectOptionsType {
  placeholder?: string
  defaultValue?: string
  selectValues?: SelectValuesType[]
}
