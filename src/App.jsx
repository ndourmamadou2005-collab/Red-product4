import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Hotels from "./Hotels"

function App() {
  const isAuth = localStorage.getItem("auth")

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      

      <Route
        path="/dashboard"
        element={isAuth ? <Dashboard /> : <Navigate to="/" />}
      />

      <Route
        path="/hotels"
        element={isAuth ? <Hotels /> : <Navigate to="/" />}
      />
    </Routes>
  )
}

export default App