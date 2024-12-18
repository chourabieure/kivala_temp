import { Stripe, loadStripe } from '@stripe/stripe-js'

const getStripe = () => {
  let stripePromise: Promise<Stripe | null>
  const options = {
    clientSecret: process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET!,
  }
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}

export default getStripe
