import PropTypes from "prop-types";
import dropDown from "../images/drop-down.png";
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
      <ul className="list">
        <div className="list-items">
          <li className="list-elements">Sobre mi</li>
          <li className="list-elements">Proyectos</li>
          <li className="list-elements">Habilidades</li>
          <li className="list-elements">¿Más info?</li>
        </div>
      </ul>

      <div className="flags">
        {/* <img className="Spain" src={spainFlag} alt="Spain" />
        <img className="England" src={englandFlag} alt="England" /> */}
        <p className="language">ES</p>
        <img
          className="symbol"
          src={dropDown}
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
