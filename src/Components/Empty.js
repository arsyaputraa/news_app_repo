import React from "react";
import { Link } from "react-router-dom";

const EmptyScreen = ({ message = "result is empty..." }) => {
  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-3xl text-orange-600">
        No data available :(
      </h1>
      <p className="text-xl">{message}</p>
    </div>
  );
};

export default EmptyScreen;
