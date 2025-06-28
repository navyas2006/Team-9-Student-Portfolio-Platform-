import Link from "next/link";
export default function Explore() {
  return (
    <>
      <h1>Explore</h1>
      <Link href="/home">Home</Link>
      <Link href="/ranking">ranking</Link>
      <Link href="/projecttracker">projecttracker</Link>
      <Link href="/myprofile">myprofile</Link>
    </>
  );
}
