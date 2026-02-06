import { useState } from "react"

function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, remember })
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>RED PRODUCT</h2>
        <p className="subtitle">Connectez-vous en tant que Admin</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <span>Gardez-moi connecté</span>
          </div>

          <button type="submit">Se connecter</button>
        </form>

        <a href="#" className="forgot">Mot de passe oublié ?</a>

        <p className="register">
          Vous n’avez pas de compte ? <span>S’inscrire</span>
        </p>
      </div>
    </div>
  )
}

export default Auth