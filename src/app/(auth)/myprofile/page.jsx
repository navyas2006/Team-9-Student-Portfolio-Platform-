"use client";
import React, { useState } from "react";
import axios from "axios";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [experience, setExperience] = useState([{ title: "" }]);
  const [skills, setSkills] = useState([{ level: "" }]);
  const [LinkedInID, setLinkedInID] = useState("");
  const [GithubID, setGithubID] = useState("");
  const [projects, setProjects] = useState([{ title: "", description: "", link: "" }]);

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
      console.log("Submitted successfully:", response.data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6" style={{ backgroundColor: "#fdfdfd" }}>
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700" style={{ color: "purple" }}>
        Edit Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Username</label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">University</label>
          <input
            type="text"
            onChange={(e) => setUniversityName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Course</label>
          <input
            type="text"
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Experience Title</label>
          <input
            type="text"
            placeholder="e.g., Frontend Intern"
            onChange={(e) =>
              setExperience([{ title: e.target.value }])
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Skill Level</label>
          <select
            onChange={(e) =>
              setSkills([{ level: e.target.value }])
            }
            className="w-full p-2 border rounded"
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">LinkedIn ID</label>
          <input
            type="text"
            onChange={(e) => setLinkedInID(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Github ID</label>
          <input
            type="text"
            onChange={(e) => setGithubID(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Project Details</label>
          <input
            type="text"
            placeholder="Project Title"
            onChange={(e) =>
              setProjects((prev) => [{ ...prev[0], title: e.target.value }])
            }
            className="w-full p-2 border rounded mt-1"
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setProjects((prev) => [{ ...prev[0], description: e.target.value }])
            }
            className="w-full p-2 border rounded mt-1"
          />
          <input
            type="text"
            placeholder="Project Link"
            onChange={(e) =>
              setProjects((prev) => [{ ...prev[0], link: e.target.value }])
            }
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 font-semibold"
          style={{ backgroundColor: "purple" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
