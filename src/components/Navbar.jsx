import { Link } from "react-router-dom";

function Navbar() {
  return (
  <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
  <h1 className="text-xl font-bold">JobTracker</h1>
  <div className="flex gap-6">
    <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
    <Link to="/applications" className="hover:text-blue-400">Applications</Link>
    <Link to="/add" className="hover:text-blue-400">Add Application</Link>
  </div>
</nav>
)
}

export default Navbar

