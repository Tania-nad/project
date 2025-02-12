import PropTypes from "prop-types";
import arrow from "../images/arrow.png";
import burguer from "../images/circle.png";
import "../scss/layout/_header.scss";
import "../scss/core/_variables.scss";

/*
  Cuando la usuaria haga click en la imagen:
    muestro el menú desplegable
*/

function Header({ menuVisible, toggleMenu }) {
  //código de JS puro

  return (
    <header className="header">
      <img className="burguer" src={burguer} alt="burguer-menu" />
      <h1 className="visible-language">EN/ES</h1>
      <ul className="list">
        <div className="list-items">
          <a href="#sobre-mi">
            <li className="list-elements">Sobre mi</li>
          </a>
          <a href="#proyectos">
            <li className="list-elements">Proyectos</li>
          </a>
          <a href="#habilidades">
            <li className="list-elements">Habilidades</li>
          </a>
          <a href="#mas-info">
            <li className="list-elements">¿Más info?</li>
          </a>
        </div>
      </ul>

      <div className="flags">
        {/* <img className="Spain" src={spainFlag} alt="Spain" />
        <img className="England" src={englandFlag} alt="England" /> */}

        <p className="language" onClick={toggleMenu}>
          ES
        </p>
        <img
          className="symbol"
          src={arrow}
          alt="drop-down"
          onClick={toggleMenu}
        />

        {menuVisible && (
          <ul className="lang-list">
            <li className="lang-list">EN</li>
            <li className="lang-list">ES</li>
          </ul>
        )}
      </div>
    </header>
  );
}
Header.propTypes = {
  onClickInput: PropTypes.func.isRequired,
  menuInput: PropTypes.string.isRequired,
};

export default Header;

Header.propTypes = {
  menuVisible: PropTypes.bool.isRequired, // La propiedad 'menuVisible' debe ser un booleano
  toggleMenu: PropTypes.func.isRequired, // La propiedad 'toggleMenu' debe ser una función
};
