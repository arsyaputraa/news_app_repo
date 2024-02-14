import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-red-600 font-bold">404 :(</h1>
      <p className="text-xl mb-10">Page Not Found...</p>
      <Link to="/" className="text-blue-400">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundScreen;
