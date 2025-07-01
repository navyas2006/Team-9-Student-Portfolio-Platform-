"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        Registered Students
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Adjusted minmax for more content
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              background: "#1a1a2e",
              borderRadius: "1rem",
              padding: "2rem",
              minHeight: "450px", // Increased minHeight to accommodate more content
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              overflow: "hidden", // Hide overflow if content exceeds
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
              {user.email}
            </p>
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

            {user.LinkedInID && (
              <p
                style={{
                  color: "#bbb",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                }}
              >
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={`https://linkedin.com/in/${user.LinkedInID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#87CEEB", textDecoration: "underline" }}
                >
                  {user.LinkedInID}
                </a>
              </p>
            )}
            {user.GithubID && (
              <p style={{ color: "#bbb", fontSize: "0.9rem" }}>
                <strong>GitHub:</strong>{" "}
                <a
                  href={`https://github.com/${user.GithubID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#87CEEB", textDecoration: "underline" }}
                >
                  {user.GithubID}
                </a>
              </p>
            )}

            {user.experience && user.experience.length > 0 && (
              <div
                style={{ marginTop: "1rem", width: "100%", textAlign: "left" }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Experience:
                </h3>
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  {user.experience.map((exp, index) => (
                    <li
                      key={index}
                      style={{
                        color: "#ccc",
                        fontSize: "0.85rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <strong>{exp.title}</strong> at {exp.company} ({exp.years}{" "}
                      yrs)
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {user.skills && user.skills.length > 0 && (
              <div
                style={{ marginTop: "1rem", width: "100%", textAlign: "left" }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Skills:
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {user.skills.map((skill, skillIndex) => (
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
                      {skill.name} ({skill.level})
                    </span>
                  ))}
                </div>
              </div>
            )}

            {user.projects && user.projects.length > 0 && (
              <div
                style={{ marginTop: "1rem", width: "100%", textAlign: "left" }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Projects:
                </h3>
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  {user.projects.map((project, index) => (
                    <li
                      key={index}
                      style={{
                        color: "#ccc",
                        fontSize: "0.85rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <strong>{project.title}</strong>{" "}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#87CEEB",
                            textDecoration: "underline",
                          }}
                        >
                          (Link)
                        </a>
                      )}
                      {project.description && (
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "#aaa",
                            marginTop: "0.1rem",
                          }}
                        >
                          {project.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
