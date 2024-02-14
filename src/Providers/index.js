import React from "react";
import PaginationProvider from "./PaginationProvider";
import QueryProvider from "./QueryProvider";

const ProviderWrapper = ({ children }) => {
  return (
    <QueryProvider>
      <PaginationProvider>{children}</PaginationProvider>
    </QueryProvider>
  );
};

export default ProviderWrapper;
