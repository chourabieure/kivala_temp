'use client'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Icon } from '../Icon'
import { SectionWrapper } from '../SectionWrapper/SectionWrapper'
import { CONTACT_LINKS, OTHERS_LINKS, SOCIAL_NETWORKS_LINKS } from '@/constants/infos'
import { NAVBAR_LINKS } from '../Navbar/Navbar.utils'

const MEDIA_LINKS = {
  mysweetimmo:
    'https://www.mysweetimmo.com/2024/11/21/kivala-remporte-le-grand-prix-de-la-copro-2024-avec-son-systeme-innovant-dacces-aux-immeubles/',
  'secret-defense':
    'https://www.secret-defense.org/cybersecurite/3000-personnes-connaitront-le-code-dacces-a-votre-immeuble-dici-un-an/',
  capital:
    'https://www.capital.fr/immobilier/vous-seriez-surpris-de-savoir-combien-de-personnes-connaissent-le-code-de-votre-immeuble-1505788',
  msn: 'https://www.msn.com/fr-fr/finance/autres/vous-seriez-surpris-de-savoir-combien-de-personnes-connaissent-le-code-de-votre-immeuble/ar-AA1uuK58',
  presseagence:
    'https://presseagence.fr/paris-dici-un-an-plus-de-3-000-personnes-connaitront-le-code-dacces-a-votre-immeuble/',
  mysweetimmo2:
    'https://www.mysweetimmo.com/2024/11/25/immobilier-dici-un-an-plus-de-3-000-personnes-connaitront-le-code-dacces-a-votre-immeuble/',
  ledauphine:
    'https://www.ledauphine.com/magazine-immobilier/2024/11/25/etes-vous-vraiment-en-securite-dans-votre-copropriete',
  actu: 'https://actu.fr/ile-de-france/paris_75056/paris-insecurite-vols-plus-de-3000-personnes-connaitront-en-un-an-les-codes-d-acces-a-votre-immeuble_61918835.html',
  bfmtv:
    'https://www.bfmtv.com/paris/replay-emissions/bonjour-paris/ile-de-france-l-acces-a-vos-immeubles-pas-si-securise_VN-202411280261.html',
  tf1info:
    'https://www.tf1info.fr/immobilier/des-milliers-d-inconnus-ont-acces-au-digicode-de-votre-immeuble-comment-faire-changer-le-code-2335508.html',
  'ouest-france':
    'https://www.ouest-france.fr/ile-de-france/paris-75000/paris-pourquoi-le-digicode-serait-loin-de-proteger-efficacement-votre-immeuble-e5c6b27c-ad8f-11ef-ac7f-1983a1aa62e8',
  'L’essentiel': 'https://infos-75.com/droits/infos-paris-83/',
  cnews:
    'https://www.cnews.fr/videos/france/2024-12-02/ca-va-retarder-lentree-mais-ca-nannule-rien-les-digicodes-loin-de-proteger',
  mesinfos:
    'https://mesinfos.fr/92100-boulogne-billancourt/plus-de-3-000-visiteurs-connaissent-le-code-d-acces-de-votre-immeuble-211488.html',
  leprogres:
    'https://www.leprogres.fr/magazine-immobilier/2024/12/02/copropriete-etes-vous-vraiment-en-securite-chez-vous',
  dna: 'https://www.dna.fr/magazine-immobilier/2024/12/09/votre-copropriete-est-elle-vraiment-bien-securisee',
  'republicain-lorrain':
    'https://www.republicain-lorrain.fr/magazine-immobilier/2024/12/09/votre-copropriete-est-elle-vraiment-bien-securisee',
  lejsl:
    'https://www.lejsl.com/magazine-immobilier/2024/12/09/votre-copropriete-est-elle-vraiment-bien-securisee',
  bienpublic:
    'https://www.bienpublic.com/magazine-immobilier/2024/12/09/votre-copropriete-est-elle-vraiment-bien-securisee',
  vosgesmatin:
    'https://www.vosgesmatin.fr/magazine-immobilier/2024/12/09/votre-copropriete-est-elle-vraiment-bien-securisee',
  'Sud Radio': 'https://youtu.be/bl2EjKv4Jd4?si=itbLxE9E3EDGoiA5]',
}

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
              <span className="text-xl font-bold max-md:hidden">Vous avez une question ?</span>
              <Button variant={'gradient'} size={'sm'} className="max-md:hidden px-6">
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
              <span className="text-base font-bold">KIVALA SYSTEM</span>
              <span className="text-base font-normal !leading-tight">
                141 rue du vieux pont de Sèvres,
                <br />
                92100 Boulogne-Billancourt
              </span>
            </span>
            <span className="flex flex-col gap-3">
              <span className="text-base font-bold">PRESSE ET MÉDIAS</span>
              <a href={'/presse'} className="group flex items-center gap-4">
                <span className="text-base text-[#7B86A9] font-normal group-hover:underline">
                  Consulter tout les articles
                </span>
              </a>

              {/* {Object.keys(MEDIA_LINKS).map((key, index) => (
                  <a
                    key={index}
                    href={MEDIA_LINKS[key as keyof typeof MEDIA_LINKS]}
                    className="group flex items-center gap-4"
                  >
                    <span className="text-base text-[#7B86A9] italic font-medium group-hover:underline">
                      {key}
                    </span>
                  </a>
                ))} */}
            </span>
          </div>
          <span className="flex flex-col gap-3 min-w-[250px]">
            <span className="text-base font-bold">LIENS UTILES</span>
            <span className="flex flex-col gap-3">
              {NAVBAR_LINKS.map(({ label, href }, index) => (
                <a href={href} key={index} className="group flex items-center gap-4">
                  <span className="text-base text-background-kivala-primary font-semibold group-hover:underline">
                    {label}
                  </span>
                </a>
              ))}
            </span>
            <span className="flex flex-col gap-3 pt-3">
              {OTHERS_LINKS.map(({ name, href }, index) => (
                <a href={href} key={index} className="group flex items-center gap-4">
                  <span className="text-base text-[#7B86A9] font-normal group-hover:underline">
                    {name}
                  </span>
                </a>
              ))}
            </span>
          </span>
          <div className="flex max-md:w-full flex-col gap-12">
            <div className="flex flex-col gap-6">
              <span className="flex flex-col gap-2">
                <span className="text-base font-bold">DISCUTEZ AVEC NOUS</span>
                <span className="text-base font-normal text-[#7B86A9]">
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
                    <span className="text-base leading-none font-normal group-hover:underline text-[#7B86A9]">
                      {label}
                    </span>
                  </span>
                ))}
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="flex flex-col gap-2">
                <span className="text-base font-bold">CONTACTEZ-NOUS</span>
                <span className="text-base font-normal text-[#7B86A9]">
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
                  <span className="text-base leading-nonefont-normal text-[#7B86A9] group-hover:underline">
                    01 80 87 01 77
                  </span>
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-base font-bold">SUIVEZ-NOUS</span>
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
        </div>
      </SectionWrapper>
      <div className="flex justify-center bg-[#EEF2FE] py-6 px-6 w-full">
        <div className="flex max-sm:flex-col max-sm:gap-6 justify-between w-full items-center">
          <span className="text-base text-[#7B86A9]">© 2024 KIVALA SYSTEME</span>
          <a href="#top">
            {' '}
            <Button
              className="text-background-kivala-primary hover:text-text-brand-on-brand hover:bg-background-kivala-primary"
              variant={'ghost'}
              size={'sm'}
            >
              Retour en haut <Icon name="CircleArrowUp" />
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}
