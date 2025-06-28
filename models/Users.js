import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: string },
  email: { type: string, required: true, unique: true },
  universityName: { type: string },
  courseName: { type: string, required: true },
  experience: [
    {
      title: { type: string },
      company: { type: string },
      years: { type: number, default: 0 },
      description: { type: string },
    },
  ],
  skills: [
    {
      name: { type: string },
      level: {
        type: string,
        enum: ["beginner", "intermidate", "advanced"],
        default: "beginner",
      },
    },
  ],
  LinkedInID: { type: string },
  GithubID: { type: string },
  projects: [
    {
      title: { type: string },
      description: { type: string },
      link: { type: string },
    },
  ],
});
const User = mongoose.models.user || mongoose.model("User", userSchema);
export default User;
