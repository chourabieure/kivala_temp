import { Icon } from '@/components/Icon'
import { Button } from '@/components/ui/button'
import { SalesPageKey } from '../Sales.props'
import { ReactNode } from 'react'

interface Props {
  currentPageKey: SalesPageKey
  goBack: () => void
  goNext: () => void
}

export const Footer = ({ currentPageKey, goBack, goNext }: Props) => {
  const buttonActions: Record<
    'informations' | 'cart',
    {
      back: { onPress: () => void; content: ReactNode }
      next: { onPress: () => void; content: ReactNode }
    }
  > = {
    informations: {
      back: {
        onPress: () => (window.location.href = '/contact'),
        content: (
          <>
            Être recontacté
            <Icon name="PhoneCall" />
          </>
        ),
      },
      next: {
        onPress: () => goNext(),
        content: (
          <>
            Obtenir mon devis
            <Icon name="MoveRight" />
          </>
        ),
      },
    },
    cart: {
      back: {
        onPress: () => (window.location.href = '/'),
        content: (
          <>
            Télécharger mon devis
            <Icon name="Download" />
          </>
        ),
      },
      next: {
        onPress: () => goNext(),
        content: (
          <>
            Passer au paiement
            <Icon name="MoveRight" />
          </>
        ),
      },
    },
  }

  return (
    <div className="flex items-center w-full gap-6">
      {currentPageKey !== 'informations' && (
        <Button animation={'translate'} variant={'secondary'} size={'icon-lg'} onClick={goBack}>
          <Icon name="ChevronLeft" />
        </Button>
      )}
      {currentPageKey !== 'checkout' && (
        <>
          <Button
            animation={'translate'}
            variant={'secondary'}
            size={'lg'}
            className="flex-1"
            onClick={buttonActions[currentPageKey].back.onPress}
          >
            {buttonActions[currentPageKey].back.content}
          </Button>
          <Button
            animation={'translate'}
            variant={'primary'}
            size={'lg'}
            className="flex-1"
            onClick={buttonActions[currentPageKey].next.onPress}
          >
            {buttonActions[currentPageKey].next.content}
          </Button>
        </>
      )}
    </div>
  )
}
