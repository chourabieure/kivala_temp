import { SalesPageKey, SalesWorkflow } from './Sales.props'

export const PRICE_PLATINE = 1300
export const PRICE_SUB_PLATINE = 99.99
export const PRICE_SUB_LOTS = 2.99

export const initialPageKey: SalesPageKey = 'informations'
export const submitPageKey: SalesPageKey = 'checkout'
export const salesWorkflow: SalesWorkflow = ['informations', 'cart', 'checkout']

export const salesWorkflowInfo: Record<SalesPageKey, { title: string; subtitle: string }> = {
  informations: {
    title: 'Informations',
    subtitle: 'Inscrivez-vous',
  },
  cart: {
    title: 'Détail de la commande',
    subtitle: 'Choisissez vos équipements',
  },
  checkout: {
    title: 'Informations de paiement',
    subtitle: 'Confirmer votre commande',
  },
}

export const getTotalSubscriptionPrice = (numberOfLots: number) => {
  return numberOfLots * PRICE_SUB_LOTS
}

export const getTotalPrice = (numberOfLots: number, numberOfPlatines: number) => {
  let installationPrice = numberOfPlatines * PRICE_PLATINE
  return installationPrice + getTotalSubscriptionPrice(numberOfLots)
}
