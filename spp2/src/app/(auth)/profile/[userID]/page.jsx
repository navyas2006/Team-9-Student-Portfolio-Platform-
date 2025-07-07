"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function UserProfileDynamicPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  const userId = pathname.split("/").pop();

  useEffect(() => {
    if (!userId) {
      setError("User ID not found in URL.");
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/users");
        const foundUser = response.data.find((u) => u._id === userId);

        if (foundUser) {
          setUser(foundUser);
        } else {
          setError("User profile not found.");
        }
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setError("Failed to load profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return (
      <div>
        <h1>User Profile Not Found!</h1>
        <p>The requested profile does not exist or could not be loaded.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>{user.name || "Student Profile"}</h1>

        <div>{user.name ? user.name.charAt(0).toUpperCase() : "?"}</div>

        <div>
          <section>
            <h2>Basic Information</h2>
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
                <strong>LinkedIn:</strong>{" "}
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
                <strong>GitHub:</strong>{" "}
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
      </div>
    </div>
  );
}
