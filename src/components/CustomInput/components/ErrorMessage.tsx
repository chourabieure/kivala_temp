interface Props {
  message?: string
}
export const ErrorMessage = ({ message = 'Error Message' }: Props) => {
  return (
    <span
      className="pl-[6px] text-sm text-destructive leading-none"
      role="alert"
      aria-live="polite"
    >
      {message}
    </span>
  )
}
