'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCallback } from 'react'
import { IconType } from '@/components/Icon/Icon.props'

const ContactFormSchema = z.object({
  company: z.string(),
  lastname: z.string({
    required_error: 'Veuillez entrer votre nom',
  }),
  email: z
    .string({
      required_error: 'Veuillez entrer votre email',
    })
    .email({
      message: 'Veuillez entrer une adresse email valide',
    }),
  phone: z.string({
    required_error: 'Veuillez entrer votre numéro de téléphone',
  }),
  zipcode: z.string({
    required_error: 'Veuillez entrer votre code postal',
  }),
  city: z.string({
    required_error: 'Veuillez entrer votre ville',
  }),
})

export const useSubmit = () => {
  const isLoading = false

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit = useCallback((data: z.infer<typeof ContactFormSchema>) => {
    const {} = data
  }, [])

  return { isLoading, onSubmit, form }
}
