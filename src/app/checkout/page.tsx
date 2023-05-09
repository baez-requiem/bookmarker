"use client"

import { Formik, Form } from 'formik'

import PlanBox from "./PlanBox"

// import { useCheckout } from './useCheckout'
import { BsArrowRightShort } from 'react-icons/bs'

interface FormValues {
  plan: string | number
}

const initialFormValues: FormValues = {
  plan: "",
}

const Checkout = () => {

  const onSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log("Valores do formulário:", values)
    setSubmitting(false)
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="p-6 border rounded flex flex-col gap-6 min-w-[320px]">  
              <h1 className="text-2xl font-bold tracking-tight text-red-600">Ola!</h1>
              <span>Selecione seu plano:</span>

              <PlanBox
                idPlan={1}
                totalMonths={12}
                valueText="12x de R$ 249,99 ou R$ 2.999,00"
                selected={values?.plan == 1}
                onChange={value => setFieldValue('plan', value)}
              />

              <PlanBox
                idPlan={2}
                totalMonths={1}
                valueText="R$ 300,00"
                selected={values?.plan == 2}
                onChange={value => setFieldValue('plan', value)}
              />

              <button
                type="button"
                className="flex items-center justify-center bg-red-600 rounded py-2 font-bold text-white transition-all hover:tracking-wide"
              >
                Próximo passo <BsArrowRightShort size={32} />
              </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
