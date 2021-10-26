// fazer os imports
import { createContext, useEffect, useState } from "react";

// criar o context
export const CasamentoContext = createContext([]);

// criar o provider
export const CasamentoProvider = ({ children }) => {
  const [casamento, setCasamento] = useState([]);

  // criar a lógica para adicionar
  const addToCasamento = (item) => {
    setCasamento([...casamento, item]);
    
  };

  // criar a lógica para remover
  const removeFromCasamento = (id) => {
    const newCasamento = casamento.filter(
      (itemOnCasamento) => itemOnCasamento.id !== id
    );
    setCasamento(newCasamento);
    
  };
  useEffect(() => {
    if(casamento.length>0){
    localStorage.setItem("Kenzie:casamento",JSON.stringify(casamento))
  }
  }, [casamento])
  return (
    <CasamentoContext.Provider
      value={{ casamento, addToCasamento, removeFromCasamento,setCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};
