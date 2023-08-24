import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline text-2xl">
        Return Home
      </Link>
    </div>
  );
}
