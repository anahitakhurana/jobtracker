import { useState } from "react"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else navigate("/applications")
  }
    return (
    <div className="p-8 max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">Log In</h1>
      <form onSubmit={handleLogin} className="bg-white shadow rounded-lg p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-gray-900 text-white py-2 rounded hover:bg-gray-700 font-medium">Log In</button>
      </form>
      <p className="text-center text-gray-500 text-sm">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
    </div>
  )
}
export default Login