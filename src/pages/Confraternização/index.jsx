import { useContext } from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { ConfraternizacaoContext } from "../../providers/confraternizacao";

const Confraternizacao = () => {
  const { confraternizacao, removeFromConfraternizacao } = useContext(
    ConfraternizacaoContext
  );

  return (
    <div>
      <Header />
      <Menu />
      <ProductList
        event={confraternizacao}
        remove={removeFromConfraternizacao}
        type="confraternizacao"
      />
    </div>
  );
};
export default Confraternizacao;
