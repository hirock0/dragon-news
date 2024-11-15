import moment from "moment";
import HeadLine_News from "../HeadLine_News/HeadLine_News";
const TopHeader = () => {
  return (
    <div className=" pt-5 ">
      <div className="text-center ">
        <div className=" flex items-center justify-center mb-5">
          <img src="/assets/logo.png" alt="logo" className=" " />
        </div>

        <h1>Journalism Without or Favour</h1>
        <h1 className=" font-semibold">
          {moment().format("dddd,MMM Do,YYYY")}
        </h1>
      </div>

      <div className=" bg-zinc-100 my-5 flex gap-5 items-center p-2">
        <button className=" bg-red-500 p-2 text-white">Latest</button>
        <div className=" overflow-hidden">
          <HeadLine_News />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
