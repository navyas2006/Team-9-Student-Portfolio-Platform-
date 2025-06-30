"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Explore() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users for Explore page:", err);
        setError("Failed to load users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          background: "#0f0f1b",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        Loading portfolios...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          background: "#0f0f1b",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
          fontSize: "1.2rem",
        }}
      >
        Error: {error}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div
        style={{
          background: "#0f0f1b",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          No Portfolios Found Yet!
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Be the first to create one from the homepage.
        </p>
      </div>
    );
  }

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
        Registered portfolios
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
        {users.map((user) => (
          <Link key={user._id} href={`/profile/${user._id}`} passHref>
            <div
              style={{
                background: "#1a1a2e",
                borderRadius: "1rem",
                padding: "2rem",
                minHeight: "300px",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  background: "#3f3f5f",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                {user.name ? user.name.charAt(0).toUpperCase() : "?"}
              </div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "semibold",
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {user.name || "Unnamed User"}
              </h2>
              <p
                style={{
                  color: "#bbb",
                  fontSize: "0.9rem",
                  marginBottom: "0.25rem",
                }}
              >
                {user.universityName}
              </p>
              <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
                {user.courseName}
              </p>

              {user.skills && user.skills.length > 0 && (
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {user.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        background: "#6a0dad",
                        color: "#fff",
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                  {user.skills.length > 3 && (
                    <span
                      style={{
                        background: "#6a0dad",
                        color: "#fff",
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                      }}
                    >
                      +{user.skills.length - 3} more
                    </span>
                  )}
                </div>
              )}

              {user.projects && user.projects.length > 0 && (
                <div
                  style={{
                    marginTop: "1rem",
                    color: "#ccc",
                    fontSize: "0.85rem",
                  }}
                >
                  <strong>Projects:</strong>{" "}
                  {user.projects
                    .slice(0, 2)
                    .map((p) => p.title)
                    .join(", ")}
                  {user.projects.length > 2 && "..."}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
