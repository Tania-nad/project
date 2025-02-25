import PropTypes from "prop-types";
import Menu from "./Menu";
import menu from "../images/menu.png";
import "../scss/layout/_header.scss";
import "../scss/core/_variables.scss";

/*
  Cuando la usuaria haga click en la imagen:
    muestro el menú desplegable
*/

function Header({ isOpen, toggleMenuBurguer, color }) {
  //código de JS puro

  return (
    <header className={color ? "header header-bg" : "header"}>
      <button className="burguer" onClick={toggleMenuBurguer}>
        <img src={menu} alt="menu-burguer" className="burguer-image" />
      </button>
      <Menu isOpen={isOpen} />

      <ul className="list">
        <div className="list-items">
          <a href="#sobre-mi">
            <li className="list-elements">About me</li>
          </a>

          <a href="#proyectos">
            <li className="list-elements">Projects</li>
          </a>
          <a href="#habilidades">
            <li className="list-elements">Skills</li>
          </a>
          <a href="#mas-info">
            <li className="list-elements">Contact</li>
          </a>
        </div>
      </ul>
    </header>
  );
}

export default Header;

Header.propTypes = {
  onClickInput: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleMenuBurguer: PropTypes.func.isRequired,
  color: PropTypes.bool.isRequired,
};
