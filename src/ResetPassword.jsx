import { useNavigate } from "react-router-dom"
import "./Login.css"

function ResetPassword() {
  const navigate = useNavigate()

  const handleReset = (e) => {
    e.preventDefault()
    alert("Lien de réinitialisation envoyé !")
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <h3>Réinitialiser le mot de passe</h3>

        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Entrez votre e-mail"
            className="input-field"
            required
          />

          <button type="submit" className="login-btn">
            Envoyer
          </button>
        </form>

        {/* 🔹 Bouton retour placé en bas */}
        <button
          className="back-login-btn-bottom"
          onClick={() => navigate("/")}
        >
          Se connecter
        </button>

      </div>
    </div>
  )
}

export default ResetPassword
