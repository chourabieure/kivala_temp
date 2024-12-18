import { Icon } from '@/components/Icon'
import { Button } from '@/components/ui/button'
import { Dispatch, SetStateAction } from 'react'

export const FooterButton = ({
  step,
  setStep,
  onSubmit,
}: {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  onSubmit: () => void
}) => {
  if (step === 0) {
    return (
      <footer className="flex items-center w-full mt-8 gap-4">
        <Button animation={'translate'} variant={'secondary'} size={'lg'} className="w-full">
          Être recontacté
          <Icon name="Phone" />
        </Button>
        <Button
          animation={'translate'}
          variant={'primary'}
          size={'lg'}
          className="w-full"
          onClick={() => setStep((prev) => prev + 1)}
        >
          Obtenir mon devis
          <Icon name="MoveRight" />
        </Button>
      </footer>
    )
  }
  return (
    <footer className="flex items-center w-full mt-8 gap-4">
      <Button
        animation={'translate'}
        variant={'secondary'}
        size={'lg'}
        className="px-4"
        onClick={() => setStep((prev) => prev - 1)}
      >
        <Icon name="ChevronLeft" />
      </Button>
      <Button animation={'translate'} variant={'primary'} size={'lg'} className="w-full">
        Télécharger mon devis
        <Icon name="Download" />
      </Button>
      <Button
        animation={'translate'}
        variant={'primary'}
        size={'lg'}
        className="opacity-50"
        onClick={onSubmit}
      >
        Passer au paiement
        <Icon name="MoveRight" />
      </Button>
    </footer>
  )
}
