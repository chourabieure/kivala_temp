'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCallback } from 'react'
import { IconType } from '@/components/Icon/Icon.props'

interface ContactType {
  label: 'Syndic' | 'Résident' | 'Installateur'
  icon: IconType
  color: string
}

export const CONTACT_TYPES: Record<'resident' | 'syndic' | 'installateur', ContactType> = {
  resident: {
    label: 'Résident',
    icon: 'UsersRound',
    color: 'bg-background-positive',
  },
  syndic: {
    label: 'Syndic',
    icon: 'Building',
    color: 'bg-background-kivala-secondary',
  },
  installateur: {
    label: 'Installateur',
    icon: 'Wrench',
    color: 'bg-background-warning',
  },
}

const CONTACT_TYPE_VALUES = [
  CONTACT_TYPES.resident.label,
  CONTACT_TYPES.syndic.label,
  CONTACT_TYPES.installateur.label,
] as const

const ContactFormSchema = z.object({
  type: z.enum(CONTACT_TYPE_VALUES, {
    required_error: 'Veuillez sélectionner un type de contact',
  }),
  lastname: z.string({
    required_error: 'Veuillez entrer votre nom',
  }),
  firstname: z.string(),
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
  message: z.string({
    required_error: 'Veuillez entrer votre message',
  }),
})

export const useSubmit = () => {
  const isLoading = false

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      type: CONTACT_TYPES.resident.label,
    },
  })

  const onSubmit = useCallback((data: z.infer<typeof ContactFormSchema>) => {
    const {} = data
  }, [])

  return { isLoading, onSubmit, form }
}
