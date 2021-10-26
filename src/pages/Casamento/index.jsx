import { useContext } from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { CasamentoContext } from "../../providers/casamento";

const Casamento = () => {
  const { casamento, removeFromCasamento,setCasamento } = useContext(CasamentoContext);
  let reNew=JSON.parse(localStorage.getItem("Kenzie:casamento"))||casamento
  if(reNew===-99){
    reNew=casamento
  }
  return (
    <div>
      <Header filtro={reNew} update={setCasamento} />
      <Menu />
      <ProductList
        event={reNew}
        remove={removeFromCasamento}
        type="casamento"
      />
    </div>
  );
};
export default Casamento;
