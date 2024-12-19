// import { trpc } from '@/utils/trpc'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react'
import { Stripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { useFormContext, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { SalesFormSchema } from '../hooks/useSales'
import { getTotalPrice } from '../Sales.utils'

export const Checkout = () => {
  return null
  // const { getValues } = useFormContext<z.infer<typeof SalesFormSchema>>()

  // const [stripe, setStripe] = useState<Stripe | null>(null)
  // const [clientSecret, setClientSecret] = useState('')
  // const { mutate: createPaymentIntent } = trpc.sales.createPaymentIntent.useMutation({
  //   onSuccess: (data) => {
  //     console.log(data)
  //     if (data.clientSecret) {
  //       setClientSecret(data?.clientSecret)
  //     }
  //   },
  // })

  // useEffect(() => {
  //   const fetchStripe = async () => {
  //     const stripeInstance = await loadStripe(
  //       'pk_test_51QJtQKDMwX2r56o3UzEASRqsOZiE3A4msT0yUjRPKOrHHdw0KB5AfLqCQej1FhaviNGPRQuSX4R1K68NFvc6lHij00xg6mfebf,',
  //     )
  //     setStripe(stripeInstance)
  //     const { email, lastname, phone, city, company, numberOfLots, numberOfPlatines } = getValues()
  //     createPaymentIntent({
  //       email,
  //       name: lastname,
  //       phone,
  //       city,
  //       company,
  //       amount: getTotalPrice(numberOfLots, numberOfPlatines),
  //     })
  //   }
  //   fetchStripe()
  // }, [createPaymentIntent])

  // if (!stripe || !clientSecret) {
  //   return <div className="flex-1">Loading...</div>
  // }
  // return (
  //   <div className="flex-1">
  //     <Elements
  //       stripe={stripe as any}
  //       options={{
  //         clientSecret,
  //       }}
  //     >
  //       <PaymentElement />
  //     </Elements>
  //   </div>
  // )
}
