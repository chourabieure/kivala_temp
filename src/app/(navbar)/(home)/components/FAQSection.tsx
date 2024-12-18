'use client'
import { Icon } from '@/components/Icon'
import { SectionTitle } from '@/components/SectionWrapper/components/SectionTitle'
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const questions = [
  {
    question: 'Comment faire pour installer Kivala dans mon immeuble ?',
    answer: (
      <>
        Pour installer une platine de contrôle des accès Kivala dans votre immeuble, demandez à
        votre syndic ou à votre président de conseil syndical de nous contacter. Nous intervenons
        pour remplacer votre ancien système de code d'accès par notre solution innovante tactile.
        Vous trouverez le détail de nos fonctionnalités sur ce{' '}
        <span className="underline">lien</span>.
      </>
    ),
  },
  {
    question: 'Quelles fonctions sont disponibles sur la platine ?',
    answer: (
      <>
        En plus de la fonction de codes d'accès personnalisés à usage unique et temporaires, la
        platine Kivala, comporte une fonction interphone visio interactif et la possibilité d'ouvrir
        sa porte d'entrée d'immeuble à distance directement depuis l'application.
      </>
    ),
  },
  {
    question: "L'application Kivala fonctionne-t-elle sur tous les smartphones ?",
    answer: (
      <>
        L'application Kivala fonctionne sur tous les smartphones, qu'ils soient sur Android ou
        Apple. Vous pouvez télécharger gratuitement l\'application Kivala sur l'App Store ou sur le
        Play Store.
      </>
    ),
  },
  {
    question: 'Est-ce que la platine est résistante aux chocs et aux intempéries ?',
    answer: (
      <>
        Notre platine Kivala est ultra-résistante, dotée d'un verre Securit anti-choc, la platine a
        été conçue pour résister sur la durée et pour résister aux températures les plus extrêmes.
      </>
    ),
  },
  {
    question: "Combien d'utilisateurs puis-je prévoir par appartement ?",
    answer: (
      <>
        A l'installation, votre syndic ou votre conseil syndical ajoute un administrateur par
        appartement. L'administrateur principal peut ajouter autant de membres souhaités. Ces
        nouveaux utilisateurs auront accès aux mêmes fonctionnalités que le compte administrateur.
        Idéal pour les familles nombreuses ou pour les appartements en colocation.
      </>
    ),
  },
  {
    question:
      'Est-ce que les autres résidents de mon immeuble ont accès à mes informations personnelles ?',
    answer: (
      <>
        Non , chaque utilisateur bénéficie d'un espace privé au sein de son compte Kivala. Les
        informations personnelles et les codes d'accès sont strictement confidentiels.
      </>
    ),
  },
  {
    question: 'Puis-je utiliser un seul compte Kivala pour gérer plusieurs logements ?',
    answer: (
      <>
        Tout à fait , un compte Kivala vous permet de centraliser la gestion de tous vos biens
        immobiliers. Vous pouvez attribuer un code unique à chaque logement pour un suivi
        personnalisé.
      </>
    ),
  },
  {
    question:
      "Est-ce que l'installation nécessite des travaux ou des modifications de l'infrastructure ?",
    answer: (
      <>
        L'installation Kivala vient remplacer votre système d'interphone ou de clavier codé.
        L'installation se branche sur l'alimentation électrique 12V de votre immeuble. Simple et
        rapide.
      </>
    ),
  },
  {
    question: "Comment faire si je n'ai pas de smartphone ?",
    answer: (
      <>
        La platine Kivala permet de conserver un accès par badge, ou par code. L'option appel visio
        peut également se faire sur un dispositif intérieur pour les résidents qui ne disposent pas
        de smartphone.
      </>
    ),
  },
]

export const FAQSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <SectionWrapper>
      <SectionTitle title="Questions fréquentes" subtitle="Besoin de plus d'informations ?" />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
        className="flex flex-col bg-background-kivala-tertiary w-full max-w-5xl p-4 md:p-8 gap-4 rounded-xl"
      >
        {questions.map(({ question, answer }, index) => (
          <Collapsible
            key={index}
            open={selectedIndex === index}
            className="bg-background-default rounded-xl"
          >
            <CollapsibleTrigger
              className="flex w-full items-center justify-between gap-4 py-4 px-6"
              onClick={() => {
                if (selectedIndex === index) {
                  setSelectedIndex(null)
                  return
                }
                setSelectedIndex(index)
              }}
            >
              <span className="font-bold text-lg md:text-xl text-left">{question}</span>
              <Icon
                name="ChevronDown"
                size={24}
                containerClassName={cn(
                  'transition-all duration-300 ease-in-out',
                  selectedIndex === index && 'rotate-[180deg]',
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-4 px-6 pb-4">
                <span className="text-base md:text-lg">{answer}</span>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
