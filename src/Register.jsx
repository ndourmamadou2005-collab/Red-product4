import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Login.css"

function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()
    alert("Compte créé avec succès !")
    navigate("/")
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h3>Créer un compte</h3>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="E-mail"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
