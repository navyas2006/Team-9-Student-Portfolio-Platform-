"use client";
import React, { useState } from "react";
import axios from "axios";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [experience, setExperience] = useState([
    { title: "", company: "", years: 0, description: "" },
  ]);
  const [skills, setSkills] = useState([{ name: "", level: "" }]);
  const [LinkedInID, setLinkedInID] = useState("");
  const [GithubID, setGithubID] = useState("");
  const [projects, setProjects] = useState([
    { title: "", description: "", link: "" },
  ]);

  const handleExperienceChange = (index, event) => {
    const newExperience = [...experience];
    newExperience[index][event.target.name] = event.target.value;
    setExperience(newExperience);
  };
  const addExperience = () => {
    setExperience([
      ...experience,
      { title: "", company: "", years: 0, description: "" },
    ]);
  };
  const removeExperience = (index) => {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
  };

  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index][event.target.name] = event.target.value;
    setSkills(newSkills);
  };
  const addSkills = () => {
    setSkills([...skills, { name: "", level: "" }]);
  };
  const removeSkills = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleProjectsChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index][event.target.name] = event.target.value;
    setProjects(newProjects);
  };
  const addProjects = () => {
    setProjects([
      ...projects,
      { title: "", company: "", years: 0, description: "" },
    ]);
  };
  const removeProjects = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };
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
    <div
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-6"
      style={{ backgroundColor: "#fdfdfd" }}
    >
      <h1
        className="text-3xl font-bold mb-6 text-center text-purple-700"
        style={{ color: "purple" }}
      >
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
          <h2
            className="text-2xl font-bold text-purple-700"
            style={{ color: "purple" }}
          >
            Skills
          </h2>
          <>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="space-y-3 p-4 border border-gray-200 rounded-md relative bg-gray-50"
              >
                {skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSkills(index)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
                    aria-label={`Remove skill ${index + 1}`}
                  >
                    &times;
                  </button>
                )}
                <div>
                  <label className="block font-semibold text-gray-700">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g.,Next.js"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">
                    Skill Level
                  </label>
                  <select
                    name="level"
                    value={skill.level}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkills}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add More Skill
            </button>
            <hr className="border-gray-200" />
          </>
          <h2
            className="text-2xl font-bold text-purple-700"
            style={{ color: "purple" }}
          >
            Experience
          </h2>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="space-y-3 p-4 border border-gray-200 rounded-md relative bg-gray-50"
            >
              {experience.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
                  aria-label={`Remove experience ${index + 1}`}
                >
                  &times;
                </button>
              )}
              <div>
                <label className="block font-semibold text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., Frontend Intern"
                  value={exp.title}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="e.g., Google"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Years (e.g., 2)
                </label>
                <input
                  type="number"
                  name="years"
                  placeholder="Years"
                  value={exp.years}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Briefly describe your responsibilities..."
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md min-h-[80px]"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add More Experience
          </button>
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
          <h2
            className="text-2xl font-bold text-purple-700"
            style={{ color: "purple" }}
          >
            Projects
          </h2>
          {projects.map((project, index) => (
            <div
              key={index}
              className="space-y-3 p-4 border border-gray-200 rounded-md relative bg-gray-50"
            >
              {projects.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProjects(index)}
                  className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-xl font-bold"
                  aria-label={`Remove project ${index + 1}`}
                >
                  &times;
                </button>
              )}
              <div>
                <label className="block font-semibold text-gray-700">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., E-commerce Website"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Briefly describe your project..."
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md min-h-[80px]"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Project Link
                </label>
                <input
                  type="text"
                  name="link"
                  placeholder="e.g., https://github.com/yourproject"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addProjects}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add More Project
          </button>
        </div>

        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 font-semibold"
          style={{ backgroundColor: "purple" }}
        >
          Save Portfolio
        </button>
      </form>
    </div>
  );
}
