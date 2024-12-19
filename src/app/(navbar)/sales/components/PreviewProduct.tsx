'use client'
import { useProducts } from '../hooks/useProducts'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { SalesFormSchema } from '../hooks/useSales'
import { SalesPageKey } from '../Sales.props'
import Image from 'next/image'
import {
  getTotalPrice,
  getTotalSubscriptionPrice,
  PRICE_PLATINE,
  PRICE_SUB_LOTS,
  PRICE_SUB_PLATINE,
} from '../Sales.utils'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
  currentPageKey: SalesPageKey
}

export const PreviewProduct = ({ currentPageKey }: Props) => {
  const { products, isLoading, error } = useProducts()
  const { watch } = useFormContext<z.infer<typeof SalesFormSchema>>()
  const { numberOfLots, numberOfPlatines } = watch()

  const handleFirstDisplay = ({
    value,
    suffix,
    preffix,
  }: {
    value: string
    suffix?: ReactNode
    preffix?: ReactNode
  }) => {
    if (currentPageKey === 'informations')
      return (
        <motion.div
          key={'first'}
          initial={{ x: -5, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
          className="flex blur-[2px] items-end leading-none"
        >
          {' '}
          ****
        </motion.div>
      )

    return (
      <motion.div
        key={'second'}
        initial={{ x: 5, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex items-end"
      >
        {preffix}
        <span className="leading-none">{value}</span>
        {suffix}
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col w-full max-w-[500px] h-full bg-background-kivala rounded-2xl overflow-hidden">
      <div className="flex flex-col p-4 gap-4">
        <div className="flex gap-4">
          <div className="relative flex items-end justify-center w-[180px] bg-background-kivala-primary/20 rounded-xl">
            <div className="relative h-2/3 w-2/3">
              <Image
                src={'/image/platine-v2.png'}
                alt="Image de platine"
                fill
                className="absolute object-cover object-top"
              />
            </div>
          </div>
          <span className="flex flex-col items-end gap-4">
            <span className="flex flex-col gap-3 leading-none">
              <span className="text-3xl text-text-brand-on-brand font-bold">Platine Kivala®</span>
              <span className="text-lg text-text-brand-on-brand font-medium leading-snug">
                Une platine durable et de qualité pour une sécurité optimale.
              </span>
            </span>
            <span className="text-background-kivala-secondary text-[40px] font-bold">
              {handleFirstDisplay({
                value: `${numberOfPlatines}`,
                preffix: <span className="leading-none">x</span>,
              })}
            </span>
          </span>
        </div>
        <div className="bg-background-default flex flex-col w-full p-4 gap-1 rounded-xl">
          <span className="flex justify-between items-center">
            <span className="font-semibold text-xl">Abonnement mensuel</span>
            <span
              className={cn(
                'text-background-kivala-primary text-[24px] font-bold',
                getTotalSubscriptionPrice(numberOfLots) >= 43 &&
                  'line-through text-xl text-text-default-tertiary',
              )}
            >
              {handleFirstDisplay({
                value: '43,99',
                suffix: <span className="text-base leading-none pb-[2px]"> € / HT</span>,
              })}
            </span>
          </span>
          <span className="text-lg font-semibold text-text-default-secondary flex justify-between">
            <span className="flex items-center gap-1">
              <span className="text-background-kivala-primary leading-none">
                {PRICE_SUB_LOTS} €{' '}
              </span>{' '}
              / mois / lot
            </span>
            <span
              className={cn(
                'text-background-kivala-primary text-[24px] font-bold',
                getTotalSubscriptionPrice(numberOfLots) < 43 &&
                  'line-through text-xl text-text-default-tertiary',
              )}
            >
              {handleFirstDisplay({
                value: getTotalSubscriptionPrice(numberOfLots).toFixed(2),
                suffix: <span className="text-base leading-none"> € / HT</span>,
              })}
            </span>
          </span>
        </div>
        <div className="w-full bg-background-kivala-tertiary/5 h-[2px]" />
        <div className="flex flex-col gap-6 px-4">
          <span className="flex justify-between items-center">
            <span className="text-background-kivala-secondary font-semibold text-xl">
              Platines Kivala®
            </span>
            <span className="text-text-brand-on-brand text-[24px] font-bold">
              {handleFirstDisplay({
                value: (numberOfPlatines * PRICE_PLATINE).toFixed(2),
                suffix: <span className="text-base"> € / HT</span>,
              })}
            </span>
          </span>
          <span className="flex justify-between items-center">
            <span className="text-background-kivala-secondary font-semibold text-xl">
              Abonnements
            </span>
            <span className="text-text-brand-on-brand text-[24px] font-bold">
              {handleFirstDisplay({
                value: getTotalSubscriptionPrice(numberOfLots).toFixed(2),
                suffix: <span className="text-base"> € / HT</span>,
              })}
            </span>
          </span>
          <span className="flex justify-between items-center">
            <span className="text-background-kivala-secondary font-semibold text-xl">
              Livraison et installation
            </span>
            <span className="relative text-background-kivala-secondary text-[24px] font-bold leading-none">
              Inclus
              <div className="absolute h-[50px] w-[100px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <Image src={'/svg/hand-drawn-circle.svg'} alt="Hand drawn circle" fill />
              </div>
            </span>
          </span>
        </div>
        <div className="w-full bg-background-kivala-tertiary/5 h-[2px]" />
        <span className="flex justify-between items-center px-4 py-4">
          <span className="text-text-brand-on-brand font-bold text-xl">Total</span>
          <span className="text-background-kivala-secondary text-[40px] font-bold">
            {handleFirstDisplay({
              value: getTotalPrice(numberOfLots, numberOfPlatines).toFixed(2),
              suffix: (
                <>
                  <span className="text-xl">€ / HT</span>
                </>
              ),
            })}
          </span>
        </span>
      </div>
      <div className="flex">
        <div className="flex-1 h-[10px] bg-[#8BA6EF]" />
        <div className="flex-1 h-[10px] bg-background-default" />
        <div className="flex-1 h-[10px] bg-[#E56770]" />
      </div>
    </div>
  )
}
