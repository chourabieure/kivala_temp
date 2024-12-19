// import { trpc } from '@/utils/trpc'

export const useProducts = () => {
  // const { data: products, isLoading, error } = trpc.sales.getProducts.useQuery()
  

  return { products : [], isLoading : false, error : null }
}
