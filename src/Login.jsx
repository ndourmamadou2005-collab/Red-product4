import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import "./Login.css"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem("auth", "true")
    navigate("/dashboard")
  }

  return (
    <div className="login-container">

      <div className="logo">
        <div className="logo-icon"></div>
        <h1>RED PRODUCT</h1>
      </div>

      <div className="login-card">
        <p className="login-title">
          Connectez-vous en tant que Admin
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />

          <div className="remember-section">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label>Gardez-moi connecté</label>
          </div>

          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
      </div>

      <Link to="/reset-password" className="forgot-password">
        Mot de passe oublié ?
      </Link>

      <p className="signup-text">
        Vous n'avez pas de compte ?{" "}
        <Link to="/register" className="signup-link">
          S'inscrire
        </Link>
      </p>

    </div>
  )
}

export default Login
