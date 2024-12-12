'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Icon } from '../Icon'
import { SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { IconType } from '../Icon/Icon.props'
import { CONTACT_LINKS, OTHERS_LINKS, SOCIAL_NETWORKS_LINKS } from '@/constants/infos'
import { NAVBAR_LINKS } from '../Navbar/Navbar.utils'

export const Footer = () => {
  return (
    <>
      <SectionWrapper className="justify-center border-t border-background-kivala-tertiary">
        <div className="w-full max-w-5xl flex-1 flex flex-col">
          <div className="w-full max-md:flex-col max-md:gap-6 max-md:items-center flex justify-between">
            <div className="relative w-[200px] h-[46px]">
              <Image src={'/svg/logo-full.svg'} alt="logo" fill priority />
            </div>
            <div className="flex gap-4 items-center max-md:w-full">
              <span className="text-[24px] font-bold max-md:hidden">Vous avez une question ?</span>
              <Button variant={'gradient'} size={'sm'} className="max-md:w-full">
                Contactez-nous <Icon name="MessagesSquare" />
              </Button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap [&_span]:leading-none w-full max-sm:gap-12 max-sm:px-0 max-lg:px-10 max-w-5xl
            justify-between"
        >
          <div className="flex flex-col gap-12">
            <span className="flex flex-col gap-2">
              <span className="text-xl font-bold">KIVALA SYSTEM</span>
              <span className="text-xl font-normal !leading-tight">
                141 rue du vieux pont de Sèvres,
                <br />
                92100 Boulogne-Billancourt
              </span>
            </span>
            <div className="flex flex-col gap-3">
              <span className="text-xl font-bold">SUIVEZ-NOUS</span>
              <div className="flex gap-4">
                {SOCIAL_NETWORKS_LINKS.map(({ name, href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="flex items-center rounded-full h-[48px] bg-background-kivala-secondary w-[48px]
                      text-background-kivala-primary"
                  >
                    <Image src={icon} alt={name} width={24} height={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <span className="flex flex-col gap-3">
            <span className="text-xl font-bold">LIENS UTILES</span>
            <span className="flex flex-col gap-4">
              {NAVBAR_LINKS.map(({ label, href }, index) => (
                <a href={href} key={index} className="flex items-center gap-4">
                  <span className="text-xl text-background-kivala-primary font-semibold">
                    {label}
                  </span>
                </a>
              ))}
            </span>
            <span className="flex flex-col gap-4 pt-6">
              {OTHERS_LINKS.map(({ name, href }, index) => (
                <a href={href} key={index} className="flex items-center gap-4">
                  <span className="text-xl font-normal underline">{name}</span>
                </a>
              ))}
            </span>
          </span>
          <div className="flex max-md:w-full flex-col gap-12">
            <div className="flex flex-col gap-6">
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
                    <span className="text-xl font-normal text-[#7B86A9]">{label}</span>
                  </span>
                ))}
              </span>
            </div>
            <div className="flex flex-col gap-6">
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
                  <span className="text-xl font-normal text-[#7B86A9]">+33 1 80 87 01 77</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className="flex justify-center bg-[#EEF2FE] py-6 px-6 w-full">
        <div className="flex max-sm:flex-col max-sm:gap-6 justify-between w-full items-center">
          <span className="text-lg text-[#7B86A9]">© 2024 KIVALA SYSTEME</span>
          <Button
            className="text-background-kivala-primary hover:text-text-brand-on-brand hover:bg-background-kivala-primary"
            variant={'ghost'}
            size={'sm'}
          >
            Retour en haut <Icon name="CircleArrowUp" />
          </Button>
        </div>
      </div>
    </>
  )
}