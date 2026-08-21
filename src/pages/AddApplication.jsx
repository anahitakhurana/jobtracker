
function AddApplication() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Application</h1>
      <form className="bg-white shadow rounded-lg p-6 flex flex-col gap-4">
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700">Company</label>
        <input type="text" placeholder="e.g Google" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  </div>
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700">Role</label>
        <input type="text" placeholder="e.g SWE" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  </div>
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700">Date Applied</label>
        <input type="date" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  </div>
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700">Status</label>
        <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
        </select>
  </div>
  <div className="flex flex-col gap-1">
    <label className="font-medium text-gray-700">URL Link</label>
      <input type="text" placeholder="e.g. https://jobs.google.com/..." className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
   <button type="submit" className="bg-gray-900 text-white py-2 rounded hover:bg-gray-700 font-medium mt-2">Add Application</button>
  </form>
  </div>
  )
}


export default AddApplication