import { IconType } from '@/components/Icon/Icon.props'

export const SOCIAL_NETWORKS_LINKS = [
  {
    name: 'Instagram',
    href: '#',
    icon: '/svg/instagram.svg',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: '/svg/instagram.svg',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: '/svg/instagram.svg',
  },
]

export const OTHERS_LINKS = [
  {
    name: 'Mentions légales',
    href: '#',
  },
  {
    name: 'CGU',
    href: '#',
  },
  {
    name: 'Politique de confidentialité',
    href: '#',
  },
  {
    name: 'Se désinscrire',
    href: '#',
  },
]

export const CONTACT_LINKS = [
  {
    label: 'contact@kivala.com',
    icon: 'AtSign',
    onPress: () => {},
  },
  {
    label: 'Écrivez-nous sur LinkedIn',
    icon: 'Linkedin',
    onPress: () => {},
  },
] as { label: string; icon: IconType; onPress: () => void }[]
