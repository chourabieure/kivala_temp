import { Icon } from '../Icon'

interface CartItemProps {
  title: string
  isIcon?: boolean
  setItemNumber: React.Dispatch<React.SetStateAction<number>>
  itemNumber: number
}

export const CartItem = ({ title, isIcon, setItemNumber, itemNumber }: CartItemProps) => {
  return (
    <div
      className="h-[190px] p-8 bg-white rounded-lg border border-gray-200 flex flex-col justify-start items-start
        gap-8"
    >
      <div className="flex justify-start items-start gap-6">
        {isIcon ? (
          <Icon
            name="Building2"
            color="#FFFFFF"
            size={32}
            containerClassName={
              'w-[64px] h-[64px] rounded-lg bg-background-kivala-primary items-center justify-center flex'
            }
          />
        ) : (
          <img
            className="w-16 h-full rounded-lg"
            src="https://via.placeholder.com/64x126"
            alt="Placeholder Image"
          />
        )}
        <div className="flex-1 flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-[#182244] text-xl font-semibold leading-normal">{title}</h2>
            <p className="text-[#182244] opacity-60 text-base font-normal leading-tight">
              Plus vous installez de platines, plus votre abonnement devient avantageux !
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            {/* Left Circle */}
            <button
              disabled={itemNumber === 1}
              onClick={() => setItemNumber((prev) => prev - 1)}
              className={`w-8 h-8 bg-[#89aaf5] bg-opacity-${itemNumber === 1 ? '20' : '80'} rounded-full flex justify-center
                items-center`}
            ></button>
            {/* Number */}
            <p className="text-center text-blue-600 text-2xl font-semibold leading-7">
              {itemNumber}
            </p>
            {/* Right Circle */}
            <button
              onClick={() => setItemNumber((prev) => prev + 1)}
              className="w-8 h-8 bg-[#89aaf5] bg-opacity-80 rounded-full flex justify-center items-center"
            ></button>
          </div>
        </div>
      </div>
    </div>
  )
}
