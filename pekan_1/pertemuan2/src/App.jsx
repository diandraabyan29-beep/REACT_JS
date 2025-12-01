import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
                                         
export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <ProfileCard 
        name="Zahran"
        photo="https://via.placeholder.com/120"
        bio="Santri yang sedang belajar React."
        skills={["React", "HTML", "CSS"]}
      />

      <hr />

      <DiskonHarga />

      <hr />

      <StatusLogin isLogin={true} />
      <Notifikasi jumlahPesan={2} />

      <hr />

      <ListBuah dataBuah={["Apel", "Mangga", "Jeruk"]} />
    </div>
  );
}


// 1️⃣ Profile Card (Simple + Colorful)
function ProfileCard({ name, photo, bio, skills }) {
  return (
    <div style={{
      background: "#1162a9ff",
      padding: "16px",
      borderRadius: "12px",
      width: "260px"
    }}>
      <img 
        src={photo} 
        alt={name} 
        style={{ width: "120px", borderRadius: "50%", marginBottom: 10 }}
      />
      <h2 style={{ color: "#0066cc" }}>{name}</h2>
      <p>{bio}</p>

      <h4 style={{ color: "#ff6600" }}>Keahlian:</h4>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}


// 2️⃣ JavaScript Expressions (Sangat Simpel)
function DiskonHarga() {
  const harga = 50000;
  const diskon = 10;
  const final = harga - harga * diskon / 100;

  return (
    <div style={{ background: "#a07527ff", padding: 16, borderRadius: 10 }}>
      <h3 style={{ color: "#008000" }}>Harga Setelah Diskon</h3>
      <p>Harga awal: {harga}</p>
      <p>Diskon: {diskon}%</p>
      <h4 style={{ color: "#006600" }}>Total: {final}</h4>
    </div>
  );
}


// 3️⃣ Conditional Rendering
function StatusLogin({ isLogin }) {
  return (
    <h3 style={{ color: isLogin ? "green" : "red" }}>
      {isLogin ? "Sudah Login" : "Belum Login"}
    </h3>
  );
}

function Notifikasi({ jumlahPesan }) {
  return (
    <p style={{ color: "#a16325ff" }}>
      {jumlahPesan > 0 && `Kamu punya ${jumlahPesan} pesan baru!`}
    </p>
  );
}


// 4️⃣ List Sederhana
function ListBuah({ dataBuah }) {
  return (
    <div style={{ background: "#315aa5ff", padding: 12, borderRadius: 10 }}>
      <h3 style={{ color: "#cc0000" }}>Daftar Buah</h3>
      <ul>
        {dataBuah.map((buah, index) => (
          <li key={index}>{buah}</li>
        ))}
      </ul>
    </div>
  );
}
