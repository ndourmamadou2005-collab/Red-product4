import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>RED PRODUCT</h3>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/hotels">Liste des hôtels</Link>
        </li>
      </ul>

      <div className="user">
        <p>Mamadou ndour</p>
        <span>● en ligne</span>
      </div>
    </div>
  )
}

export default Sidebar