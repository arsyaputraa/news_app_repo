import React, { useEffect, useState } from "react";
import unavailableImg from "../Assets/Images/unavailable_image.png";
import EmptyScreen from "../Components/Empty";
import useNews from "../Hooks/useNews";
import Button from "../Components/Button";

const RecentScreen = () => {
  const [recentList, setRecentList] = useState([]);
  const { getRecentNews } = useNews();

  useEffect(() => {
    getRecentNews(setRecentList);
  }, []);
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-12 bg-gray-300 py-8">
      {recentList?.length == 0 ? (
        <EmptyScreen message="Read some news to add to this page" />
      ) : (
        <div className="flex flex-col gap-2 min-h-screen  md:w-3/4 ">
          <h1 className="font-bold text-2xl text-center mb-5">
            Recently Read news
          </h1>
          {recentList.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-5 gap-5 w-full shadow-md rounded-md bg-white"
            >
              <img
                alt="news cover"
                className="w-2/12 aspect-video"
                src={item?.urlToImage || unavailableImg}
              />
              <div className="w-8/12">
                <p>{item?.title}</p>
              </div>
              <div className="w-2/12">
                <Button to={item?.url}>Read Again</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentScreen;
