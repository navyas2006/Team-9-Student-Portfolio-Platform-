"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12"
      style={{
        background: "linear-gradient(135deg, #f3e8ff, #ffffff, #ede9fe)",
        color: "#3c0753",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Logo / App Title */}
      <h1
        className="text-5xl md:text-6xl font-extrabold mb-6"
        style={{
          color: "#6b21a8",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        🚀 SkillSync
      </h1>

      {/* Subtext */}
      <p
        className="text-lg md:text-xl max-w-2xl mb-10"
        style={{
          color: "#4b4b4b",
          lineHeight: "1.6",
        }}
      >
        Discover exciting projects, connect with developers, and grow your
        career by building an amazing profile.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          href="/explore"
          className="px-7 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#6b21a8",
            color: "#fff",
            boxShadow: "0 6px 12px rgba(107, 33, 168, 0.4)",
            border: "2px solid #6b21a8",
          }}
        >
          🔍 Explore Projects
        </Link>

        <Link
          href="/myprofile"
          className="px-7 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105"
          style={{
            backgroundColor: "#ffffff",
            color: "#6b21a8",
            border: "2px solid #6b21a8",
            boxShadow: "0 6px 12px rgba(107, 33, 168, 0.15)",
          }}
        >
          🙍‍♀️ Edit Profile
        </Link>
      </div>

      {/* Optional: Footer */}
      <footer style={{ marginTop: "80px", fontSize: "0.9rem", color: "#888" }}>
        @2025 SkillSync. All rights reserved.
      </footer>
    </div>
  );
}
