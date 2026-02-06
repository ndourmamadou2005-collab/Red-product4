import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import hotels from "./Data"

function Hotels() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="hotels-header">
          <h2>Hôtels <span>8</span></h2>
          <button>+ Créer un nouveau hôtel</button>
        </div>

        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
              <img src={hotel.image} alt={hotel.name} />
              <p className="location">{hotel.location}</p>
              <h4>{hotel.name}</h4>
              <p className="price">{hotel.price} FCFA par nuit</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hotels