import { useCallback } from 'react'

type UseGoBackProps = {
  onEndCondition?: boolean
  onPreviousPage: () => void
  onEnd?: () => void
}

export const useGoBack = ({ onPreviousPage, onEndCondition, onEnd }: UseGoBackProps) => {
  const goBack = useCallback(() => {
    if (onEndCondition) {
      onEnd?.()
    } else {
      onPreviousPage()
    }
  }, [onEnd, onEndCondition, onPreviousPage])

  return { goBack }
}
