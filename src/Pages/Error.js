import React from "react";
import { Link } from "react-router-dom";

const ErrorScreen = ({ error }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl text-red-600 font-bold">An Error Occured :(</h1>
      <p className="text-lg mb-10">{error}</p>
      <Link to="/" className="text-blue-400">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorScreen;
