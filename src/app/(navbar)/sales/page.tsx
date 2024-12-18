'use client'
import { FormSection } from './components/FormSection'
import { HeroSection } from './components/HeroSection'
import getStripe from '@/utils/get-stripe'
import { loadStripe, Stripe } from '@stripe/stripe-js'
import { trpc } from '@/utils/trpc'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default async () => {
  return (
    //@ts-ignore
    <Elements stripe={stripePromise ?? ''}>
      <HeroSection />
      <FormSection />
    </Elements>
  )
}
