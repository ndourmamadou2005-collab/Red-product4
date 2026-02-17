import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger visible sur mobile */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div>
          
        </div>
       <h3>PRODUIT ROUGE</h3>

        <ul>
          <li>
            <Link
              to="/dashboard"
              className="sidebar-link"
              onClick={() => setOpen(false)}
            >
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link
              to="/hotels"
              className="sidebar-link"
              onClick={() => setOpen(false)}
            >
              Liste des hôtels
            </Link>
          </li>
        </ul>

        <div className="user">
          <p>MAMADOU NDOUR</p>
          <span>● en ligne</span>
        </div>
      </div>

     {/* CSS */}
      <style>{`
  /* Sidebar */
  .sidebar {
    width: 220px;
    background-color: #0b0b0b;
    color: #f7f3f3;
    padding: 20px;
    min-height: 100vh;
    box-sizing: border-box;
    transition: transform 0.3s ease;
  }

  .sidebar h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar-link {
    display: block;
    color: #f6f1f1;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 10px;
    transition: background 0.3s ease;
  }

  .sidebar-link:hover {
    background-color: #4caf50;
  }

  .user {
    margin-top: 30px;
  }

  .user span {
    font-size: 0.8rem;
    color: #4caf50;
  }

  .hamburger {
    display: none;
    font-size: 1rem;
    background-color: #f5c868;
    border: none;
    color: #222;
    cursor: pointer;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1020; /* plus haut que la sidebar */
    padding: 3px 5px;
    border-radius: 6px;
  }

  /* =====================
     MOBILE / TABLETTE
  ===================== */
  @media (max-width: 768px) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 180px;
      transform: translateX(-100%);
      z-index: 1000;
      padding-top: 70px; /* 🔥 espace pour éviter chevauchement */
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .hamburger {
      display: block;
    }

    .sidebar h3 {
      font-size: 1rem;
    }

    .sidebar-link {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      width: 150px;
    }

    .sidebar-link {
      font-size: 0.85rem;
    }

    .user p,
    .user span {
      font-size: 0.75rem;
    }
  }
`}</style>
    </>
  );
}

export default Sidebar;
