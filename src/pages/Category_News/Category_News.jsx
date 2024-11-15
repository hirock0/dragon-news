import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../../ContextApiProvider";
import { FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
const Category_news = () => {
  const { id } = useParams();
  const { newsArray, setIsLoading } = useAppContext();
  const filterData = newsArray?.filter((item) => {
    if (Number(item.category_id) !== Number(id)) {
      return item;
    } else {
      return Number(item.category_id) !== Number(id);
    }
  });

  return (
    <section className="">
      <div className=" flex flex-col items-center">
        {filterData?.map((news, index) => (
          <div
            key={index}
            className=" my-6 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="flex items-center p-4 bg-zinc-100">
              <img
                src={news?.author.img}
                alt={news?.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h3 className="text-gray-900 font-medium ">
                  {news?.author.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {new Date(news?.author.published_date).toLocaleDateString()}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <button className=" text-gray-400 hover:text-gray-600">
                  <CiBookmark size={25} />
                </button>
                <button className=" text-gray-400 hover:text-gray-600">
                  <FaShareAlt size={20} />
                </button>
              </div>
            </div>

            <h2 className="px-4 my-5 text-xl font-bold text-gray-900">
              {news?.title}
            </h2>
            <img
              src={news?.image_url}
              alt="News Thumbnail"
              className="w-full  mt-3"
            />

            <p className="p-4 text-gray-600 text-sm">
              {news?.details.slice(0, 400)}...
              <Link
                to={`/news/details/${news?._id}`}
                className="text-blue-500 ml-1"
              >
                Read More
              </Link>
            </p>

            <div className="px-4 pb-4 flex items-center justify-between border-t border-gray-200">
              <div className="flex items-center py-5">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={
                        i < Math.round(news?.rating.number)
                          ? "#FBBF24"
                          : "#E5E7EB"
                      }
                    />
                  ))}
                </div>
                <p className="ml-2 text-gray-700 font-semibold">
                  {news?.rating.number}
                </p>
              </div>
              <div className="flex items-center text-gray-500">
                <FaEye className="mr-1" />
                <span>{news?.total_view}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category_news;
