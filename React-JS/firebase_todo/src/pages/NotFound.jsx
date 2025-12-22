// NotFound.jsx
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-purple-800 via-purple-600 to-purple-400 text-white px-4">
      <div className="max-w-lg text-center">
        {/* SVG Illustration */}

        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: floating shapes for extra UI flair */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full animate-pulse"></div>
    </div>
  );
};

export default NotFound;
