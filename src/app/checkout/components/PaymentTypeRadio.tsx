import { FC } from 'react'

import { FormikHelpers } from "formik"
import { FormValues } from "./CheckoutForm"

interface PaymentTypeRadioProps {
	values: FormValues
	setFieldValue: FormikHelpers<FormValues>['setFieldValue']
  value: string
  label: string
}

const PaymentTypeRadio: FC<PaymentTypeRadioProps> = ({
  values,
  setFieldValue,
  value,
  label
}) => (
  <div
    onClick={() => setFieldValue('paymentType', value)}
    className={`cursor-pointer w-full flex gap-2 justify-between items-center border-2 rounded-md border-red-500 px-4 py-2 ${values.paymentType == value ? 'bg-red-500/10' : 'hover:bg-red-300/10'}`}
  >
    <input
      type="radio"
      name="paymentType"
      checked={values.paymentType == value}
      className="w-6 h-6 cursor-pointer accent-red-600"
      onChange={() => setFieldValue('paymentType', value)}
    />

    <h1 className="text-lg font-bold text-red-600">{label}</h1>
  </div>
)

export default PaymentTypeRadio