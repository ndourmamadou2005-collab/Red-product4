import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>RED PRODUCT</h3>

      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/hotels" className="sidebar-link">Liste des hôtels</Link>
        </li>
      </ul>

      <div className="user">
        <p>MAMADOU NDOUR</p>
        <span>● en ligne</span>
      </div>

      {/* CSS uniquement pour les liens */}
      <style>{`
        .sidebar-link {
          text-decoration: none;
          color: #333;           /* couleur texte normale */
          font-weight: 600;       /* gras léger */
          font-size: 1.1em;       /* légèrement plus grand */
          padding: 8px 12px;
          border-radius: 6px;
          display: block;
          transition: all 0.3s ease;
        }

        .sidebar-link:hover {
          background-color: #4caf50; /* fond vert au survol */
          color: #fff;               /* texte blanc au survol */
        }

        .sidebar-link:active {
          background-color: #388e3c; /* fond vert plus foncé au clic */
          color: #fff;
        }
      `}</style>
    </div>
  )
}

export default Sidebar