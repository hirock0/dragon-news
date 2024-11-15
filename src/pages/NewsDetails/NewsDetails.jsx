import { useParams } from "react-router-dom";
import RightAside from "../../components/HomePageLayout/RightAside";
import TopHeader from "../../components/TopHeader/TopHeader";
import { useAppContext } from "../../ContextApiProvider";
const NewsDetails = () => {
  const params = useParams();
  const Id = params.id || "";
  const { newsArray } = useAppContext();
  const filterNews = newsArray?.filter((item) => item._id == Id);
  const details = filterNews[0];
  return (
    <main className="">
      <div className="">
        <TopHeader />
        <div className=" flex gap-5">
          <div className=" w-full flex flex-col ">
            <img src={details?.image_url} alt="" />
            <h1 className=" mt-5 font-semibold text-xl">{details?.title}</h1>
            <p className=" mt-3">{details?.details}</p>
          </div>
          <div className="">
            <RightAside />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsDetails;
