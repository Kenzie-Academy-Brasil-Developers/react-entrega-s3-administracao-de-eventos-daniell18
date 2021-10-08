import { useContext } from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { CasamentoContext } from "../../providers/casamento";

const Casamento = () => {
  const { casamento, removeFromCasamento } = useContext(CasamentoContext);

  return (
    <div>
      <Header />
      <Menu />
      <ProductList
        event={casamento}
        remove={removeFromCasamento}
        type="casamento"
      />
    </div>
  );
};
export default Casamento;
