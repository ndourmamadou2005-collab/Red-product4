import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Topbar />

        <h2>Bienvenue sur RED Product</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>

        <div className="cards">
          <div className="card purple">125<br />Formulaires</div>
          <div className="card green">40<br />Messages</div>
          <div className="card yellow">600<br />Utilisateurs</div>
          <div className="card red">25<br />E-mails</div>
          <div className="card violet">40<br />Hôtels</div>
          <div className="card blue">02<br />Entités</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard