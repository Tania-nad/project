import Menu from "./Menu";
import burguer from "../images/transparent-menu.jpg";
import spainFlag from "../images/Spain2.jpg";
import englandFlag from "../images/England.jpg";
import "../scss/layout/_header.scss";
import "../scss/core/_variables.scss";

import PropTypes from "prop-types";

/*
  Cuando la usuaria haga click en la imagen:
    muestro el menú desplegable
*/

function Header(props) {
  //código de JS puro
  const handleClick = () => {
    props.onClickInput("Menú completo");
  };

  return (
    <header className="header">
      <div>
        <img
          className="header__logo"
          src={burguer}
          alt="menu"
          onClick={handleClick}
        />
        <h5>{props.menuInput}</h5>
      </div>

      <div className="flags">
        <img className="Spain" src={spainFlag} alt="Spain" />
        <img className="England" src={englandFlag} alt="England" />
      </div>
    </header>
  );
}

export default Header;
