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

async function handleDelete(id) {
  const { error } = await supabase.from("applications").delete().eq("id", id)
  if (error) console.error(error)
  else setApplications(applications.filter(app => app.id !== id))
}

const [editingId, setEditingId] = useState(null)
const [editData, setEditData] = useState({})

async function handleEdit(id) {
  const { error } = await supabase.from("applications").update(editData).eq("id", id)
  if (error) console.error(error)
  else {
    setApplications(applications.map(app => app.id === id ? { ...app, ...editData } : app))
    setEditingId(null)
  }
}
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
            <th className="text-left px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
        {applications.map(app => (
        <tr key={app.id} className="border-b hover:bg-gray-50">
        {editingId === app.id ? (
      <>
        <td className="px-6 py-4"><input defaultValue={app.company} onChange={e => setEditData({...editData, company: e.target.value})} className="border rounded px-2 py-1" /></td>
        <td className="px-6 py-4"><input defaultValue={app.role} onChange={e => setEditData({...editData, role: e.target.value})} className="border rounded px-2 py-1" /></td>
        <td className="px-6 py-4"><input type="date" defaultValue={app.date_applied} onChange={e => setEditData({...editData, date_applied: e.target.value})} className="border rounded px-2 py-1" /></td>
        <td className="px-6 py-4">
          <select defaultValue={app.status} onChange={e => setEditData({...editData, status: e.target.value})} className="border rounded px-2 py-1">
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </td>
        <td className="px-6 py-4"><input defaultValue={app.url} onChange={e => setEditData({...editData, url: e.target.value})} className="border rounded px-2 py-1" /></td>
        <td className="px-6 py-4"><input defaultValue={app.notes} onChange={e => setEditData({...editData, notes: e.target.value})} className="border rounded px-2 py-1" /></td>
        <td className="px-6 py-4 flex gap-2">
          <button onClick={() => handleEdit(app.id)} className="text-green-500 hover:text-green-700 font-medium">Save</button>
          <button onClick={() => setEditingId(null)} className="text-gray-500 hover:text-gray-700 font-medium">Cancel</button>
        </td>
      </>
    ) : (
      <>
        <td className="px-6 py-4 font-medium">{app.company}</td>
        <td className="px-6 py-4 text-gray-600">{app.role}</td>
        <td className="px-6 py-4 text-gray-600">{app.date_applied}</td>
        <td className="px-6 py-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            app.status === "Interview" ? "bg-blue-100 text-blue-700" :
            app.status === "Applied" ? "bg-yellow-100 text-yellow-700" :
            app.status === "Offer" ? "bg-green-100 text-green-700" :
            "bg-red-100 text-red-700"
          }`}>{app.status}</span>
        </td>
        <td className="px-6 py-4"><a href={app.url} className="text-blue-500 hover:underline">Link</a></td>
        <td className="px-6 py-4 text-gray-600">{app.notes}</td>
        <td className="px-6 py-4 flex gap-2">
          <button onClick={() => { setEditingId(app.id); setEditData(app) }} className="text-blue-500 hover:text-blue-700 font-medium">Edit</button>
          <button onClick={() => handleDelete(app.id)} className="text-red-500 hover:text-red-700 font-medium">Delete</button>
        </td>
      </>
    )}
  </tr>
))}
        </tbody>
      </table>
    </div>
  )
}

export default Applications

