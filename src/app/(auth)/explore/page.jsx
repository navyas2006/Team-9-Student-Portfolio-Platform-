"use client";

export default function Explore() {
  return (
    <div
      style={{
        background: "#0f0f1b",
        minHeight: "100vh",
        padding: "2rem 1rem",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Explore Students 🚀
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            style={{
              background: "#1a1a2e",
              borderRadius: "1rem",
              padding: "2rem",
              minHeight: "300px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
