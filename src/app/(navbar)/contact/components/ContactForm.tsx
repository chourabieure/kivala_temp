'use client'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { CONTACT_TYPES, useSubmit } from '../hooks/useSubmit'
import { Button } from '@/components/ui/button'
import { CustomInput } from '@/components/CustomInput/CustomInput'
import { CustomInputFormat } from '@/components/CustomInput/CustomeInput.utils'
import { Icon } from '@/components/Icon'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { RadioGroup } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { CONTACT_LINKS } from '@/constants/infos'
import Image from 'next/image'

export const ContactForm = () => {
  const { isLoading, onSubmit, form } = useSubmit()

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const value = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <SectionWrapper ref={ref} className="relative">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-w-5xl w-full flex-col items-center gap-6"
      >
        <h2 className="text-lg font-extrabold text-background-kivala-primary">CONTACT</h2>
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="max-md:text-center text-[48px] md:text-[64px] font-bold leading-none">
            Contactez Kivala
          </h1>
          <h3 className="text-2xl font-medium leading-snug md:text-center">
            Vous avez des questions sur la solution Kivala ? Nous sommes à votre disposition, merci
            de compléter le formulaire ci-dessous pour être recontacté.
          </h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex max-md:flex-col w-full max-w-5xl gap-16"
      >
        <Form {...form}>
          <form
            className="flex flex-col flex-1 gap-6 justify-center items-center"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => {
                return (
                  <FormItem className="flex-1 w-full">
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
                          {Object.values(CONTACT_TYPES).map(({ label, icon, color }) => (
                            <div
                              className={cn(
                                `relative flex flex-1 items-center gap-3 bg-background-default-secondary p-3 rounded-lg
                                cursor-pointer border-2 border-transparent`,
                                field.value === label &&
                                  ' bg-background-kivala-tertiary border-background-kivala-secondary',
                              )}
                              onClick={() => field.onChange(label)}
                            >
                              <Icon
                                name={icon}
                                size={14}
                                containerClassName={cn(
                                  'h-[24px] w-[24px] rounded-lg flex items-center justify-center text-text-brand-on-brand',
                                  color,
                                )}
                              />
                              <span className="text-base font-medium text-text-default">
                                {label}
                              </span>
                              {field.value === label && (
                                <Icon
                                  name="Check"
                                  containerClassName="absolute right-3 top-1/2 -translate-y-1/2 text-background-kivala-primary"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <div className="flex max-md:flex-col w-full gap-6">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <CustomInput
                        disabled={isLoading}
                        label="Nom"
                        required
                        placeholder="e.g. DUPONT"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <CustomInput
                        disabled={isLoading}
                        label="Prénom"
                        placeholder="e.g. Jean"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex max-md:flex-col w-full gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <CustomInput
                        disabled={isLoading}
                        label="Adresse mail"
                        required
                        placeholder="e.g. john@entreprise.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <CustomInput
                        disabled={isLoading}
                        label="Téléphone"
                        required
                        placeholder="6 00 00 00 00"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <CustomInput
                      disabled={isLoading}
                      label="Message"
                      required
                      placeholder="Laissez nous un message ..."
                      format={CustomInputFormat.TextArea}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button animation={'translate'} variant={'gradient'} size={'lg'} className="w-full">
              Envoyer le message <Icon name="MoveRight" />
            </Button>
          </form>
        </Form>
        <div className="max-md:hidden max-w-[400px] w-full flex-1 flex flex-col gap-12 md:pt-6">
          <div className="relative bg-text-brand-on-brand flex-1 w-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col gap-3 p-4 h-full justify-end z-[2]">
              <span className="flex flex-col leading-none gap-1 font-bold">
                <span className="text-text-brand-on-brand text-3xl">Jean DUPONT</span>
                <span className="text-background-kivala-primary text-2xl">Syndic</span>
              </span>

              <span className="text-text-brand-on-brand text-base font-medium">
                Kivala® apporte une solution clé en main, fonctionnelle et simple d’usage, pour
                vous garantir une parfaite maîtrise des accès dans votre immeuble. Un système de
                gestion d’accès nouvelle génération.
              </span>
            </div>

            <div className="bg-gradient-to-b from-transparent to-text-default absolute inset-0 z-[1]" />
            <Image
              alt="Contact image"
              src="/image/contact-image.png"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 [&_span]:leading-none">
            <span className="flex flex-col gap-2">
              <span className="text-xl font-bold">DISCUTEZ AVEC NOUS</span>
              <span className="text-xl font-normal text-[#7B86A9]">
                Parlez avec nos équipes en direct.
              </span>
            </span>
            <span className="flex flex-col gap-4">
              {CONTACT_LINKS.map(({ label, icon, onPress }, index) => (
                <span
                  onClick={onPress}
                  key={index}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <Icon
                    name={icon}
                    size={24}
                    containerClassName={'text-background-kivala-primary'}
                  />
                  <span className="text-xl font-normal hover:underline">{label}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="flex flex-col gap-6 [&_span]:leading-none">
            <span className="flex flex-col gap-2">
              <span className="text-xl font-bold">CONTACTEZ-NOUS</span>
              <span className="text-xl font-normal text-[#7B86A9]">
                Du Lundi au Vendredi de 9:00h à 18:00h
              </span>
            </span>
            <span className="flex flex-col gap-4">
              <span onClick={() => {}} className="flex items-center gap-4 cursor-pointer">
                <Icon
                  name={'PhoneCall'}
                  size={24}
                  containerClassName={'text-background-kivala-primary'}
                />
                <span className="text-xl font-normal hover:underline">+33 1 80 87 01 77</span>
              </span>
            </span>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
