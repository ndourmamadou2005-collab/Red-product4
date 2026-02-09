

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

      <style>{`
        .sidebar-link {
          text-decoration: none;
          color: white;      /* texte blanc */
          font-weight: 600;
          font-size: 1.1em;
          padding: 8px 12px;
          border-radius: 6px;
          display: block;
          transition: all 0.3s ease;
        }

        .sidebar-link:hover {
          background-color: #4caf50;
          color: white;
        }

        .sidebar-link:active {
          background-color: #388e3c;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Sidebar
