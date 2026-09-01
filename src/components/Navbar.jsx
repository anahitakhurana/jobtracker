import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../supabase"

function Navbar() {
  const navigate = useNavigate()

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate("/login")
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl font-extrabold text-blue-600">JobTracker</span>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium text-sm">Dashboard</Link>
        <Link to="/applications" className="text-gray-600 hover:text-blue-600 font-medium text-sm">Applications</Link>
        <Link to="/add" className="text-gray-600 hover:text-blue-600 font-medium text-sm">Add Job</Link>
        <Link to="/tailor" className="text-gray-600 hover:text-blue-600 font-medium text-sm">AI Tailor</Link>
        <button onClick={handleLogout} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Log Out</button>
      </div>
    </nav>
  )
}

export default Navbar
