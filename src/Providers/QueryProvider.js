import { createContext, useState } from "react";

import React from "react";
import { countryDefaultValue, queryDefaultValue } from "../Data/constants";

export const QueryContext = createContext();

const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState(queryDefaultValue);
  const [country, setCountry] = useState(countryDefaultValue);
  return (
    <QueryContext.Provider value={[query, country, setQuery, setCountry]}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryProvider;
