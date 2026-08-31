import { useState, useEffect } from "react"
import { supabase } from "../supabase"
function Dashboard(){
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    async function fetchApplications() {
        const { data: { user } } = await supabase.auth.getUser()
        const { data, error } = await supabase.from("applications").select("*").eq("user_id", user.id)
        if (error) console.error(error)
        else setApplications(data)
        setLoading(false)
    }
    fetchApplications()
    }, [])
    const interviewCount = applications.filter(app => app.status === "Interview").length
    const offerCount = applications.filter(app => app.status === "Offer").length
    const rejectedCount = applications.filter(app => app.status === "Rejected").length
    const applicationCount = applications.length

    
    if (loading) return <div className="p-8 text-gray-500">Loading...</div>
   
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">{applicationCount}</h2>
          <p className="text-gray-500 mt-1">Total Applied</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">{interviewCount}</h2>
          <p className="text-gray-500 mt-1">Interviews</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">{offerCount}</h2>
          <p className="text-gray-500 mt-1">Offers</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">{rejectedCount}</h2>
          <p className="text-gray-500 mt-1">Rejected</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard