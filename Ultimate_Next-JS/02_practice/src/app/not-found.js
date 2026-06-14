import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-gray-500">
        Page not found
      </p>

      <Link
        href="/"
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
}

export default notFound