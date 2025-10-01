"use client";

import { useState } from "react";

export default function Animals() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null); // сонгосон амьтан

  const animals = [
    { 
      name: "Lion", 
      image: "/image/lion.jpg", 
      desc: "Lions live in groups called prides. A lion’s roar can be heard up to 8 km away!", 
      category: "wild" 
    },
    { 
      name: "Tiger", 
      image: "/image/tiger.jpg", 
      desc: "No two tigers have the same stripes — each one is unique like human fingerprints.", 
      category: "wild" 
    },
    { 
      name: "Zebra", 
      image: "/image/zebra.webp", 
      desc: "Zebras’ stripes confuse predators and also help keep them cool under the sun.", 
      category: "wild" 
    },
    { 
      name: "Dog", 
      image: "/image/dog.jpg", 
      desc: "Dogs can understand up to 250 words and gestures, almost like a 2-year-old child.", 
      category: "farm" 
    },
    { 
      name: "Cat", 
      image: "/image/cat.jpg", 
      desc: "Cats spend about 70% of their lives sleeping!", 
      category: "farm" 
    },
    { 
      name: "Cow", 
      image: "/image/cow.jpg", 
      desc: "Cows have best friends and become stressed when they are separated.", 
      category: "farm" 
    },
    { 
      name: "Horse", 
      image: "/image/horse.jpg", 
      desc: "Horses can sleep both lying down and standing up.", 
      category: "farm" 
    },
    { 
      name: "Sheep", 
      image: "/image/sheep.webp", 
      desc: "Sheep can recognize and remember up to 50 individual faces for years.", 
      category: "farm" 
    },
    { 
      name: "Goat", 
      image: "/image/goat.jpg", 
      desc: "Goats have rectangular pupils which give them a wide field of vision.", 
      category: "farm" 
    },
    { 
      name: "Eagle", 
      image: "/image/eagle.jpg", 
      desc: "Eagles have eyesight 4–5 times sharper than humans.", 
      category: "birds" 
    },
    { 
      name: "Parrot", 
      image: "/image/parrot.jpg", 
      desc: "Some parrots can live over 80 years and even learn human words.", 
      category: "birds" 
    },
    { 
      name: "Penguin", 
      image: "/image/penguin.webp", 
      desc: "Male penguins often gift pebbles to females as a way of proposing.", 
      category: "birds" 
    },
    { 
      name: "Falcon", 
      image: "/image/falcon.avif", 
      desc: "The Peregrine Falcon is the fastest bird, diving at speeds of over 300 km/h.", 
      category: "birds" 
    },
    { 
      name: "Swan", 
      image: "/image/swan.jpg", 
      desc: "Swans usually mate for life, forming lifelong partnerships.", 
      category: "birds" 
    },
  ];

  const filtered = animals.filter(a => {
    return (category === "all" || a.category === category)
      && a.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div style={{ maxWidth: "1000px", margin: "20px auto", padding: "0 15px" }}>
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
                  <button
                    onClick={() => setSelected(selected?.name === a.name ? null : a)}
                    style={{
                      marginTop: "8px",
                      background: "#1E90FF",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Details доор нь */}
              {selected?.name === a.name && (
                <div style={{
                  padding: "15px",
                  background: "#fff",
                  borderTop: "1px solid #eee",
                  fontSize: "14px"
                }}>
                  <p>{a.desc}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>No animals found</p>
        )}
      </div>
    </div>
  );
}
