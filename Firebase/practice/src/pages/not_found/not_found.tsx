import { Link } from "react-router";

const NotFoundScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;