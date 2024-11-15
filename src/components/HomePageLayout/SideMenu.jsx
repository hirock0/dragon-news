import { useAppContext } from "../../ContextApiProvider";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";

const SideMenu = () => {
  const { categoryFlag, setCategoryFlag, categoryFlag2, setCategoryFlag2 } =
    useAppContext();

  return (
    <div
      className={` sticky top-[90px] h-12 bg-white lg:hidden max-lg:flex max-lg:items-center max-lg:justify-between container mx-auto px-5 `}
    >
      <button
        onClick={(e) => {
          e.stopPropagation(),
            setCategoryFlag(!categoryFlag),
            setCategoryFlag2(false);
        }}
        className="  text-white"
      >
        <RiMenuFold2Line className=" text-black" size={25} />
      </button>
      {/* ------------------------------------------- */}
      <button
        onClick={(e) => {
          e.stopPropagation(),
            setCategoryFlag2(!categoryFlag2),
            setCategoryFlag(false);
        }}
        className="  text-white"
      >
        <RiMenuUnfold2Line className=" text-black" size={25} />
      </button>
    </div>
  );
};

export default SideMenu;
