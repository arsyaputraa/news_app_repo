import { AiOutlineArrowRight } from "react-icons/ai";
import unavailableImage from "../Assets/Images/unavailable_image.png";
import { formatDate } from "../Utils/helper";
import Button from "./Button";
import useNews from "../Hooks/useNews";

const Modal = ({ isOpen, onClose, news }) => {
  const { saveToRecentNews } = useNews();

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed z-10 inset-0 overflow-y-auto bg-black w-screen h-screen bg-opacity-75"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white w-4/6 mx-auto rounded shadow-lg">
              <div className="px-10 py-8 flex justify-around items-center ">
                <div className="w-3/6 relative rounded-md shadow-lg overflow-hidden">
                  <div className="px-5 py-2 absolute  font-bold top-0 left-0 text-end rounded-br-md bg-red-700 italic text-white">
                    {news?.source?.name}
                  </div>
                  <img
                    className=" "
                    alt="news cover"
                    src={news?.urlToImage || unavailableImage}
                  />
                </div>
                <div className=" w-3/6 ml-5">
                  <h1 className="text-3xl  font-semibold mb-2">
                    {news.title.split(" - ")[0]}
                  </h1>
                  <div className="flex justify-between">
                    <p>{news?.author}</p>

                    <p>{formatDate(news?.publishedAt)}</p>
                  </div>
                  <p className="mt-2">{news.content}</p>
                  <div className="flex mt-5 w-full justify-end">
                    <Button
                      onClick={() => {
                        saveToRecentNews(news);
                        window.open(news?.url, "_blank");
                      }}
                    >
                      Read <AiOutlineArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
