import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/Users";
import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    await connectionToDatabase();
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.log("Error in GET /api/users:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
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
    const newUser = new User({
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
    console.log("Error in POST /api/users:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT(request) {
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

    if (!email) {
      return NextResponse.json(
        { message: "User ID needs an update" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      {
        name,
        universityName,
        courseName,
        experience,
        skills,
        LinkedInID,
        GithubID,
        projects,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (err) {
    console.log("Error in PUT /api/users:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
