import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const SalesFormSchema = z.object({
  // Informations
  type: z.enum(['resident', 'syndic']),
  company: z.string(),
  firstname: z.string().optional(),
  lastname: z.string(),
  email: z
    .string({
      required_error: 'Veuillez entrer votre email',
    })
    .refine((value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value), {
      message: 'Veuillez entrer une adresse email valide',
    }),
  phone: z
    .string({
      required_error: 'Veuillez entrer votre numéro de téléphone',
    })
    .refine((value) => /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value), {
      message: 'Veuillez entrer un numéro de téléphone valide',
    }),
  adress: z.string(),
  zipcode: z.string({
    required_error: 'Veuillez entrer votre code postal',
  }),
  city: z.string({
    required_error: 'Veuillez entrer votre ville',
  }),
  // Cart
  numberOfLots: z.number(),
  numberOfPlatines: z.number(),
})

export const useSales = () => {
  const formMethods = useForm<z.infer<typeof SalesFormSchema>>({
    resolver: zodResolver(SalesFormSchema),
    defaultValues: {
      type: 'syndic',
      numberOfLots: 1,
      numberOfPlatines: 1,
    },
  })

  useEffect(() => {
    console.log(formMethods.watch())
  })

  return { formMethods }
}
