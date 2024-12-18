import { CustomInput } from '@/components/CustomInput/CustomInput'
import { Form, FormControl, FormMessage } from '@/components/ui/form'
import { FormItem } from '@/components/ui/form'
import { FormField } from '@/components/ui/form'
import { Cart } from './Cart'
import { useSubmit } from '../hooks/useSubmit'
import { PaymentElement } from '@stripe/react-stripe-js'

interface RightBodyProps {
  setPlatineNumber: React.Dispatch<React.SetStateAction<number>>
  setLotsNumber: React.Dispatch<React.SetStateAction<number>>
  platineNumber: number
  lotsNumber: number
  step: number
}

export const LeftBodyForm = ({
  setPlatineNumber,
  setLotsNumber,
  platineNumber,
  lotsNumber,
  step,
}: RightBodyProps) => {
  const { isLoading, onSubmit, form } = useSubmit()
  if (step === 1) {
    return (
      <Cart
        setPlatineNumber={setPlatineNumber}
        setLotsNumber={setLotsNumber}
        platineNumber={platineNumber}
        lotsNumber={lotsNumber}
      />
    )
  }
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 w-full">
      <div className="flex-1 space-y-4 mb-8 lg:mb-0">
        <Form {...form}>
          <form className="flex flex-col flex-1 gap-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <CustomInput
                      disabled={isLoading}
                      label="Nom d'entreprise"
                      required
                      placeholder="e.g. SyndicAso"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <CustomInput
                      disabled={isLoading}
                      label="Nom de famille"
                      required
                      placeholder="e.g. DUPONT"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <CustomInput
                      disabled={isLoading}
                      label="Email"
                      required
                      placeholder="e.g. jerome@kivala.fr"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <CustomInput
                      disabled={isLoading}
                      label="Numéro de téléphone"
                      required
                      placeholder="e.g. 6 00 00 00 00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="zipcode"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <CustomInput
                        disabled={isLoading}
                        label="Code postal"
                        required
                        placeholder="e.g. 75000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <CustomInput
                        disabled={isLoading}
                        label="Ville"
                        required
                        placeholder="e.g. Paris"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
