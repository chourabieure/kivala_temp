'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Icon } from '../Icon'
import { SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { CONTACT_LINKS, OTHERS_LINKS, SOCIAL_NETWORKS_LINKS } from '@/constants/infos'
import { NAVBAR_LINKS } from '../Navbar/Navbar.utils'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <SectionWrapper
        className="justify-center border-t border-background-kivala-tertiary bg-gradient-to-tr from-[#2f56c6]
          to-[#283f80]"
      >
        <div className="w-full max-w-5xl flex-1 flex flex-col">
          <div className="w-full max-md:flex-col max-md:gap-6 max-md:items-center flex justify-between">
            <div className="relative w-[200px] h-[46px]">
              <Image src={'/svg/logo-full-white.svg'} alt="logo" fill priority />
            </div>
            <div className="flex gap-4 items-center max-md:w-full">
              <span className="text-xl font-bold max-md:hidden text-text-brand-on-brand">
                Vous avez une question ?
              </span>
              <Button variant={'secondary'} size={'sm'} className="max-md:hidden px-6">
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
              <span className="text-base font-bold text-text-brand-on-brand">KIVALA SYSTEM</span>
              <span className="text-base font-normal !leading-tight text-text-brand-on-brand italic">
                141 rue du vieux pont de Sèvres,
                <br />
                92100 Boulogne-Billancourt
              </span>
            </span>
            <span className="flex flex-col gap-3">
              <span className="text-base font-bold text-text-brand-on-brand">PRESSE ET MÉDIAS</span>
              <Link href={'/presse'} className="group flex items-center gap-4">
                <span className="text-[15px] text-background-kivala-secondary font-semibold group-hover:underline">
                  Consulter tout les articles
                </span>
              </Link>
            </span>
            <div className="flex flex-col gap-3">
              <span className="text-base font-bold text-text-brand-on-brand">SUIVEZ-NOUS</span>
              <div className="flex gap-4">
                {SOCIAL_NETWORKS_LINKS.map(({ name, href, icon }, index) => (
                  <Link href={href} key={index} target="_blank">
                    <Button
                      key={index}
                      className="flex items-center justify-center rounded-full h-[48px] bg-background-kivala-secondary
                        hover:bg-background-kivala-secondary w-[48px] p-0"
                      animation={'translate'}
                    >
                      <Image
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className="stroke-text-brand-on-brand"
                      />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <span className="flex flex-col gap-3 min-w-[250px]">
            <span className="text-base font-bold text-text-brand-on-brand">LIENS UTILES</span>
            <span className="flex flex-col gap-4">
              {NAVBAR_LINKS.map(({ label, href }, index) => (
                <Link href={href} key={index} className="group flex items-center gap-4">
                  <span className="text-[15px] text-background-kivala-secondary font-semibold group-hover:underline">
                    {label}
                  </span>
                </Link>
              ))}
            </span>
            <span className="flex flex-col gap-3 pt-3">
              {OTHERS_LINKS.map(({ name, href }, index) => (
                <Link href={href} key={index} className="group flex items-center gap-4">
                  <span className="text-base text-text-default-tertiary font-normal group-hover:underline">
                    {name}
                  </span>
                </Link>
              ))}
            </span>
          </span>
          <div className="flex max-md:w-full flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="flex flex-col gap-2">
                <span className="text-base font-bold text-text-brand-on-brand">
                  DISCUTEZ AVEC NOUS
                </span>
                <span className="text-base font-normal text-text-brand-on-brand">
                  Parlez avec nos équipes en direct.
                </span>
              </span>
              <span className="flex flex-col gap-4">
                {CONTACT_LINKS.map(({ label, icon, onPress }, index) => (
                  <span
                    onClick={onPress}
                    key={index}
                    className="group flex items-center gap-2 cursor-pointer"
                  >
                    <Icon
                      name={icon}
                      size={16}
                      containerClassName={'text-background-kivala-primary'}
                    />
                    <span className="text-[15px] leading-none font-semibold group-hover:underline text-background-kivala-secondary">
                      {label}
                    </span>
                  </span>
                ))}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="flex flex-col gap-2">
                <span className="text-base font-bold text-text-brand-on-brand">CONTACTEZ-NOUS</span>
                <span className="text-base font-normal text-text-brand-on-brand">
                  Du Lundi au Vendredi de 9:00h à 18:00h
                </span>
              </span>
              <span className="group flex flex-col gap-4">
                <span className="flex items-center gap-2 cursor-pointer">
                  <Icon
                    name={'PhoneCall'}
                    size={16}
                    containerClassName={'text-background-kivala-primary'}
                  />
                  <span className="text-[15px] leading-none font-semibold text-background-kivala-secondary group-hover:underline">
                    01 80 87 01 77
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className="flex justify-center bg-background-kivala-primary py-6 px-6 w-full">
        <div className="flex max-sm:flex-col max-sm:gap-6 justify-between w-full items-center">
          <span className="text-base text-text-brand-on-brand">© 2024 KIVALA SYSTEME</span>
          <Button
            // className="text-background-kivala-primary hover:text-text-brand-on-brand hover:bg-background-kivala-primary"
            variant={'secondary'}
            size={'sm'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Retour en haut <Icon name="CircleArrowUp" />
          </Button>
        </div>
      </div>
    </>
  )
}
