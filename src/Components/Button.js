import React from "react";

const Button = ({ onClick, isBig = true, children, to }) => {
  return to ? (
    <a href={to} target="_blank" rel="noreferrer">
      {" "}
      <button
        className={`cursor-pointer px-5 self-end py-2 flex gap-2 items-center  transition-all w-min ease-in-out duration-100 bg-black text-white ${
          isBig ? "scale-100 hover:scale-110" : "scale-75 hover:scale-90"
        }`}
      >
        {children}
      </button>
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`cursor-pointer px-5 self-end py-2 flex gap-2 items-center  transition-all w-min ease-in-out duration-100 bg-black text-white ${
        isBig ? "scale-100 hover:scale-110" : "scale-75 hover:scale-90"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
