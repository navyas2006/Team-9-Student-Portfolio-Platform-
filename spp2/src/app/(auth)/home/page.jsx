import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Link href="/ranking">ranking</Link>
      <Link href="/projecttracker">projecttracker</Link>
      <Link href="/myprofile">myprofile</Link>
      <Link href="/explore">explore</Link>
    </>
  );
}
