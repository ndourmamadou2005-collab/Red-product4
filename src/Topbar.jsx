import { useNavigate } from "react-router-dom";
import "./Topbar.css";
function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ici tu peux aussi supprimer le token si tu en utilises
    // localStorage.removeItem("token");

    navigate("/"); // Redirige vers la page Se connecter
  };

  return (
    <div className="topbar">
      <input type="text" placeholder="Recherche..." />

      <div className="icons">
        🔔 👤
        <button className="logout-btn" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
  
}


export default Topbar;
