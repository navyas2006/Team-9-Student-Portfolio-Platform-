import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/Users";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    await connectionToDatabase();
    const {
      name,
      email,
      universityName,
      courseName,
      experience,
      skills,
      LinkedInID,
      GithubID,
      projects,
    } = await request.json();
    const newUser = newUser({
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
    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}
