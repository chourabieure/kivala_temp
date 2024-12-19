import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'

type UseGoNextProps = {
  onSubmitCondition?: boolean
  onNextPage: () => void
  onSubmit?: (data: any) => void
}

export const useGoNext = ({ onSubmitCondition, onNextPage, onSubmit }: UseGoNextProps) => {
  const formContext = useFormContext()

  const goNext = useCallback(async () => {
    if (onSubmitCondition) {
      if (formContext) {
        const { handleSubmit } = formContext
        const _onSubmit = handleSubmit((data) => {
          onSubmit?.(data)
        })
        await _onSubmit()
      } else {
        onSubmit?.(null)
      }
    } else {
      onNextPage()
    }
  }, [formContext, onNextPage, onSubmit, onSubmitCondition])

  return { goNext }
}
