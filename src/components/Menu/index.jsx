import { Link } from "react-router-dom";
import { ContainerMenu } from "./style";

const Menu = () => {
  return (
    <div>
      <ContainerMenu>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/casamento">
          <h3>Casamento</h3>
        </Link>
        <Link to="/formatura">
          <h3>Formatura</h3>
        </Link>
        <Link to="/confraternizacao">
          <h3>Confraternização</h3>
        </Link>
      </ContainerMenu>
    </div>
  );
};
export default Menu;
