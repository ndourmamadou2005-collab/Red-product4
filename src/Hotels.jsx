import { useState, useRef } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import hotelsData from "./Data"

function Hotels() {
  const [hotels, setHotels] = useState(hotelsData)
  const [showModal, setShowModal] = useState(false)
  const [newHotel, setNewHotel] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
  })

  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    setNewHotel({ ...newHotel, [e.target.name]: e.target.value })
  }

  const handleImageClick = () => {
    fileInputRef.current.click() // ouvre l’explorateur
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setNewHotel({ ...newHotel, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const addHotel = () => {
    if (!newHotel.name || !newHotel.location || !newHotel.price || !newHotel.image) {
      alert("Veuillez remplir tous les champs")
      return
    }
    setHotels([...hotels, { id: Date.now(), ...newHotel, price: Number(newHotel.price) }])
    setNewHotel({ name: "", location: "", price: "", image: "" })
    setShowModal(false)
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Topbar />

        <div className="hotels-header">
          <h2>Hôtels <span>{hotels.length}</span></h2>
          <button onClick={() => setShowModal(true)}>+ Créer un nouvel hôtel</button>
        </div>

        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
              <img
                src={hotel.image || "https://via.placeholder.com/200x120?text=Hôtel"}
                alt={hotel.name}
              />
              <p className="location">{hotel.location}</p>
              <h4>{hotel.name}</h4>
              <p className="price">{hotel.price} FCFA par nuit</p>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <h3>Ajouter un nouvel hôtel</h3>

              {/* Carré cliquable pour ajouter une photo */}
              <div className="image-upload-square" onClick={handleImageClick}>
                {newHotel.image ? (
                  <img src={newHotel.image} alt="Preview" />
                ) : (
                  <span>+ Choisir une photo</span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>

              <input
                type="text"
                name="name"
                placeholder="Nom de l'hôtel"
                value={newHotel.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Localisation"
                value={newHotel.location}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Prix (FCFA)"
                value={newHotel.price}
                onChange={handleChange}
              />

              <div className="modal-actions">
                <button onClick={addHotel}>Ajouter</button>
                <button onClick={() => setShowModal(false)}>Annuler</button>
              </div>
            </div>
          </div>
        )}

        <style>{`
          .hotel-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .hotel-card {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 10px;
            text-align: center;
          }
          .hotel-card img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
          }
          .location { color: gray; font-size: 0.9em; margin-bottom: 5px; }
          .price { font-weight: bold; color: #333; }

          /* MODAL */
          .modal-backdrop {
            position: fixed;
            top:0; left:0; width:100%; height:100%;
            background: rgba(0,0,0,0.5);
            display: flex; justify-content: center; align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }
          .modal-content input {
            width: 100%;
            padding: 8px 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }
          .modal-actions {
            display: flex; justify-content: space-between; width: 100%;
          }
          .modal-actions button {
            padding: 8px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
          .modal-actions button:first-child { background-color:#4caf50; color:#fff; }
          .modal-actions button:last-child { background-color:#f44336; color:#fff; }

          /* Carré cliquable pour upload */
          .image-upload-square {
            width: 200px;
            height: 200px;
            border: 2px dashed #ccc;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-bottom: 10px;
            overflow: hidden;
            position: relative;
            text-align: center;
            font-weight: bold;
            color: #999;
          }
          .image-upload-square img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Hotels