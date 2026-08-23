import { useState } from "react"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleSignUp(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else {
      alert("Account created! Please check your email to confirm.")
      navigate("/login")
    }
  }

  return (
    <div className="p-8 max-w-sm mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSignUp} className="bg-white shadow rounded-lg p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-gray-900 text-white py-2 rounded hover:bg-gray-700 font-medium">Sign Up</button>
      </form>
      <p className="text-center text-gray-500 text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link></p>
    </div>
  )
}

export default SignUp