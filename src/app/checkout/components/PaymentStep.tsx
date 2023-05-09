import { FC } from "react"
import { FormValues } from "./CheckoutForm"
import { FormikHelpers } from "formik"
import PaymentTypeRadio from "./PaymentTypeRadio"

interface PaymentStepProps {
  step: number
  values: FormValues
  setFieldValue: FormikHelpers<FormValues>['setFieldValue']
}

const PaymentStep: FC<PaymentStepProps> = ({
  step,
  values,
  setFieldValue
}) => {

  return (
    <div className={`flex-col gap-6 ${step == 3 ? 'flex' : 'hidden'}`}>
      <h1 className="text-2xl font-bold tracking-tight text-red-600">Forma de pagamento</h1>

      <span>Selecione a forma de pagamento:</span>

      <div className="flex gap-6">
        <PaymentTypeRadio label="Boleto" value="boleto" setFieldValue={setFieldValue} values={values} />
        <PaymentTypeRadio label="Cartão" value="credit-card" setFieldValue={setFieldValue} values={values} />
        <PaymentTypeRadio label="Pix" value="pix" setFieldValue={setFieldValue} values={values} />
      </div>

      {values.paymentType === 'credit-card' ? (
        <>
          <input
            required
            placeholder="Número do cartão"
            name="cardNumber"
            type="text"
            value={''}
            onChange={() => { }}
            className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
          />

          <input
            required
            placeholder="Nome (igual ao impresso no cartão)"
            name="cardName"
            type="text"
            value={''}
            onChange={() => { }}
            className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
          />

          <div className="flex gap-6">
            <input
              required
              placeholder="Data de validade"
              name="valid"
              type="text"
              value={''}
              onChange={() => { }}
              className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
            />

            <input
              required
              placeholder="Código de segurança"
              name="cvv"
              type="text"
              value={''}
              onChange={() => { }}
              className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
            />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default PaymentStep