// fazer os imports
import { createContext, useState } from "react";

// criar o context
export const ConfraternizacaoContext = createContext([]);

// criar o provider
export const ConfraternizacaoProvider = ({ children }) => {
  const [confraternizacao, setConfraternizacao] = useState([]);

  // criar a lógica para adicionar
  const addToConfraternizacao = (item) => {
    setConfraternizacao([...confraternizacao, item]);
    localStorage.setItem("Kenzie:confraternizacao",JSON.stringify(confraternizacao))
  };

  // criar a lógica para remover
  const removeFromConfraternizacao = (id) => {
    const newConfraternizacao = confraternizacao.filter(
      (itemOnConfraternizacao) => itemOnConfraternizacao.id !== id
    );
    setConfraternizacao(newConfraternizacao);
    localStorage.setItem("Kenzie:confraternizacao",JSON.stringify(confraternizacao))
  };

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
