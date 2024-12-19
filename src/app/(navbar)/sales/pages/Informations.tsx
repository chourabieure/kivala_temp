'use client'
import { FormField } from '@/components/ui/form'
import { FormControl } from '@/components/ui/form'
import { FormMessage } from '@/components/ui/form'
import { FormItem } from '@/components/ui/form'
import { useFormContext, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { SalesFormSchema } from '../hooks/useSales'
import { InputLabel } from '@/components/InputLabel/InputLabel'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { IconType } from '@/components/Icon/Icon.props'
import { RadioGroup } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/Icon'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

export const CONTACT_TYPES: Record<
  'resident' | 'syndic',
  { label: string; icon: IconType; color: string }
> = {
  syndic: {
    label: 'Syndic',
    icon: 'Building',
    color: 'bg-background-kivala-secondary',
  },
  resident: {
    label: 'Résident',
    icon: 'UsersRound',
    color: 'bg-background-positive',
  },
}

export const Informations = () => {
  const { control, watch } = useFormContext<z.infer<typeof SalesFormSchema>>()
  const { type } = watch()

  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
      className="flex flex-1 flex-col gap-6"
    >
      <FormField
        control={control}
        name="type"
        render={({ field }) => {
          return (
            <FormItem className="w-full">
              <FormControl>
                <RadioGroup>
                  <span
                    className={
                      'font-medium flex pl-[6px] gap-[6px] items-center text-text-default-secondary text-base leading-none'
                    }
                  >
                    Qui est-tu ?
                  </span>
                  <div className="flex gap-3 flex-wrap">
                    {Object.keys(CONTACT_TYPES).map((key, index) => {
                      const { label, icon, color } =
                        CONTACT_TYPES[key as keyof typeof CONTACT_TYPES]
                      return (
                        <div
                          key={index}
                          className={cn(
                            `relative flex flex-1 items-center gap-3 bg-background-default-secondary p-3 rounded-lg
                            cursor-pointer border-2 border-transparent`,
                            field.value === key &&
                              ' bg-background-kivala-tertiary border-background-kivala-secondary',
                          )}
                          onClick={() => field.onChange(key)}
                        >
                          <Icon
                            name={icon}
                            size={14}
                            containerClassName={cn(
                              'h-[24px] w-[24px] rounded-lg flex items-center justify-center text-text-brand-on-brand',
                              color,
                            )}
                          />
                          <span className="text-base font-medium text-text-default">{label}</span>
                          {field.value === key && (
                            <Icon
                              name="Check"
                              containerClassName="absolute right-3 top-1/2 -translate-y-1/2 text-background-kivala-primary"
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />
      {type === 'syndic' && (
        <>
          <FormField
            control={control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <InputLabel label="Nom du Syndic" required />
                <FormControl>
                  <Input placeholder="e.g. SyndicAso" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full bg-border-default/20 h-[1px]" />
        </>
      )}

      <div className="flex w-full max-md:flex-col gap-4">
        <FormField
          control={control}
          name="lastname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <InputLabel label="Nom de famille" required />
              <FormControl>
                <Input placeholder="e.g. DUPONT" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="firstname"
          render={({ field }) => (
            <FormItem className="flex-1">
              <InputLabel label="Prénom (optionnel)" />
              <FormControl>
                <Input placeholder="e.g. DUPONT" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex w-full max-md:flex-col gap-4">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <InputLabel label="Adresse Email" required />
              <FormControl>
                <Input placeholder="e.g. jerome@kivala.fr" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem className="max-w-[150px]">
              <InputLabel label="Téléphone" required />
              <FormControl>
                <Input placeholder="e.g. 02 33 .. .. .." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-full bg-border-default/20 h-[1px]" />
      <FormField
        control={control}
        name="adress"
        render={({ field }) => (
          <FormItem>
            <InputLabel label="Adresse de la Résidence" required />
            <FormControl>
              <Input placeholder="e.g. 1 rue du Soleil" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex w-full max-md:flex-col gap-4">
        <FormField
          control={control}
          name="zipcode"
          render={({ field }) => (
            <FormItem className="max-w-[150px]">
              <InputLabel label="Code postal" required />
              <FormControl>
                <Input placeholder="e.g. 75000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <InputLabel label="Ville" required />
              <FormControl>
                <Input placeholder="e.g. PARIS" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {type === 'resident' && (
        <>
          <div className="w-full bg-border-default/20 h-[1px]" />
          <div className="flex items-center gap-[6px] px-[6px]">
            <Checkbox
              onCheckedChange={(value) => setIsChecked(!!value)}
              checked={isChecked}
              id="nom-syndic"
            />
            <span aria-label="nom-syndic" className="text-base font-medium">
              Je connais le nom de mon syndic
            </span>
          </div>
          {isChecked && (
            <FormField
              control={control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <InputLabel label="Nom de mon syndic" />
                  <FormControl>
                    <Input placeholder="e.g. SyndicAso" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </>
      )}
    </motion.div>
  )
}
