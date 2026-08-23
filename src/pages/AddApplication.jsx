import { useState } from "react"
import { supabase } from "../supabase"

function AddApplication() {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    date_applied: "",
    status: "Applied",
    url: "",
    notes: ""
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await supabase.from("applications").insert([formData])
    if (error) console.error(error)
    else alert("Application added!")
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Application</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Company</label>
          <input name="company" type="text" placeholder="e.g. Google" onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Role</label>
          <input name="role" type="text" placeholder="e.g. Software Engineer" onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Date Applied</label>
          <input name="date_applied" type="date" onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Status</label>
          <select name="status" onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Job URL</label>
          <input name="url" type="text" placeholder="e.g. https://jobs.google.com/..." onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700">Notes</label>
          <textarea name="notes" placeholder="Any notes..." onChange={handleChange} className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-gray-900 text-white py-2 rounded hover:bg-gray-700 font-medium mt-2">
          Add Application
        </button>
      </form>
    </div>
  )
}

export default AddApplication