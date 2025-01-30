import PropTypes from "prop-types";
import burguer from "../images/transparent-menu.jpg";
import spainFlag from "../images/Spain2.jpg";
import englandFlag from "../images/England.jpg";
import "../scss/layout/_header.scss";
import "../scss/core/_variables.scss";

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
      {/* <div>
        <img
          className="header__logo"
          src={burguer}
          alt="menu"
          onClick={handleClick}
        />
      </div> */}

      <ul className="list">
        <div className="list-items">
          <li className="list-elements">Sobre mi</li>
          <li className="list-elements">Proyectos</li>
          <li className="list-elements">Habilidades</li>
          <li className="list-elements">¿Más info?</li>
        </div>
      </ul>

      <div className="flags">
        <img className="Spain" src={spainFlag} alt="Spain" />
        <img className="England" src={englandFlag} alt="England" />
      </div>
    </header>
  );
}
Header.propTypes = {
  onClickInput: PropTypes.func.isRequired,
  menuInput: PropTypes.string.isRequired,
};

export default Header;
