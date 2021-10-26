import { useContext } from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { FormaturaContext } from "../../providers/formatura";
const Formatura = () => {
  const { formatura, removeFromFormatura,setFormatura } = useContext(FormaturaContext);
  let reNew=JSON.parse(localStorage.getItem("Kenzie:formatura"))||formatura
  if(reNew===-99){
    reNew=formatura
  }
  return (
    <div>
      <Header filtro={reNew} update={setFormatura}/>
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
