import { useState, useRef } from "react"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import hotelsData from "./data"

// ─── Modal Créer un hôtel ───────────────────────────────────────────────────
function CreateHotelModal({ onClose, onSave }) {
  const [newHotel, setNewHotel] = useState({
    name: "", location: "", email: "", phone: "", price: "", currency: "F XOF", image: "",
  })
  const fileInputRef = useRef(null)

  const handleChange = (e) => setNewHotel({ ...newHotel, [e.target.name]: e.target.value })

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setNewHotel((prev) => ({ ...prev, image: reader.result }))
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    if (!newHotel.name || !newHotel.location || !newHotel.price) {
      alert("Veuillez remplir les champs obligatoires")
      return
    }
    onSave({ id: Date.now(), ...newHotel, price: Number(newHotel.price) })
    onClose()
  }

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)",
      display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
    }}>
      <div style={{
        background: "#fff", borderRadius: 14,
        width: 620, maxWidth: "95vw", maxHeight: "90vh",
        overflowY: "auto", padding: "28px 32px",
        boxShadow: "0 16px 60px rgba(0,0,0,0.22)",
      }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={onClose} style={{
            background: "none", border: "none", fontSize: "1.1rem",
            cursor: "pointer", color: "#333", padding: 0, lineHeight: 1,
          }}>←</button>
          <h3 style={{
            margin: 0, fontSize: "0.9rem", fontWeight: 700,
            letterSpacing: "0.07em", textTransform: "uppercase", color: "#111",
          }}>
            Créer un nouveau hôtel
          </h3>
        </div>
        <hr style={{ border: "none", borderTop: "1px solid #ebebeb", margin: "0 0 22px" }} />

        {/* Grille 2 colonnes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
          {[
            { label: "Nom de l'hôtel",     name: "name",     type: "text",   placeholder: "CAP Marniane" },
            { label: "Adresse",             name: "location", type: "text",   placeholder: "Les îles du saloum, Mar Lodj" },
            { label: "E-mail",              name: "email",    type: "email",  placeholder: "information@gmail.com" },
            { label: "Numéro de téléphone", name: "phone",    type: "text",   placeholder: "+221 77 777 77 77" },
            { label: "Prix par nuit",       name: "price",    type: "number", placeholder: "25 000 XOF" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <label style={{ fontSize: "0.8rem", color: "#444", fontWeight: 500 }}>{label}</label>
              <input
                type={type} name={name} placeholder={placeholder}
                value={newHotel[name]} onChange={handleChange}
                style={{
                  padding: "9px 12px", border: "1px solid #d4d4d4",
                  borderRadius: 7, fontSize: "0.88rem", color: "#222", outline: "none",
                }}
                onFocus={e => e.target.style.borderColor = "#888"}
                onBlur={e  => e.target.style.borderColor = "#d4d4d4"}
              />
            </div>
          ))}

          {/* Devise */}
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <label style={{ fontSize: "0.8rem", color: "#444", fontWeight: 500 }}>Devise</label>
            <select name="currency" value={newHotel.currency} onChange={handleChange}
              style={{
                padding: "9px 12px", border: "1px solid #d4d4d4",
                borderRadius: 7, fontSize: "0.88rem", color: "#222",
                background: "#fff", cursor: "pointer", outline: "none",
              }}>
              <option value="F XOF">F XOF</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        {/* Zone photo */}
        <div style={{ marginTop: 18 }}>
          <label style={{ fontSize: "0.8rem", color: "#444", fontWeight: 500, display: "block", marginBottom: 6 }}>
            Ajouter une photo
          </label>
          <div
            onClick={() => fileInputRef.current.click()}
            style={{
              width: "100%", height: 165, border: "1px solid #d4d4d4", borderRadius: 8,
              display: "flex", justifyContent: "center", alignItems: "center",
              cursor: "pointer", overflow: "hidden", background: "#fafafa",
            }}
          >
            {newHotel.image ? (
              <img src={newHotel.image} alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "#bbb" }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span style={{ fontSize: "0.85rem" }}>Ajouter une photo</span>
              </div>
            )}
            <input type="file" accept="image/*" ref={fileInputRef}
              style={{ display: "none" }} onChange={handleImageUpload} />
          </div>
        </div>

        {/* Bouton Enregistrer */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 22 }}>
          <button
            onClick={handleSave}
            style={{
              background: "#1a1a1a", color: "#fff", border: "none",
              padding: "11px 30px", borderRadius: 8,
              fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#333"}
            onMouseLeave={e => e.currentTarget.style.background = "#1a1a1a"}
          >
            Enregistrer
          </button>
        </div>

      </div>
    </div>
  )
}

// ─── Page Hotels ────────────────────────────────────────────────────────────
function Hotels() {
  const [hotels, setHotels] = useState(hotelsData)
  const [showModal, setShowModal] = useState(false)

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
          <CreateHotelModal
            onClose={() => setShowModal(false)}
            onSave={(hotel) => setHotels([...hotels, hotel])}
          />
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
            border: 1px solid #ddd;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hotel-card img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
          }
          .hotel-card:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
          .hotel-card:hover .hotel-img {
            filter: brightness(90%);
            transition: filter 0.3s ease;
          }
          .location { color: gray; font-size: 0.9em; margin-bottom: 5px; }
          .price { font-weight: bold; color: #333; }
        `}</style>
      </div>
    </div>
  )
}

export default Hotels