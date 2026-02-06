import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
  const navigate = useNavigate()
 
  
  const handleLogin = (e) => {
    e.preventDefault()

    console.log("CLICK OK") // 👈 test
   
     {
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
           
          />
          <input
            
            
           
           
          />

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  )
}

export default Login