import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSync",
  description: "Connect with developers & explore cool projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fdf6f6] text-gray-800`}
      >
        {/* ✅ NAVBAR */}
        <header
          style={{
            background: "linear-gradient(to right, #6b21a8, #7e22ce)",
            padding: "1rem 2rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "white",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <Link
              href="/explore"
              style={{ textDecoration: "none", color: "white" }}
            >
              Explore
            </Link>
            <Link
              href="/myprofile"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Profile
            </Link>
          </nav>
        </header>

        {/* ✅ CONTENT */}
        <main
          style={{
            padding: "3rem 1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {children}
        </main>

        {/* ✅ FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "2rem 1rem",
            fontSize: "0.875rem",
            color: "#666",
          }}
        >
          &copy; {new Date().getFullYear()} SkillSync — Made with ❤️ using
          Next.js
        </footer>
      </body>
    </html>
  );
}
