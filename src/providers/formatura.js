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
  };

  // criar a lógica para remover
  const removeFromFormatura = (id) => {
    const newFormatura = formatura.filter(
      (itemOnFormatura) => itemOnFormatura.id !== id
    );

    setFormatura(newFormatura);
  };

  return (
    <FormaturaContext.Provider
      value={{ formatura, addToFormatura, removeFromFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};
