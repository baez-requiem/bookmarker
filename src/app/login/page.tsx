"use client"

import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <form className="p-6 border rounded flex flex-col gap-6">
        <h1 className="text-2xl font-bold tracking-tight">Faça seu login</h1>
        
        <input
          required
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          className="rounded p-2 border min-w-[300px] focus:outline-0"
        />
        
        <input
          required
          placeholder="Senha"
          name="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className="rounded p-2 border min-w-[300px] focus:outline-0"
        />
        
        <span className="text-sm text-gray-600 hover:text-sky-600 transition-all">Esqueceu a senha?</span>
        
        <button
          type="submit"
          className="text-white border bg-sky-800 hover:bg-sky-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login