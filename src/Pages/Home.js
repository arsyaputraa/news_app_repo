import React, { useContext, useEffect, useState } from "react";
import NewsCard from "../Components/NewsCard";
import useNews from "../Hooks/useNews";
import Modal from "../Components/Modal";
import NewsCardSkeleton from "../Components/NewsCardSkeleton";
import { QueryContext } from "../Providers/QueryProvider";
import Filter from "../Components/Filter";
import ErrorScreen from "./Error";
import { PaginationContext } from "../Providers/PaginationProvider";
import EmptyScreen from "../Components/Empty";

const placeHolderNews = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, country] = useContext(QueryContext);
  const [currentPage] = useContext(PaginationContext);

  const [myError, setMyError] = useState("");

  const [isNewsAvailable, setIsNewsAvailable] = useState();
  const { getNews } = useNews();

  useEffect(() => {
    getNews(setNewsList, setIsLoading, query, country, setMyError, currentPage);

    // console.log("run get", query, country, currentPage);
  }, [currentPage, query, country]);

  const closeModal = () => setIsNewsAvailable(null);
  const openModal = (news) => setIsNewsAvailable(news);

  return !myError ||
    myError === "" ||
    myError === null ||
    myError === undefined ? (
    <div className="min-h-screen bg-gray-300 px-12 py-8">
      <Filter country={country} query={query} />
      {isLoading ? (
        <div
          className={` w-full grid grid-cols-4 grid-rows-${Math.ceil(
            placeHolderNews?.length / 5
          )} space-x-3 space-y-3 `}
        >
          {placeHolderNews?.map((_, index) => {
            return (
              <NewsCardSkeleton
                key={index}
                isBig={
                  (index % 5 === 0 && (index / 5) % 2 === 0) || index % 10 === 7
                }
              />
            );
          })}
        </div>
      ) : newsList?.length > 0 ? (
        <div
          className={` w-full grid grid-cols-4 grid-rows-${Math.ceil(
            newsList?.length / 5
          )} space-x-3 space-y-3 bg-gray-300`}
        >
          {newsList?.map((news, index) => {
            return (
              <NewsCard
                key={index}
                onClick={openModal}
                news={news}
                isBig={
                  (index % 5 === 0 && (index / 5) % 2 === 0) || index % 10 === 7
                }
              />
            );
          })}
          {
            <Modal
              isOpen={isNewsAvailable}
              onClose={closeModal}
              news={isNewsAvailable}
            />
          }
        </div>
      ) : (
        <EmptyScreen message="There are no news related to the topic" />
      )}
    </div>
  ) : (
    <ErrorScreen error={myError} />
  );
};

export default Home;
