import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProductList from "../../components/ProductList";
import { CatalogueContext } from "../../providers/catologue";
import { useContext } from "react";

const Home = () => {
  const { catalogue } = useContext(CatalogueContext);
  return (
    <div>
      <Header />
      <Menu />
      <ProductList event={catalogue} type="Home" />
    </div>
  );
};
export default Home;
