import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    console.log("CLICK OK") // 👈 test
    console.log(email, password)

    if (email !== "" && password !== "") {
      localStorage.setItem("auth", "true")
      navigate("/dashboard")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>RED PRODUCT</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  )
}

export default Login