'use client'
import Image from 'next/image'
import { NAVBAR_LINKS } from './Navbar.utils'
import { NavItem } from './components/NavItem'
import { Button } from '../ui/button'
import { Icon } from '../Icon'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { PromotionBar } from '../PromotionBar/PromotionBar'

export const Navbar = () => {
  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll()
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      if (scrollY.get() <= viewportHeight - 300) {
        setShowBanner(true)
      } else {
        setShowBanner(false)
      }
    }
    const unsubscribe = scrollY.on('change', handleScroll)
    return () => unsubscribe()
  }, [scrollY])

  return (
    <div>
      <PromotionBar showBanner={showBanner} />
      <motion.div
        style={{ top: showBanner ? 50 : 0, opacity: showBanner ? 1 : 0 }}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="fixed z-10 w-full bg-background-default/80 backdrop-blur-md h-16 lg:h-20 flex items-center
          justify-between px-6 transition-all duration-100 ease-linear"
      >
        <div className="flex items-center gap-12">
          <Link href="/" className="relative h-[24px] w-[104px] lg:h-[36px] lg:w-[157px] lg:-mt-1">
            <Image src={'/svg/logo-full.svg'} alt="logo" fill priority />
          </Link>
          <ul className="max-lg:hidden flex items-center gap-1">
            {NAVBAR_LINKS.map(({ href, label }, index) => (
              <NavItem key={index} href={href} label={label} isSelected={pathname === href} />
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Button className={'group gap-0 max-tablet:hidden'} size={'sm'} variant={'secondary'}>
            <span>Connexion</span>
            <Icon
              name="LogIn"
              containerClassName={
                'invisible group-hover:visible opacity-0 group-hover:opacity-100 w-0 group-hover:w-4 ml-0 group-hover:ml-3 transition-all duration-300 ease-in-out'
              }
            />
          </Button>
          <Button
            className="tablet:hidden group lg:hover:w-[64px] transition-all duration-300 ease-in-out"
            variant={'secondary'}
            size={'icon-sm'}
          >
            <Icon name="LogIn" containerClassName={'transition-all duration-300 ease-in-out'} />
          </Button>
          <Button className={'group gap-0 max-lg:hidden'} size={'sm'} variant={'gradient'}>
            Obtenir un devis
            <Icon
              name="ScrollText"
              containerClassName={
                'invisible group-hover:visible opacity-0 group-hover:opacity-100 w-0 group-hover:w-4 ml-0 group-hover:ml-3 transition-all duration-300 ease-in-out'
              }
            />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button className="lg:hidden" variant={'gradient'} size={'icon-sm'}>
                <Icon name="Menu" containerClassName={'transition-all duration-300 ease-in-out'} />
              </Button>
            </SheetTrigger>
            <SheetContent side={'top'}>
              <SheetTitle className="hidden" />
              <SheetDescription className="hidden" />
              <div className="bg-background-default flex flex-col h-full rounded-md p-6 gap-3">
                <SheetHeader className="hidden" />
                <ul className="flex flex-col items-center gap-1 w-full [&>li]:w-full">
                  {NAVBAR_LINKS.map(({ href, label }, index) => {
                    return (
                      <NavItem
                        key={index}
                        href={href}
                        onPress={() => setOpen(false)}
                        label={label}
                        className={cn(
                          'text-xl h-fit',
                          pathname === href && 'text-background-kivala-primary',
                        )}
                      />
                    )
                  })}
                </ul>
                <Button className={'group gap-0 '} size={'lg'} variant={'secondary'}>
                  <span>Connexion</span>
                  <Icon
                    name="LogIn"
                    containerClassName={
                      'invisible group-hover:visible opacity-0 group-hover:opacity-100 w-0 group-hover:w-4 ml-0 group-hover:ml-4 transition-all duration-300 ease-in-out'
                    }
                  />
                </Button>
                <Button size={'lg'} variant={'primary'}>
                  Obtenir un devis
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </div>
  )
}
