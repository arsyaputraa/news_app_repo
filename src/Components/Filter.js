import React from "react";

const Filter = ({ query, country }) => {
  return (
    <p className="mb-5 text-gray-800 text-md md:text-xl">
      {query
        ? `On Topics "${query}"`
        : `TOP HEADLINES IN ${
            country === "us" ? "UNITED STATES" : "INDONESIA"
          }`}
    </p>
  );
};

export default Filter;
