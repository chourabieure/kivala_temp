import { trpc } from '@/utils/trpc'

export const useProducts = () => {
  const { data, isLoading, error } = trpc.sales.getProducts.useQuery()

  console.log('ici', data, isLoading, error)
}
