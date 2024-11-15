import { NavLink } from "react-router-dom";
import { useAppContext } from "../../ContextApiProvider";
import { CiCalendar } from "react-icons/ci";

const LeftAside = () => {
  const { newsArray, categories, isLoading } = useAppContext();

  return (
    <div className={``}>
      <h1 className=" text-xl font-semibold">All Category</h1>
      <div className="flex flex-col gap-5 p-5 max-sm:p-0 max-sm:gap-2">
        {!isLoading &&
          categories?.map((category, index) => (
            <NavLink to={`/category_news/${category.id}`} key={index}>
              <button className=" text-nowrap max-lg:text-sm">{category?.name}</button>
            </NavLink>
          ))}
      </div>
      <div className=" grid grid-cols-1 gap-5">
          {newsArray?.map((item, index) => {
            if (!item?.others_info.is_trending) {
              return (
                <div key={index} className=" border text-sm shadow-lg  flex flex-col items-center">
                  <img src={item?.thumbnail_url} alt={item?.title} className="" />
                  <div className=" px-3 mt-3 flex flex-col items-center">
                    <h1 className=" text-center  font-semibold ">{item?.title}</h1>
                    <div className=" pb-2 flex items-center gap-2 max-lg:gap-5 mt-2">
                      <h1>Sport</h1>
                      <div className=" flex items-center gap-1">
                        <CiCalendar />
                        <h1>Jan 04,2024</h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default LeftAside;
