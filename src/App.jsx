import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeadLine_News from "./components/HeadLine_News/HeadLine_News";
import LeftAside from "./components/HomePageLayout/LeftAside";
import RightAside from "./components/HomePageLayout/RightAside";
import NavBar from "./components/NavBar/NavBar";
import { useAppContext } from "./ContextApiProvider";
import SideMenu from "./components/HomePageLayout/SideMenu";

const App = () => {
  const { categoryFlag, scrollFlag, categoryFlag2 } = useAppContext();

  return (
    <div className="">
      <div className=" container mx-auto px-5">
        <div className=" pt-5 ">
          <div className="text-center ">
            <div className=" flex items-center justify-center mb-5">
              <img src="/assets/logo.png" alt="logo" className=" " />
            </div>

            <h1>Journalism Without or Favour</h1>
            <h1>
              <span>Sunday</span>, November 24, 2025
            </h1>
          </div>
          <div className=" bg-zinc-100 my-5 flex gap-5 items-center p-2">
            <button className=" bg-red-500 p-2 text-white">Latest</button>
            <div className=" overflow-hidden">
              <HeadLine_News />
            </div>
          </div>
        </div>
        <NavBar />
        <SideMenu />
        <main className="  ">
          <div className=""></div>
          <div className="max-lg:flex-col flex gap-5 max-lg:gap-0  ">
            <aside
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`  max-lg:flex `}
            >
              <div
                className={` forScrollBar ${
                  !categoryFlag
                    ? " max-lg:-translate-x-full"
                    : "max-lg:translate-x-0"
                } ${
                  scrollFlag && " max-lg:top-[138px]"
                } max-lg:fixed  max-lg:overflow-y-scroll max-lg:backdrop:filter  max-lg:backdrop-blur-3xl max-lg:py-5 max-lg:pb-52 max-lg:max-h-screen max-lg:left-0 max-lg:transition-all max-lg:px-10 max-sm:px-5 max-lg:w-1/2`}
              >
                <LeftAside />
              </div>

              <div
                className={` forScrollBar ${
                  !categoryFlag2
                    ? " max-lg:translate-x-full"
                    : "max-lg:translate-x-0"
                } ${
                  scrollFlag && " max-lg:top-[138px]"
                }  max-lg:fixed  max-lg:right-0  max-lg:transition-all max-lg:overflow-y-scroll max-lg:backdrop:filter  max-lg:backdrop-blur-3xl  max-lg:py-5  max-lg:max-h-screen max-lg:pb-52   lg:hidden bg-white max-sm:text-sm px-5 max-lg:w-1/2`}
              >
                <RightAside />
              </div>
            </aside>

            <div>
              <Outlet />
            </div>
            <aside className="  max-lg:hidden ">
              <RightAside />
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
