"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("#ffcccb");
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const colors = ["#ffcccb", "#b3e5fc", "#c8e6c9", "#f0e68c", "#d8bfd8"];
    
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const spreadFlowers = () => {
    const newFlowers = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100 + "vw",
      animationDuration: Math.random() * 3 + 2 + "s",
    }));
    setFlowers(newFlowers);

    // Remove flowers after animation completes
    setTimeout(() => {
      setFlowers([]);
    }, 5000);
  };

  return (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: bgColor, 
      transition: "background-color 1s ease-in-out",
      textAlign: "center",
      overflow: "hidden",
      position: "relative"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#333", fontWeight: "bold" }}>
        🎉 Happy Birthday, Harkirat! 🎂
      </h1>
      <button 
        onClick={spreadFlowers} 
        style={{ 
          marginTop: "20px", 
          padding: "10px 20px", 
          fontSize: "1.2rem", 
          backgroundColor: "#ff4081", 
          color: "white", 
          border: "none", 
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "0.3s",
        }}
      >
        🌸 Spread Flowers 🌼
      </button>

      {flowers.map((flower) => (
        <div 
          key={flower.id} 
          className="flower" 
          style={{ 
            left: flower.left, 
            animationDuration: flower.animationDuration 
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}
