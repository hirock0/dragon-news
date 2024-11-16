import { useParams } from "react-router-dom";
import RightAside from "../../components/HomePageLayout/RightAside";
import TopHeader from "../../components/TopHeader/TopHeader";
import { useAppContext } from "../../ContextApiProvider";
import { IoMdMenu } from "react-icons/io";
const NewsDetails = () => {
  const params = useParams();
  const Id = params.id || "";
  const { newsArray, sideNavFlag, setSideNavFlag } = useAppContext();
  const filterNews = newsArray?.filter((item) => item._id == Id);
  const details = filterNews[0];

  return (
    <main className="">
      <div className="">
        <TopHeader />
        <div className=" my-5 flex justify-end lg:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation(), setSideNavFlag(!sideNavFlag);
            }}
            className=" "
          >
            <IoMdMenu size={25} />
          </button>
        </div>
        <div className=" flex gap-5 justify-between ">
          <div className="  flex flex-col w-4/6 max-lg:w-full  ">
            <img src={details?.image_url} alt="" />
            <h1 className=" mt-5 font-semibold text-xl">{details?.title}</h1>
            <p className=" mt-3">{details?.details}</p>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className={`forScrollBar  ${
              !sideNavFlag
                ? "max-lg:translate-x-full max-lg:hidden"
                : " max-lg:translate-x-0 max-lg:block max-lg:absolute max-lg:right-0 max-lg:bg-white"
            } max-lg:transition-all max-lg:h-[75vh] max-lg:overflow-y-scroll p-5 border w-2/6 max-md:w-3/6 max-sm:w-4/6 flex items-center justify-center `}
          >
            <RightAside />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsDetails;
