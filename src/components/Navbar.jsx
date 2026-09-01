import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../supabase"

function Navbar() {
  const navigate = useNavigate()

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate("/login")
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">JobTracker</h1>
      <div className="flex gap-6 items-center">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/applications" className="hover:text-blue-400">Applications</Link>
        <Link to="/add" className="hover:text-blue-400">Add Application</Link>
        <Link to="/tailor" className="hover:text-blue-400">AI Tailor</Link>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">Log Out</button>
      </div>
    </nav>
  )
}

export default Navbar
