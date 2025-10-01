// app/page.js
"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("animal_user");
    if (user) setLoggedIn(true); // өмнө нь login хийсэн бол шууд Home
    setChecking(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    localStorage.setItem("animal_user", JSON.stringify({ name, email }));
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("animal_user");
    setLoggedIn(false);
    setName(""); setEmail(""); setPassword("");
  };

  if (checking) return null; // localStorage шалгах зуур ямар ч зүйл гаргахгүй

  if (!loggedIn) {
    // 🔹 Анхны login form
    return (
      <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#f0f2f5" }}>
        <form onSubmit={handleLogin} style={{ maxWidth:400, width:"100%", background:"white", padding:24, borderRadius:12, boxShadow:"0 6px 18px rgba(0,0,0,0.12)" }}>
          <h2 style={{ textAlign:"center", marginBottom:20 }}>Login</h2>
          <label>Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" style={{ width:"100%", padding:10, margin:"6px 0 12px", borderRadius:8, border:"1px solid #ccc" }} />
          <label>Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" style={{ width:"100%", padding:10, margin:"6px 0 12px", borderRadius:8, border:"1px solid #ccc" }} />
          <label>Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" style={{ width:"100%", padding:10, margin:"6px 0 18px", borderRadius:8, border:"1px solid #ccc" }} />
          <button type="submit" style={{ width:"100%", padding:12, background:"#1E90FF", color:"white", border:"none", borderRadius:8, fontWeight:"bold", cursor:"pointer" }}>Login</button>
        </form>
      </div>
    );
  }

  // 🔹 Login хийсний дараа Home page + Header
  return (
    <div>
      {/* Header */}
      <nav className="navbar" style={{ background:"#4CAF50", padding:"15px 0" }}>
        <div className="nav-container" style={{ maxWidth:1000, margin:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 15px" }}>
          <span className="logo" style={{ color:"white", fontWeight:"bold" }}>Animal World</span>
          <div className="nav-links">
            <a href="/" style={{ color:"white", marginRight:10 }}>Home</a>
            <a href="/animals" style={{ color:"white", marginRight:10 }}>Animals</a>
            <button onClick={handleLogout} style={{ background:"#1E90FF", color:"white", border:"none", borderRadius:6, padding:"6px 12px", cursor:"pointer" }}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Home content */}
      <div style={{ textAlign:"center", marginTop:40 }}>
        <h1 style={{ fontSize:32 }}>Welcome!</h1>
        <p>Discover amazing animals from the wild, farms, and birds.</p>
        <img src="/image/animal_banner.jpg" alt="Animals" style={{ width:"80%", maxWidth:700, borderRadius:12, boxShadow:"0 8px 24px rgba(0,0,0,0.12)", marginTop:20 }} />
      </div>
    </div>
  );
}
