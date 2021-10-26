import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { CatalogueContext } from "../../providers/catologue";
import { useContext } from "react";

const Home = () => {
  const { catalogue,setCatalogue } = useContext(CatalogueContext);
  let reNew=JSON.parse(localStorage.getItem("Kenzie:All"))||catalogue

  return (
    <div>
      <Header filtro={catalogue} update={setCatalogue} />
      <Menu />
      <ProductList event={reNew} type="Home" />
    </div>
  );
};
export default Home;
