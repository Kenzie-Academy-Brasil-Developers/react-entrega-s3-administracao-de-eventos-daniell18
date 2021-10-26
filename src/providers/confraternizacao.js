// fazer os imports
import { createContext, useEffect, useState } from "react";

// criar o context
export const ConfraternizacaoContext = createContext([]);

// criar o provider
export const ConfraternizacaoProvider = ({ children }) => {
  const [confraternizacao, setConfraternizacao] = useState([]);

  // criar a lógica para adicionar
  const addToConfraternizacao = (item) => {
    setConfraternizacao([...confraternizacao, item]);

  };

  // criar a lógica para remover
  const removeFromConfraternizacao = (id) => {
    const newConfraternizacao = confraternizacao.filter(
      (itemOnConfraternizacao) => itemOnConfraternizacao.id !== id
    );
    setConfraternizacao(newConfraternizacao);
   
  };
  useEffect(() => {
    if(confraternizacao.length>0){
    localStorage.setItem("Kenzie:confraternizacao",JSON.stringify(confraternizacao))
  }
  }, [confraternizacao])
  return (
    <ConfraternizacaoContext.Provider
      value={{
        confraternizacao,
        addToConfraternizacao,
        removeFromConfraternizacao,
        setConfraternizacao
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};
