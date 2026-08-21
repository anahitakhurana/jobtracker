import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Applications from "./pages/Applications"
import AddApplication from "./pages/AddApplication"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/add" element={<AddApplication />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App