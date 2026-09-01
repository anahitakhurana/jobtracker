import { useState, useEffect } from "react"
import { supabase } from "../supabase"
import { Link } from "react-router-dom"

function Dashboard() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    async function fetchApplications() {
      const { data: { user } } = await supabase.auth.getUser()
      const { data, error } = await supabase.from("applications").select("*").eq("user_id", user.id)
      if (error) console.error(error)
      else setApplications(data)
    }
    fetchApplications()
  }, [])

  const total = applications.length
  const interviews = applications.filter(app => app.status === "Interview").length
  const offers = applications.filter(app => app.status === "Offer").length
  const rejected = applications.filter(app => app.status === "Rejected").length
  const responseRate = total > 0 ? Math.round((interviews + offers) / total * 100) : 0

  const stats = [
    { label: "Total Applied", value: total, color: "text-gray-900", bg: "bg-white" },
    { label: "Interviews", value: interviews, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Offers", value: offers, color: "text-green-600", bg: "bg-green-50" },
    { label: "Rejected", value: rejected, color: "text-red-500", bg: "bg-red-50" },
  ]

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Track your job search progress</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map(stat => (
          <div key={stat.label} className={`${stat.bg} rounded-xl p-6 shadow-sm border border-gray-100`}>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <h2 className={`text-4xl font-bold mt-1 ${stat.color}`}>{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <p className="text-sm text-gray-500 font-medium">Response Rate</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex-1 bg-gray-100 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${responseRate}%` }} />
          </div>
          <span className="text-lg font-bold text-gray-900">{responseRate}%</span>
        </div>
      </div>

      <Link to="/add" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
        + Add New Application
      </Link>
    </div>
  )
}

export default Dashboard