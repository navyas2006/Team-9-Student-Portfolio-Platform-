"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MyProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  /*useEffect(() => {
    const mockUser = {
      name: "Navya ",
      email: "navya@example.com",
      universityName: "JUIT",
      courseName: "B.Tech in Computer Science",
      LinkedInID: "navya123",
      GithubID: "navya-dev",
      experience: [
        {
          title: "Frontend Developer",
          company: "Pixeleon Studios",
          years: 1,
          description: "Built responsive features using Next.js and Tailwind CSS.",
        },
        {
          title: "Web Dev Intern",
          company: "ByteBrew Labs",
          years: 0.5,
          description: "Crafted interactive tools and resolved MongoDB bugs.",
        },
      ],
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "GitHub Collaboration", level: "Intermediate" },
      ],
      projects: [
        {
          title: "Portfolio Platform",
          description: "Showcase tool for student projects and achievements.",
          link: "https://studentportfolio.example.com",
        },
        {
          title: "Honeycomb UI",
          description: "Custom background layout using Tailwind CSS and SVG.",
          link: "https://designshowcase.example.com",
        },
      ],
    };

    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 800);
  }, []);*/

  if (loading) return <div style={styles.loading}>Loading profile...</div>;
  if (!user) return <div style={styles.loading}>No profile found.</div>;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.avatar}>
          {user.name?.charAt(0).toUpperCase() || "?"}
        </div>
        <h1 style={styles.name}>{user.name}</h1>
        <p style={styles.email}>{user.email}</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.heading}> Education</h2>
        <p><strong>University:</strong> {user.universityName}</p>
        <p><strong>Course:</strong> {user.courseName}</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Experience</h2>
        {user.experience?.map((exp, idx) => (
          <div key={idx} style={styles.card}>
            <h3 style={styles.subheading}>{exp.title}</h3>
            <p>{exp.company} ({exp.years} years)</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Skills</h2>
        <div style={styles.tagWrap}>
          {user.skills?.map((skill, idx) => (
            <span key={idx} style={styles.tag}>
              {skill.name} ({skill.level})
            </span>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Social Links</h2>
        {user.LinkedInID && (
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={`https://linkedin.com/in/${user.LinkedInID}`} target="_blank" rel="noopener noreferrer">
              {user.LinkedInID}
            </a>
          </p>
        )}
        {user.GithubID && (
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={`https://github.com/${user.GithubID}`} target="_blank" rel="noopener noreferrer">
              {user.GithubID}
            </a>
          </p>
        )}
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        {user.projects?.map((proj, idx) => (
          <div key={idx} style={styles.card}>
            <h3 style={styles.subheading}>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.link && (
              <p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </p>
            )}
          </div>
        ))}
      </section>

      <div style={styles.buttonWrap}>
        <Link href="/editprofile">
          <button style={styles.editButton}>Edit Profile</button>
        </Link>
      </div>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    padding: "2rem",
    maxWidth: "900px",
    margin: "auto",
    color: "#333",
  },
  loading: {
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  avatar: {
    width: "80px",
    height: "80px",
    background: "linear-gradient(135deg, #FFC0CB, #DE5D83)", 
    borderRadius: "50%",
    fontSize: "2.5rem",
    color: "#fff",
    fontWeight: "bold",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 8px rgba(222, 93, 131, 0.4)", 
  },
  name: {
    fontSize: "2rem",
    margin: "1rem 0 0.5rem",
    fontWeight: "800", 
    textShadow: "2px 2px 6px rgba(222, 93, 131, 0.7)", 
color: "#DE5D83",
  },
  email: {
    fontSize: "1rem",
    color: "#666",
  },
  section: {
    marginBottom: "2rem",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "1rem",
    borderBottom: "2px solid #f8bbd0",
    paddingBottom: "0.5rem",
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "0.3rem",
  },
  card: {
    backgroundColor: "#fff0f5",
    padding: "1rem",
    borderRadius: "0.6rem",
    marginBottom: "1rem",
    boxShadow: "0 0 6px rgba(0,0,0,0.05)",
  },
  tagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  tag: {
    backgroundColor: "#f8bbd0",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    fontSize: "0.9rem",
  },
  buttonWrap: {
    textAlign: "center",
    marginTop: "3rem",
  },
  editButton: {
    backgroundColor: "#c2185b",
    color: "white",
    padding: "0.8rem 2rem",
    border: "none",
    borderRadius: "2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};
