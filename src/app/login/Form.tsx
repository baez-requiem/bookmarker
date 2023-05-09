"use client"

import { Formik, Form } from 'formik'

interface FormValues {
    email: string
    password: string
}

const initialFormValues = {
    email: '',
    password: ''
}

const LoginForm = () => {

    const onSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log("Valores do formulário:", values)
        setSubmitting(false)
    }

    return (
        <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
            {({ values, handleChange }) => (
                <Form className="p-6 border rounded flex flex-col gap-6">
                    <h1 className="text-2xl font-bold tracking-tight text-red-600">Faça seu login</h1>

                    <input
                        required
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className="rounded p-2 border min-w-[300px] focus:outline-0"
                    />

                    <input
                        required
                        placeholder="Senha"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        className="rounded p-2 border min-w-[300px] focus:outline-0"
                    />

                    <span className="text-sm text-gray-600 hover:text-red-600 transition-all cursor-pointer">Esqueceu a senha?</span>

                    <button
                        type="submit"
                        className="text-white border bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all"
                    >
                        Entrar
                    </button>
                </Form>
            )}
        </Formik>
    )

}

export default LoginForm