import { createContext, useState } from "react";

import React from "react";
import { pageDefaultValue } from "../Data/constants";

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(pageDefaultValue);
  const [maxPage, setMaxPage] = useState(2); // static to 2 because the API doesnt provide max page / page count parameter
  function onPageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <PaginationContext.Provider
      value={[currentPage, setCurrentPage, maxPage, setMaxPage, onPageChange]}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
