import { CartItem } from '@/components/CartItem'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Step } from '@/components/Step/Step'
import { StepStatus } from '@/components/Step/Step.props'
import { useEffect, useState } from 'react'
import { Phone, FileText, SquareArrowRight, ArrowRight } from 'lucide-react'
import { Cart } from './Cart'
import { FooterButton } from './FooterButton'
import { LeftBodyForm } from './LeftBodyForm'
import { RightBodyForm } from './RightBodyForm'
import { useProducts } from '../hooks/useProducts'
import { trpc } from '@/utils/trpc'
import getStripe from '@/utils/get-stripe'
import { loadStripe, Stripe } from '@stripe/stripe-js'

export const FormSection = () => {
  const [step, setStep] = useState(0)

  const [platineNumber, setPlatineNumber] = useState(1)
  const [lotsNumber, setLotsNumber] = useState(1)
  useProducts()

  const onSubmit = () => {}

  const steps = [
    { title: 'Informations', description: 'Inscrivez-vous' },
    { title: 'Détail de la commande', description: 'Choisissez vos équipements' },
    { title: 'Informations de paiement', description: 'Confirmer votre commande' },
  ]

  const stepper = () => (
    <nav aria-label="Étapes de la commande" className="flex flex-row justify-center gap-4 w-full">
      {steps.map((stepInfo, index) => (
        <Step
          key={index}
          title={stepInfo.title}
          description={stepInfo.description}
          status={
            step === index
              ? StepStatus.Current
              : step > index
                ? StepStatus.Completed
                : StepStatus.NotStarted
          }
          isLastStep={index === steps.length - 1}
        />
      ))}
    </nav>
  )

  return (
    <SectionWrapper className="pt-6 md:pt-12 !pb-0 lg:gap-8">
      <section
        className="flex flex-col p-8 items-center gap-8 w-[1058px] border border-[#d9d9d9]/50 bg-[#fcfcfd] rounded-lg"
        aria-labelledby="form-section-title"
      >
        {stepper()}
        <div className="flex flex-row justify-center gap-4 w-full">
          <LeftBodyForm
            step={step}
            setPlatineNumber={setPlatineNumber}
            setLotsNumber={setLotsNumber}
            platineNumber={platineNumber}
            lotsNumber={lotsNumber}
          />

          <RightBodyForm platineNumber={platineNumber} lotsNumber={lotsNumber} step={step} />
        </div>
        <FooterButton step={step} setStep={setStep} onSubmit={onSubmit} />
      </section>
    </SectionWrapper>
  )
}
