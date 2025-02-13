import "../scss/layout/_menu.scss";
import PropTypes from "prop-types";

function Menu({ isOpen }) {
  return (
    <>
      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#sobre-mi">Sobre mi</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#mas-info">¿Más info?</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen debe ser un booleano y es obligatorio
};

export default Menu;
