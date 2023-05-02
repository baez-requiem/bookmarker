"use client"
1
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="h-screen flex justify-center items-center bg-slate-900">
      <form className="p-6 bg-gray-950/70 rounded flex flex-col gap-6">
        <h1 className="text-2xl text-center text-white tracking-wider">Bookmarker</h1>
        <input
          required
          name="email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          className="rounded p-2 bg-slate-800/70 min-w-[300px] focus:outline-0 text-white"
        />
        <input
          required
          name="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          className="rounded p-2 bg-slate-800/70 min-w-[300px] focus:outline-0 text-white"
        />
        <button
          type="submit"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all">
            Sign in
          </button>
      </form>
    </div>
  )
}

export default Login