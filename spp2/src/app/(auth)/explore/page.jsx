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
        Explore Students 🚀
      </h1>

      <div
        style={{
          maxWidth: "800px", // Constrain width for better readability in a list
          margin: "0 auto",
          display: "flex",
          flexDirection: "column", // Stack items vertically
          gap: "1rem", // Space between list items
        }}
      >
        {users.map((user) => (
          <Link key={user._id} href={`/profile/${user._id}`} passHref>
            <div
              style={{
                background: "#1a1a2e", // Background for each list item
                padding: "1rem 1.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #3f3f5f", // Subtle border
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "1rem", // Space between avatar and text
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2a2a4a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#1a1a2e")
              }
            >
              <div
                style={{
                  width: "50px", // Smaller avatar
                  height: "50px",
                  background: "#3f3f5f",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.5rem", // Smaller font
                  fontWeight: "bold",
                  flexShrink: 0, // Prevent avatar from shrinking
                }}
              >
                {user.name ? user.name.charAt(0).toUpperCase() : "?"}
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {user.name || "Unnamed User"}
                </h2>
                <p style={{ color: "#bbb", fontSize: "0.85rem" }}>
                  {user.universityName} - {user.courseName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}