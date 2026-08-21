const applications = [
  { id: 1, company: "Google", role: "Software Engineer", date: "2024-01-10", status: "Interview", url: "https://careers.google.com" },
  { id: 2, company: "Meta", role: "Frontend Developer", date: "2024-01-15", status: "Applied" , url: "https://careers.google.com"},
  { id: 3, company: "Netflix", role: "React Developer", date: "2024-01-20", status: "Rejected", url: "https://careers.google.com" },
]

function Applications() {
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
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{app.company}</td>
              <td className="px-6 py-4 font-medium">{app.role}</td>
              <td className="px-6 py-4 font-medium">{app.date}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Applications

