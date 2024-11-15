import { createContext, useContext, useEffect, useState } from "react";

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

  const onLogin = (e) => {
    e.preventDefault();
  };

  const onRegister = (e) => {
    e.preventDefault();
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
