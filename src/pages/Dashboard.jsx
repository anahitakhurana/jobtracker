function Dashboard(){
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">5</h2>
          <p className="text-gray-500 mt-1">Total Applied</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">2</h2>
          <p className="text-gray-500 mt-1">Interviews</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">1</h2>
          <p className="text-gray-500 mt-1">Offers</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">2</h2>
          <p className="text-gray-500 mt-1">Rejected</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard