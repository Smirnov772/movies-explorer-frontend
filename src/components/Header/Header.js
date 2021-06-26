import { Link} from "react-router-dom";
import Navigation from '../Navigation/Navigation' ;
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";
import BurgerMenu from './BurgerMenu/BurgerMenu' ;
function Header() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <header
      className={
        location.pathname !== "/" ? "header header_style_white" : "header"
      }
    >
      <Link to="/" className="header__logo logo">
        <img src={logo} alt="Логотип" />{" "}
      </Link>
<BurgerMenu></BurgerMenu>
<Navigation></Navigation>

    </header>
  );
}

export default Header;
