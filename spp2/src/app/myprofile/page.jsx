import Link from "next/link";
export default function MyProfile() {
  return (
    <>
      <h1>myprofile</h1>
      <Link href="/home">home</Link>
      <Link href="/ranking">ranking</Link>
      <Link href="/projecttracker">projecttracker</Link>
      <Link href="/explore">explore</Link>
    </>
  );
}
