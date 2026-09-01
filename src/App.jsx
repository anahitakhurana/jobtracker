import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Applications from "./pages/Applications"
import AddApplication from "./pages/AddApplication"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import ProtectedRoute from "./components/ProtectedRoute"
import ResumeTailor from "./pages/ResumeTailor"


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/tailor" element={<ProtectedRoute><ResumeTailor /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/applications" element={<ProtectedRoute><Applications /></ProtectedRoute>} />
      <Route path="/add" element={<ProtectedRoute><AddApplication /></ProtectedRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App