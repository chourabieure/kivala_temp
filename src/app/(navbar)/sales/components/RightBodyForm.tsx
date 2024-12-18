const PlatinePrice = 1300
const PlatineSubscriptionPrice = 99.99
const LotSubscriptionPrice = 2.99

const TopRecap = ({ platineNumber }: { platineNumber: string }) => (
  <header className="flex h-[155px] overflow-hidden justify-start items-start gap-5">
    <figure className="flex h-[155px] px-[42.62px] pt-[20.44px] bg-blue-600/10 rounded-lg justify-center items-center">
      <img
        className="w-[98.77px] h-[179.93px] rounded-[10px]"
        src="https://via.placeholder.com/99x180"
        alt="Platine Kivala"
      />
      <figcaption className="sr-only">Platine Kivala</figcaption>
    </figure>
    <div className="flex flex-col h-[155px] justify-between items-start">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-white text-[22px] font-bold leading-relaxed">Platine Kivala®</h3>
        <p className="text-white text-base font-normal leading-tight">
          Une qualité et une durabilité optimale pour votre sécurité.
        </p>
      </div>
      <p className="text-right w-full text-[#89aaf5] text-[40px] font-bold leading-[48px]">
        x {platineNumber}
      </p>
    </div>
  </header>
)

const MiddleRecap = ({
  platineSubscriptionPrice,
  lotSubscriptionPrice,
  subscriptionPrice,
}: {
  platineSubscriptionPrice: string
  lotSubscriptionPrice: string
  subscriptionPrice: string
}) => (
  <section
    className="flex h-[71px] p-4 bg-white rounded-lg justify-start items-center gap-2.5"
    aria-labelledby="abonnement-title"
  >
    <div className="flex-grow flex h-[39px] justify-between items-center">
      <div className="flex flex-col justify-center items-start">
        <h4 id="abonnement-title" className="text-[#182244] text-[20px] font-bold leading-normal">
          Abonnement mensuel
        </h4>
        <p className="flex items-center text-[#182244]/60 text-base font-bold leading-tight">
          <span className="text-blue-600 text-[12px] leading-3">{platineSubscriptionPrice} €</span>{' '}
          / mois / platine
          <span className="px-2 text-[20px]">+</span>
          <span className="text-blue-600 text-[12px] leading-3">{lotSubscriptionPrice} €</span> /
          mois / lot
        </p>
      </div>
      <div className="text-blue-600 text-xl font-bold leading-normal">{subscriptionPrice} €</div>
    </div>
  </section>
)

const BodyRecap = ({
  platinePrice,
  subscriptionPrice,
}: {
  platinePrice: string
  subscriptionPrice: string
}) => (
  <section
    className="flex flex-col px-4 justify-start items-center gap-4"
    aria-labelledby="details-tarifs"
  >
    <h5 id="details-tarifs" className="sr-only">
      Détails des tarifs
    </h5>
    <dl className="w-full space-y-2">
      <div className="flex w-full justify-between items-center">
        <dt className="text-[#89aaf5] text-lg font-semibold leading-snug">Platines</dt>
        <dd className="text-white text-xl font-bold leading-tight">{platinePrice} €</dd>
      </div>
      <div className="flex w-full justify-between items-center">
        <dt className="text-[#89aaf5] text-lg font-semibold leading-snug">Abonnements</dt>
        <dd className="text-white text-xl font-bold leading-tight">{subscriptionPrice} €</dd>
      </div>
      <div className="flex w-full justify-between items-center">
        <dt className="text-[#89aaf5] text-lg font-semibold leading-snug">
          Livraison et installation
        </dt>
        <dd className="text-[#8ba6ef] text-xl font-bold leading-tight">Gratuit</dd>
      </div>
    </dl>
  </section>
)

const BottomRecap = ({ totalPrice }: { totalPrice: string }) => (
  <footer className="flex flex-col justify-between items-start">
    <dl className="flex w-full px-3 justify-between items-center">
      <dt className="text-white text-xl font-bold leading-normal">Total</dt>
      <dd className="text-[#8ba6ef] text-[32px] font-bold leading-loose">{totalPrice} €</dd>
    </dl>
  </footer>
)

interface RightBodyProps {
  platineNumber: number
  lotsNumber: number
  step: number
}

export const RightBodyForm = ({ platineNumber, lotsNumber, step }: RightBodyProps) => {
  const platinePrice = platineNumber * PlatinePrice
  const totalPrice = platineNumber * PlatinePrice + lotsNumber * LotSubscriptionPrice
  const subscriptionPrice = step === 0 ? '****' : totalPrice + platinePrice

  return (
    <aside
      className="flex flex-col p-4 gap-4 w-full h-full bg-[#192344] rounded-2xl"
      aria-labelledby="recap-title"
    >
      <TopRecap platineNumber={step === 0 ? '**' : platineNumber.toString()} />
      <MiddleRecap
        lotSubscriptionPrice={LotSubscriptionPrice.toString()}
        platineSubscriptionPrice={PlatineSubscriptionPrice.toString()}
        subscriptionPrice={step === 0 ? '****' : subscriptionPrice.toString()}
      />
      <BodyRecap
        platinePrice={step === 0 ? '****' : platinePrice.toString()}
        subscriptionPrice={step === 0 ? '****' : subscriptionPrice.toString()}
      />
      <BottomRecap totalPrice={step === 0 ? '****' : totalPrice.toString()} />
    </aside>
  )
}
