import Link from "next/link";
export default function ProjectTracker() {
  return (
    <>
      <h1>ProjectTracker</h1>
      <Link href="/home">Home</Link>
      <Link href="/ranking">ranking</Link>
      <Link href="/myprofile">myprofile</Link>
      <Link href="/explore">explore</Link>
    </>
  );
}
