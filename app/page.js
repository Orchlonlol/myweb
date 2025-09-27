"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const animals = [
    { name: "Lion", image: "/image/lion.jpg", desc: "King of the jungle.", category: "wild" },
    { name: "Tiger", image: "/image/tiger.jpg", desc: "Strong predator.", category: "wild" },
    { name: "Zebra", image: "/image/zebra.webp", desc: "Striped horse-like animal.", category: "wild" },
    { name: "Dog", image: "/image/dog.jpg", desc: "Loyal domestic animal.", category: "farm" },
    { name: "Cat", image: "/image/cat.jpg", desc: "Independent pet.", category: "farm" },
    { name: "Cow", image: "/image/cow.jpg", desc: "Provides milk.", category: "farm" },
    { name: "Horse", image: "/image/horse.jpg", desc: "Used for riding.", category: "farm" },
    { name: "Sheep", image: "/image/Sheep.webp", desc: "Provides wool.", category: "farm" },
    { name: "Goat", image: "/image/goat.jpg", desc: "Climbs hills easily.", category: "farm" },
    { name: "Eagle", image: "/image/eagle.jpg", desc: "Powerful bird of prey.", category: "birds" },
    { name: "Parrot", image: "/image/parrot.jpg", desc: "Colorful and talkative bird.", category: "birds" },
    { name: "Penguin", image: "/image/penguin.webp", desc: "Flightless bird.", category: "birds" },
    { name: "Falcon", image: "/image/falcon.avif", desc: "Majestic raptor, very fast hunter.", category: "birds" },
    { name: "Swan", image: "/image/swan.jpg", desc: "Elegant water bird with long neck.", category: "birds" },
  ];

  const filtered = animals.filter(a => {
    const matchesCategory = category === "all" || a.category === category;
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Our Animals</h2>

      {/* Category buttons */}
      <div style={{ textAlign: "center", marginBottom: 15 }}>
        {["all","wild","farm","birds"].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              margin: "0 5px",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              background: category === cat ? "#4CAF50" : "#ccc",
              color: category === cat ? "white" : "#111",
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Search box */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search animals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px 15px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Animal grid */}
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((a, idx) => (
            <div key={idx} className="card">
              <div className="card-image">
                <img src={a.image} alt={a.name} />
                <div className="overlay">
                  <span className="tag">{a.category.toUpperCase()}</span>
                  <h3>{a.name}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>No animals found</p>
        )}
      </div>
    </div>
  );
}
