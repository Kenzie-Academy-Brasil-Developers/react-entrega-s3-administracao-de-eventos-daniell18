import { useContext } from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { FormaturaContext } from "../../providers/formatura";
const Formatura = () => {
  const { formatura, removeFromFormatura } = useContext(FormaturaContext);

  return (
    <div>
      <Header />
      <Menu />
      <ProductList
        event={formatura}
        remove={removeFromFormatura}
        type="formatura"
      />
    </div>
  );
};
export default Formatura;
