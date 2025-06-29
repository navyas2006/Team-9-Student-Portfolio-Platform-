"use client";
import React, { useState } from "react";
import axios from "axios";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [LinkedInID, setLinkedInID] = useState("");
  const [GithubID, setGithubID] = useState("");
  const [projects, setProjects] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", {
        name,
        email,
        universityName,
        courseName,
        experience,
        skills,
        LinkedInID,
        GithubID,
        projects,
      });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  return (
    <>
      <h1>Edit Profile</h1>
      <form>
        <div>
          <label>Enter Username</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Enter email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <section>
            <legend>University</legend>
            <input
              type="text"
              onChange={(e) => setUniversityName(e.target.value)}
            />
          </section>
          <section>
            <legend>Course </legend>
            <input
              type="text"
              onChange={(e) => setCourseName(e.target.value)}
            />
          </section>
          <section>
            <legend>Experience </legend>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setExperience((prev) => [...prev, { title: e.target.value }])
              }
            ></input>
          </section>

          <section>
            <legend>Skills Level</legend>
            <select
              onChange={(e) =>
                setSkills((prev) => [...prev, { level: e.target.value }])
              }
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </section>
          <section>
            <legend>LinkedIn ID</legend>
            <input
              type="text"
              onChange={(e) => setLinkedInID(e.target.value)}
            />
          </section>
          <section>
            <legend>Github ID</legend>
            <input type="text" onChange={(e) => setGithubID(e.target.value)} />
          </section>
          <section>
            <legend>Projects</legend>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) =>
                setProjects((prev) => [...prev, { title: e.target.value }])
              }
            ></input>
            <input
              type="text"
              placeholder="Description"
              onChange={(e) =>
                setProjects((prev) => [
                  ...prev,
                  { description: e.target.value },
                ])
              }
            ></input>
            <input
              type="text"
              placeholder="Link"
              onChange={(e) =>
                setProjects((prev) => [...prev, { link: e.target.value }])
              }
            ></input>
          </section>
          <button type="submit" onClick={handleSubmit} className=" ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
