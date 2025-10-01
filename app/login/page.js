"use client";

export default function Login() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", background: "white", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "5px"
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "5px"
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "5px"
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Login
      </button>
    </div>
  );
}
