import React from "react";
import unavailableImg from "../Assets/Images/unavailable_image.png";
import { formatDate } from "../Utils/helper";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsCard = ({ news, isBig, onClick }) => {
  return (
    <div
      className={`${
        isBig ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      } bg-white group rounded-md overflow-hidden shadow-md aspect-square flex flex-col`}
    >
      <div className="w-full overflow-hidden   relative h-1/2">
        <div className="px-4 absolute py-2 z-10 font-bold top-0 left-0 group-hover:bg-black transition-all ease-in-out duration-100 text-end rounded-br-md bg-red-700 italic text-white">
          {news?.source?.name}
        </div>
        <LazyLoadImage
          alt="news cover"
          onClick={() => onClick(news)}
          className="w-full cursor-pointer h-full group-hover:scale-110 duration-100 transition-all ease-in-out"
          src={news?.urlToImage || unavailableImg}
        />
      </div>

      <div className="w-full flex flex-col h-1/2 px-5 py-3 bg-white">
        <div
          className={`flex justify-between ${isBig ? "text-md" : "text-xs"}`}
        >
          <p>{news?.author}</p>
          <p>{formatDate(news?.publishedAt)}</p>
        </div>
        <div className=" flex  flex-col flex-1 gap-5">
          <h2
            onClick={() => onClick(news)}
            className={` cursor-pointer hover:underline font-bold border-t-2 pt-2 text-justify ${
              isBig ? "text-2xl" : "text-sm"
            }`}
          >
            {news?.title.split(" - ")[0]}
          </h2>
          {isBig && <p className=" text-justify"> {news?.description}</p>}
        </div>

        <Button onClick={() => onClick(news)}>
          Furthermore <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
