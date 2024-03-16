import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const urlAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [dataDB, setDataDB] = useState([]);

  const fetchData = useCallback(() => {
    setLoading(true);
    fetch(`${urlAPI}${search}`)
      .then((res) => res.json())
      .then((data) => {
        setDataDB(data.drinks);
        setLoading(false);
      })
      .catch((err) => console.log(`Something went wrong in API ${err}`));
  }, [search]); // Empty dependency array because we don't have any dependencies for fetchData

  useEffect(() => {
    fetchData(); // Call the fetchData function
  }, [fetchData]);

  return (
    <AppContext.Provider value={{ dataDB, loading, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
