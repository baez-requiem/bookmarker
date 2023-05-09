import { FC } from "react";
import PlanBox from "../PlanBox";

import { FormValues } from './CheckoutForm'
import { FormikHelpers } from "formik";

interface PlanStepProps {
	step: number
	values: FormValues
	setFieldValue: FormikHelpers<FormValues>['setFieldValue']
}

const PlanStep: FC<PlanStepProps> = ({
	step,
	values,
	setFieldValue
}) => (
	<div className={`flex-col gap-6 ${step == 1 ? 'flex' : 'hidden'}`}>
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
	</div>
)

export default PlanStep