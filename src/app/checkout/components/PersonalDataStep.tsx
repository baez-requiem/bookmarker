import { FC } from "react";
import { FormValues } from "./CheckoutForm";
import { FormikHandlers } from "formik";

interface PersonalDataStepProps {
	step: number
	values: FormValues
	handleChange: FormikHandlers['handleChange']
}

const PersonalDataStep: FC<PersonalDataStepProps> = ({
	step,
	values,
	handleChange
}) => (
	<div className={`flex-col gap-6 ${step == 2 ? 'flex' : 'hidden'}`}>
		<h1 className="text-2xl font-bold tracking-tight text-red-600">Dados pessoais</h1>

		<span>Preencha os campos:</span>

		<div className='flex gap-6'>
			<input
				required
				placeholder="Nome"
				name="name"
				type="text"
				value={values.name}
				onChange={handleChange}
				className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
			/>

			<input
				required
				placeholder="Sobrenome"
				name="lastname"
				type="text"
				value={values.lastname}
				onChange={handleChange}
				className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
			/>
		</div>

		<input
			required
			placeholder="Email"
			name="email"
			type="email"
			value={values.email}
			onChange={handleChange}
			className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
		/>

		<input
			required
			placeholder="CPF"
			name="cpf"
			type="text"
			value={values.cpf}
			onChange={handleChange}
			className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
		/>

		<input
			required
			placeholder="Telefone"
			name="phone"
			type="text"
			value={values.phone}
			onChange={handleChange}
			className="rounded p-2 border min-w-[300px] focus:outline-2 focus:outline-gray-600"
		/>
	</div>
)

export default PersonalDataStep