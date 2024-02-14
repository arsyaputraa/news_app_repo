import React from "react";

const NewsCardSkeleton = ({ isBig }) => {
  return (
    <div
      className={`${
        isBig ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
      } bg-white rounded-md overflow-hidden shadow-md aspect-square flex flex-col`}
    >
      <div className="w-full  relative h-1/2">
        <div className="px-4 absolute py-2 top-0 left-0  rounded-br-md bg-red-900 animate-pulse" />
        <div className="w-full bg-gray-500 animate-pulse h-full" />
      </div>

      <div className="w-full flex flex-col h-1/2 px-5 py-3 bg-gray-200 animate-pulse">
        <div className={`flex justify-between `}>
          <div className="bg-gray-500 animate-pulse w-10 rounded-lg h-5"></div>
          <div className="bg-gray-500 animate-pulse w-10 rounded-lg h-5"></div>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <div
            className={`font-bold border-t-2 h-5 mt-5 w-full rounded-lg  bg-gray-500 animate-pulse  text-justify ${
              isBig ? "text-2xl" : "text-sm"
            }`}
          />

          <p className="bg-gray-500 animate-pulse w-full h-5 rounded-lg text-justify" />
          <p className="bg-gray-500 animate-pulse w-4/6 h-5 rounded-lg text-justify" />
        </div>

        <div
          className={`px-5 self-end py-2 flex gap-2 w-12 h-8 rounded-lg items-center bg-gray-500 animate-pulse text-white ${
            isBig ? "scale-100 " : "scale-75 "
          }`}
        ></div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
