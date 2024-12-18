import { CartItem } from '@/components/CartItem'

interface CartProps {
  setPlatineNumber: React.Dispatch<React.SetStateAction<number>>
  setLotsNumber: React.Dispatch<React.SetStateAction<number>>
  platineNumber: number
  lotsNumber: number
}

export const Cart = ({ setPlatineNumber, setLotsNumber, platineNumber, lotsNumber }: CartProps) => {
  return (
    <section className="flex flex-col gap-4 w-full" aria-labelledby="cart-items-title">
      <h2 id="cart-items-title" className="sr-only">
        Votre sélection
      </h2>
      <ul className="space-y-4">
        <li>
          <CartItem
            title="Nombre d’entrée"
            setItemNumber={setPlatineNumber}
            itemNumber={platineNumber}
          />
        </li>
        <li>
          <CartItem
            title="Nombre de lots nécessaire"
            isIcon
            setItemNumber={setLotsNumber}
            itemNumber={lotsNumber}
          />
        </li>
      </ul>
    </section>
  )
}
