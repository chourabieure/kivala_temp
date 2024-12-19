'use client'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { SalesFormSchema } from '../hooks/useSales'
import { Card } from '@/components/Card/Card'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/Icon'
import { Input } from '@/components/ui/input'
import { CustomTooltip } from '@/components/CustomTooltip/CustomTooltip'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { InputLabel } from '@/components/InputLabel/InputLabel'

const ITEMS: Record<'platine' | 'lot', { title: string; subtitle: ReactNode }> = {
  platine: {
    title: 'Nombre d’entrée à équiper',
    subtitle: <>Définissez le nombre d'accès d'immeuble que vous souhaitez équiper</>,
  },
  lot: {
    title: 'Nombre de lots',
    subtitle: (
      <>
        Merci de préciser le nombre de lot dans votre immeuble.{' '}
        <CustomTooltip tooltip="Le prix de l'abonnement varie en fonction du nombre de lot" />
      </>
    ),
  },
}
export const Cart = () => {
  const { setValue, watch } = useFormContext<z.infer<typeof SalesFormSchema>>()

  const { numberOfLots, numberOfPlatines } = watch()

  const handleClick = (type: 'platine' | 'lot', operation: 'plus' | 'minus') => {
    const formType = type === 'platine' ? 'numberOfPlatines' : 'numberOfLots'
    if (operation === 'minus' && watch()[formType] === 1) return
    setValue(formType, operation === 'plus' ? watch()[formType] + 1 : watch()[formType] - 1)
  }
  const handleInputChange = (type: 'platine' | 'lot', value: number) => {
    const formType = type === 'platine' ? 'numberOfPlatines' : 'numberOfLots'
    if (value <= 0) {
      setValue(formType, 1)
      return
    }
    if (value > 9999) {
      setValue(formType, 9999)
      return
    }

    setValue(formType, value)
  }

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
      className="flex flex-1 flex-col"
      aria-labelledby="cart-items-title"
    >
      <div className="flex flex-1 flex-col gap-3">
        {Object.keys(ITEMS).map((item) => {
          const { title, subtitle } = ITEMS[item as keyof typeof ITEMS]

          const itemNumber = item === 'platine' ? numberOfPlatines : numberOfLots

          return (
            <Card className={'bg-background-default gap-6'}>
              {item === 'platine' ? (
                <div
                  className={
                    'relative w-[64px] rounded-lg flex-shrink-0 flex justify-center items-center'
                  }
                >
                  <Image
                    alt="Image de platine"
                    src="/image/platine-v2.png"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`bg-gradient-to-tr from-[#2f56c6] to-[#283f80] text-text-brand-on-brand h-[64px] w-[64px] rounded-lg
                    flex-shrink-0 flex justify-center items-center`}
                >
                  <Icon name="Building" size={32} />
                </div>
              )}
              <div className="flex flex-col gap-3">
                <span className="flex flex-col gap-2 leading-none">
                  <span className="text-2xl font-semibold">{title}</span>
                  <span className="text-lg text-text-default-secondary leading-snug">
                    {subtitle}
                  </span>
                </span>
                <div className="flex gap-3">
                  <Button
                    variant={'secondary'}
                    size={'icon-sm'}
                    onClick={() => handleClick(item as 'platine' | 'lot', 'minus')}
                  >
                    <Icon name="Minus" />
                  </Button>
                  <Input
                    value={itemNumber}
                    type="number"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      handleInputChange(item as 'platine' | 'lot', Number(e.currentTarget.value))
                    }
                    min={1}
                    className="w-[100px] text-background-kivala-primary text-3xl font-semibold min-w-[35px] text-center"
                  />
                  <Button
                    variant={'secondary'}
                    size={'icon-sm'}
                    onClick={() => handleClick(item as 'platine' | 'lot', 'plus')}
                  >
                    <Icon name="Plus" />
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
      <div>
        <InputLabel label="Un code promotionnel ?" />
        <div className="flex gap-4">
          <Input placeholder="CODE PROMO" />
          <Button variant={'gradient'} size={'sm'} className="h-[42px] text-base">
            Appliquer
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
