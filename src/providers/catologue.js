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
      .then((Response) => setCatalogue(Response.data));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
