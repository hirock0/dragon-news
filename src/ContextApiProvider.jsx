import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const ContextApiProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [newsArray, setNewsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [catId, setCatId] = useState("0");
  const [scrollFlag, setScrollFlag] = useState(false);
  const [categoryFlag, setCategoryFlag] = useState(false);
  const [categoryFlag2, setCategoryFlag2] = useState(false);
  const [navFlag, setNavFlag] = useState(false);
  const [sideNavFlag, setSideNavFlag] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (e) => {
    try {
      console.log(e);
    } catch (error) {
      throw new Error(error);
    }
  };

  const onRegister = (e) => {
    try {
      console.log(e);
    } catch (error) {
      throw new Error(error);
    }
  };

  const value = {
    categories,
    setCategories,
    newsArray,
    setNewsArray,
    isLoading,
    setIsLoading,
    catId,
    setCatId,
    scrollFlag,
    setScrollFlag,
    categoryFlag,
    setCategoryFlag,
    categoryFlag2,
    setCategoryFlag2,
    navFlag,
    setNavFlag,
    onLogin,
    onRegister,
    sideNavFlag,
    setSideNavFlag,
    register,
    reset,
    handleSubmit,
    errors,
  };

  useEffect(() => {
    const unsubscribe = fetch("/demo-data/all_data.json")
      .then((data) => data.json())
      .then((data) => {
        setCategories(data.categories),
          setNewsArray(data.news),
          setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });

    const windowEvent = window.addEventListener("click", () => {
      setCategoryFlag(false);
      setCategoryFlag2(false);
      setNavFlag(false);
      setSideNavFlag(false);
    });

    return () => {
      unsubscribe, windowEvent;
    };
  }, [categoryFlag]);

  return (
    <div className=" font-poppins" data-theme="light">
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
};

export default ContextApiProvider;
