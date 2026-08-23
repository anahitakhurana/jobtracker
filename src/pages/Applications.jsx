import { useEffect, useState } from "react"
import { supabase } from "../supabase"

function Applications() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    async function fetchApplications() {
      const { data: { user } } = await supabase.auth.getUser()
const { data, error } = await supabase.from("applications").select("*").eq("user_id", user.id)
    console.log("data:", data)
    console.log("error:", error)
      if (error) console.error(error)
      else setApplications(data)
    }
    fetchApplications()
  }, [])


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>
      <table className="w-full border-solid bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="text-left px-6 py-3">Company</th>
            <th className="text-left px-6 py-3">Role</th>
            <th className="text-left px-6 py-3">Date Applied</th>
            <th className="text-left px-6 py-3">Status</th>
            <th className="text-left px-6 py-3">URL</th>
            <th className="text-left px-6 py-3">Notes</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{app.company}</td>
              <td className="px-6 py-4 font-medium">{app.role}</td>
              <td className="px-6 py-4 font-medium">{app.date_applied}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  app.status === "Interview" ? "bg-blue-100 text-blue-700" :
                  app.status === "Applied" ? "bg-yellow-100 text-yellow-700" :
                  app.status === "Offer" ? "bg-green-100 text-green-700" :
                  "bg-red-100 text-red-700"
                }`}>{app.status}</span>
              </td>
              <td className="px-6 py-4">
                <a href={app.url} className="text-blue-500 hover:underline">{app.url}</a>
              </td>
              <td className="px-6 py-4 font-medium">{app.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Applications

