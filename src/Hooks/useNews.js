import AppAxios from "../Config/AxiosConfig";
import { recentInitialValues } from "../Data/constants";
import useLocalStorage from "./useLocalStorage";

const useNews = () => {
  const [newsLocalStorage, setNewsLocalStorage] = useLocalStorage(
    "recent-news",
    recentInitialValues
  );

  const saveToRecentNews = (news) => {
    if (!newsLocalStorage.find((item) => item?.url === news?.url)) {
      setNewsLocalStorage([...newsLocalStorage, news]);
    }
  };

  const getRecentNews = (setRecentList) => {
    setRecentList(newsLocalStorage);
  };

  const getNews = async (
    setNewsList,
    setIsLoading,
    query,
    country = "us",
    setError,
    currentPage = 1
  ) => {
    setIsLoading(true);
    await AppAxios.get(
      query
        ? `/everything/?q=${query}&sortBy=relevancy&pageSize=20&page=${currentPage}`
        : `/top-headlines/?country=${country}&pageSize=20&page=${currentPage}`,
      {}
    )
      .then((response) => {
        setNewsList(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { getNews, getRecentNews, saveToRecentNews };
};

export default useNews;
