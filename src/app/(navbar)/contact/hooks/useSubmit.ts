'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCallback, useState } from 'react'
import { IconType } from '@/components/Icon/Icon.props'
import { toast } from 'sonner'

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
  firstname: z.string().optional(),
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
  message: z.string().optional(),
})

interface Props {
  onSuccessfullySubmitted: () => void
}

export const useSubmit = ({ onSuccessfullySubmitted }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      type: CONTACT_TYPES.resident.label,
    },
  })

  const onSubmit = useCallback(
    async (data: z.infer<typeof ContactFormSchema>) => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          throw new Error('Failed to submit form')
        }

        onSuccessfullySubmitted()
        toast.success('Votre message a bien été prit en compte.', {
          description: 'Merci de votre retour.',
        })
        form.reset()
      } catch (error) {
        toast.error("Une erreur est survenue lors de l'envoi du formulaire", {
          description: "Si l'erreur persiste, veuillez contacter notre service client.",
        })
        console.error('Error submitting form:', error)
      } finally {
        setIsLoading(false)
      }
    },
    [form],
  )

  return { isLoading, onSubmit, form }
}
