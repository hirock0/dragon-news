import { NavLink } from "react-router-dom";
import { useAppContext } from "../../ContextApiProvider";
import { useEffect } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const path = useLocation();
  const pathname = path.pathname;
  const validatePath = pathname == "/login" || pathname == "/register";
  const { setScrollFlag, navFlag, setNavFlag, catId } = useAppContext();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollFlag(true);
      } else {
        setScrollFlag(false);
      }
    };

    const remove = window.addEventListener("scroll", handleScroll);
    return () => {
      remove, handleScroll();
    };
  }, []);

  return (
    <nav
      className={`${
        validatePath ? " bg-none" : " bg-white"
      } sticky top-0 max-lg:flex-col  z-50 flex items-center py-5 `}
    >
      {/* ------------- */}
      <div className=" flex items-center justify-between relative">
        <div className=" flex items-center gap-5">
          <button
            onClick={(e) => {
              e.stopPropagation(), setNavFlag(!navFlag);
            }}
            className=" md:hidden"
          >
            <RxHamburgerMenu size={25} />
          </button>
          <div className=" ">logo</div>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className={` ${
            !navFlag ? " max-md:-translate-x-32" : " max-md:translate-x-0"
          } max-md:transition-all max-md:absolute max-md:-left-5  max-md:top-16 max-md:bg-white max-md:shadow-lg max-md:rounded-sm  `}
        >
          <ul className="  flex items-center gap-5 max-md:flex-col max-md:p-5">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/career"}>
              <li>Career</li>
            </NavLink>
          </ul>
        </div>
        <div className=" flex items-center gap-3">
          <div className=" flex items-center gap-5 max-sm:gap-2">
            <PiUserCircleFill size={50} className=" max-sm:w-10" />
            <NavLink
              to={"/login"}
              className=" bg-slate-800 text-white px-5 py-2 max-sm:px-3 max-sm:py-1 "
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
