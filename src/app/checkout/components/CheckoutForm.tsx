"use client"

import { useState } from 'react'

import { Formik, Form } from 'formik'

import { PlanStep, PersonalDataStep, PaymentStep } from './'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

export interface FormValues {
	plan: string | number
	name: string
	lastname: string
	email: string
	cpf: string
	phone: string
	paymentType: string
}

const initialFormValues: FormValues = {
	plan: "",
	cpf: "",
	email: "",
	lastname: "",
	name: "",
	phone: '',
	paymentType: 'pix'
}

const CheckoutForm = () => {

	const [step, setStep] = useState<number>(1)

	const onSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		console.log("Valores do formulário:", values)
		setSubmitting(false)
	}

	const nextStep = (values: FormValues) => {
		console.log(step, values)

		if (step === 1) {
			values.plan && setStep(2)
		}

		if (step === 2) {
			values.plan && values.cpf && values.email && values.lastname && values.name && values.phone && setStep(3)
		}
	}

	return (
		<Formik initialValues={initialFormValues} onSubmit={onSubmit}>
			{({ values, setFieldValue, handleChange }) => (
				<Form className="p-6 border rounded flex flex-col gap-6 sm:min-w-[320px] md:min-w-[480px]">
					<PlanStep
						step={step}
						values={values}
						setFieldValue={setFieldValue}
					/>

					<PersonalDataStep
						step={step}
						values={values}
						handleChange={handleChange}
					/>

					<PaymentStep
						step={step}
						values={values}
						setFieldValue={setFieldValue}
					/>

					<div className='flex gap-6'>

						{step > 1 ? (
							<button
								type="button"
								onClick={() => setStep(v => v-1)}
								className="flex items-center w-6/12 justify-center border border-red-600 rounded py-2 font-bold text-red-600 transition-all hover:tracking-wide hover:bg-red-500/10"
							>
								<BsArrowLeftShort size={32} /> Voltar
							</button>
						) : null}


						<button
							type="button"
							onClick={() => nextStep(values)}
							className="flex items-center w-6/12 justify-center bg-red-600 rounded py-2 font-bold text-white transition-all hover:tracking-wide"
						>
							{step == 3 ? (
								<>Concluir</>
							): (
								<>Próximo passo <BsArrowRightShort size={32} /></>
							)}
						</button>
					</div>

				</Form>
			)}
		</Formik>
	)
}

export default CheckoutForm
