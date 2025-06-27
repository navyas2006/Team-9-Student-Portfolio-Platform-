import Link from "next/link";
export default function Ranking() {
  return (
    <>
      <h1>Ranking</h1>
      <Link href="/home">Home</Link>
      <Link href="/projecttracker">projecttracker</Link>
      <Link href="/myprofile">myprofile</Link>
      <Link href="/explore">explore</Link>
    </>
  );
}
