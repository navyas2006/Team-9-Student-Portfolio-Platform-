"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function MyProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/users");
        if (response.data && response.data.length > 0) {
          setUser(response.data[0]);
        } else {
          setError("No user profile found. Please create one first.");
        }
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setError("Failed to load profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>My profile is loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No profile to display.</div>;
  }

  return (
    <div>
      <div>
        <h1>{user.name || "My Profile"}</h1>
        <div>{user.name ? user.name.charAt(0).toUpperCase() : "?"}</div>
      </div>
      <div>
        <section>
          <h2>Basic Information</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>University:</strong> {user.universityName}
          </p>
          <p>
            <strong>Course:</strong> {user.courseName}
          </p>
          {user.LinkedInID && (
            <p>
              <strong>LinkedIn ID:</strong>{" "}
              <a
                href={`https://linkedin.com/in/${user.LinkedInID}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.LinkedInID}
              </a>
            </p>
          )}
          {user.GithubID && (
            <p>
              <strong>Github ID:</strong>{" "}
              <a
                href={`https://github.com/${user.GithubID}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.GithubID}
              </a>
            </p>
          )}
        </section>

        {user.experience && user.experience.length > 0 && (
          <section>
            <h2>Experience</h2>
            <div>
              {user.experience.map((exp, index) => (
                <div key={index}>
                  <h3>{exp.title}</h3>
                  <p>
                    {exp.company} ({exp.years} years)
                  </p>
                  {exp.description && <p>{exp.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {user.skills && user.skills.length > 0 && (
          <section>
            <h2>Skills</h2>
            <div>
              {user.skills.map((skill, index) => (
                <span key={index}>
                  {skill.name} ({skill.level})
                </span>
              ))}
            </div>
          </section>
        )}

        {user.projects && user.projects.length > 0 && (
          <section>
            <h2>Projects</h2>
            <div>
              {user.projects.map((project, index) => (
                <div key={index}>
                  <h3>{project.title}</h3>
                  {project.description && <p>{project.description}</p>}
                  {project.link && (
                    <p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <div>
        <Link href="/editprofile">Edit Profile</Link>
      </div>
    </div>
  );
}
