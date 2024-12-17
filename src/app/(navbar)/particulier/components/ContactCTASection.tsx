'use client'
import { Icon } from '@/components/Icon'
import { IconType } from '@/components/Icon/Icon.props'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'

const values: { text: string; icon: IconType }[] = [
  { text: 'Sécurité optimale', icon: 'ScanEye' },
  {
    text: 'Solution digitale',
    icon: 'Computer',
  },
  {
    text: 'Un SAV Expert',
    icon: 'Headset',
  },
  {
    text: 'Entreprise Française',
    icon: 'Flag',
  },
  {
    text: 'Installation rapide',
    icon: 'Zap',
  },
]
export const ContactCTASection = () => {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="relative w-full p-8 md:p-16 rounded-xl max-w-5xl flex flex-col items-center bg-gradient-to-tr
          from-[#2f56c6] to-[#283f80] gap-10 overflow-hidden"
      >
        <span className="text-[24px] md:text-[32px] font-bold leading-tight text-center text-text-brand-on-brand">
          Besoin d'information complémentaire ?<br />
          Une question sur l’entreprise ?
        </span>
        <div className="flex md:max-w-3xl w-full gap-y-6 gap-x-12 items-center flex-wrap justify-center">
          {values.map(({ text, icon }, index) => (
            <span
              key={index}
              className={cn(
                `text-text-brand-on-brand flex max-md:flex-1 items-center gap-2 md:gap-3 text-xl font-semibold
                leading-none whitespace-nowrap max-md:justify-center !m-0`,
              )}
            >
              {icon === 'Flag' ? (
                <span className="text-2xl">🇫🇷</span>
              ) : (
                <Icon name={icon} size={24} />
              )}
              {text}
            </span>
          ))}
        </div>
        <motion.div
          style={{ left: -100, top: 0, rotate: '30deg', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute max-md:hidden"
        >
          <Image src={'/svg/siren-white-shape.svg'} alt="siren" width={450} height={450} />
        </motion.div>
        <motion.div
          style={{ right: -100, bottom: -200, rotate: '-30deg', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute max-md:hidden"
        >
          <Image src={'/svg/box-shape.svg'} alt="siren" width={450} height={450} />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
