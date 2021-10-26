// fazer os imports
import { createContext, useState } from "react";

// criar o context
export const FormaturaContext = createContext([]);

// criar o provider
export const FormaturaProvider = ({ children }) => {
  const [formatura, setFormatura] = useState([]);

  // criar a lógica para adicionar
  const addToFormatura = (item) => {
    setFormatura([...formatura, item]);
   
    localStorage.setItem("Kenzie:formatura",JSON.stringify(formatura))
  };

  // criar a lógica para remover
  const removeFromFormatura = (id) => {
    const newFormatura = formatura.filter(
      (itemOnFormatura) => itemOnFormatura.id !== id
    );
    localStorage.setItem("Kenzie:formatura",JSON.stringify(newFormatura))
    setFormatura(newFormatura);
  };

  return (
    <FormaturaContext.Provider
      value={{ formatura, addToFormatura, removeFromFormatura,setFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
