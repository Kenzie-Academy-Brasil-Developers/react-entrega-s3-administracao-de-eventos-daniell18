import { ContainerHeader } from "./style";
import LogoHeader from "./LogoHeader.png";

const Header = () => {
  return (
    <div>
      <ContainerHeader>
        <img src={LogoHeader} alt="logo" />
        <div>
          <input />
          <button>Search</button>
        </div>
      </ContainerHeader>
    </div>
  );
};
export default Header;
