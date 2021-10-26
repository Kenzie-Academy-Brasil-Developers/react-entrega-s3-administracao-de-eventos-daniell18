import axios from "axios";
import { createContext, useEffect, useState } from "react";

// criar o context
export const CatalogueContext = createContext([]);

// criar o provider
export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState();
  const getProduct = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => {setCatalogue(response.data) 
        localStorage.setItem("Kenzie:All",JSON.stringify(response.data))});
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <CatalogueContext.Provider value={{ catalogue,setCatalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
