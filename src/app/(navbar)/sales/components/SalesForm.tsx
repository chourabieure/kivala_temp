'use client'

import { useState } from 'react'
import { Footer } from './Footer'
import { PreviewProduct } from './PreviewProduct'
import { Card } from '@/components/Card/Card'
import { Form } from '@/components/ui/form'
import { useSales } from '../hooks/useSales'
import { Cart } from '../pages/Cart'
import { Informations } from '../pages/Informations'
import { Checkout } from '../pages/Checkout'
import { SalesPageKey } from '../Sales.props'
import { useGoBack, useGoNext, useNavigation } from '@/hooks/useFormNavigation'
import { initialPageKey, salesWorkflow, submitPageKey } from '../Sales.utils'
import { Stepper } from './Stepper'
import { motion } from 'framer-motion'

const SalesPageComponent = {
  cart: Cart,
  informations: Informations,
  checkout: Checkout,
}

export const SalesForm = () => {
  const { formMethods } = useSales()

  const { currentPageKey, currentIndex, workflow, setPage } = useNavigation({
    workflowSteps: salesWorkflow,
    initialPage: initialPageKey,
  })

  const { goBack } = useGoBack({
    onEndCondition: currentIndex === 0,
    onPreviousPage: () => setPage(currentIndex - 1),
  })

  const { goNext } = useGoNext({
    onSubmitCondition: currentPageKey === submitPageKey,
    onSubmit: (_data) => {
      console.log('SUBMIT')
    },
    onNextPage: () => setPage(currentIndex + 1),
  })

  const pageName = workflow[currentIndex] as SalesPageKey
  const ReservationPage = SalesPageComponent[pageName]

  return (
    <Form {...formMethods}>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="max-w-5xl px-8 mx-auto py-12">
          <Stepper currentPageKey={currentPageKey as SalesPageKey} />
        </div>

        <Card className="flex flex-col p-6 items-center gap-6 w-full max-w-5xl mx-auto">
          <div className="flex flex-row justify-center gap-4 w-full">
            <ReservationPage />
            <PreviewProduct currentPageKey={currentPageKey as SalesPageKey} />
          </div>
          <Footer currentPageKey={currentPageKey as SalesPageKey} goNext={goNext} goBack={goBack} />
        </Card>
      </motion.form>
    </Form>
  )
}
