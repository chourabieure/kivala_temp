import { useState } from 'react'

type UseNavigationProps<T extends string[]> = {
  workflowSteps: T
  initialPage: string
}

export const useNavigation = <T extends string[]>({
  workflowSteps,
  initialPage,
}: UseNavigationProps<T>) => {
  const [currentPageKey, setCurrentPageKey] = useState(initialPage)
  const [currentIndex, setCurrentIndex] = useState(0)

  const workflow = workflowSteps

  const percentage = (currentIndex + 1) / workflow.length

  const setPage = (index: number) => {
    setCurrentIndex(index)
    setCurrentPageKey(workflow[index])
  }

  return { currentPageKey, currentIndex, workflow, setPage, percentage }
}
