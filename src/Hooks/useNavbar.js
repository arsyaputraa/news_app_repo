import { useContext, useRef } from "react";
import { PaginationContext } from "../Providers/PaginationProvider";
import { QueryContext } from "../Providers/QueryProvider";
import {
  countryDefaultValue,
  pageDefaultValue,
  queryDefaultValue,
} from "../Data/constants";
import { useNavigate } from "react-router-dom";

const useNavbar = () => {
  const [query, country, setQuery, setCountry] = useContext(QueryContext);
  const [currentPage, setCurrentPage] = useContext(PaginationContext);
  const navigate = useNavigate();
  const NavbarItems = [
    {
      title: "HOME",
      availableIn: ["/", "/recent"],
      path: "/",
    },
    {
      title: "RECENTLY READ",
      availableIn: ["/", "/recent"],
      path: "/recent",
    },

    {
      title: "TOP HEADLINES",
      availableIn: ["/"],
      children: [
        {
          title: "INDONESIA",
          fn: () => {
            if (query !== queryDefaultValue) setQuery(queryDefaultValue);
            if (currentPage !== pageDefaultValue)
              setCurrentPage(pageDefaultValue);
            if (country !== "id") setCountry("id");
          },
        },
        {
          title: "UNITED STATES",
          availableIn: ["/"],

          fn: () => {
            if (query !== queryDefaultValue) setQuery(queryDefaultValue);
            if (currentPage !== pageDefaultValue)
              setCurrentPage(pageDefaultValue);
            if (country !== "id") setCountry("us");
          },
        },
      ],
    },
    {
      title: "TOPICS",
      availableIn: ["/"],

      children: [
        {
          title: "TECH",
          fn: () => {
            if (query !== "tech") setQuery("tech");
            if (currentPage !== pageDefaultValue)
              setCurrentPage(pageDefaultValue);
            if (country !== countryDefaultValue)
              setCountry(countryDefaultValue);
          },
        },
        {
          title: "CAREER",
          availableIn: ["/"],

          fn: () => {
            if (query !== "career") setQuery("career");
            if (currentPage !== pageDefaultValue)
              setCurrentPage(pageDefaultValue);
            if (country !== countryDefaultValue)
              setCountry(countryDefaultValue);
          },
        },
        {
          title: "SPORTS",
          availableIn: ["/"],

          fn: () => {
            if (query !== "sports") setQuery("sports");
            if (currentPage !== pageDefaultValue)
              setCurrentPage(pageDefaultValue);
            if (country !== countryDefaultValue)
              setCountry(countryDefaultValue);
          },
        },
        {
          title: "STOCKS",
          availableIn: ["/"],

          fn: () => {
            if (query !== "stocks") setQuery("stocks");
            if (currentPage !== pageDefaultValue)
              setCurrentPage(pageDefaultValue);
            if (country !== countryDefaultValue)
              setCountry(countryDefaultValue);
          },
        },
      ],
    },
  ];

  const searchRef = useRef(null);
  const handleSearch = (e) => {
    if (
      searchRef?.current?.value !== null ||
      searchRef?.current?.value !== undefined
    )
      setQuery(searchRef?.current?.value);
    searchRef.current.value = queryDefaultValue;
    e.preventDefault();
  };

  return { handleSearch, searchRef, NavbarItems };
};

export default useNavbar;
