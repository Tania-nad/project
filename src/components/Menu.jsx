import "../scss/layout/_menu.scss";
import PropTypes from "prop-types";

function Menu({ isOpen }) {
  return (
    <>
      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#sobre-mi">About me</a>
          </li>
          <li>
            <a href="#proyectos">Projects</a>
          </li>
          <li>
            <a href="#habilidades">Skills</a>
          </li>
          <li>
            <a href="#mas-info">Contact</a>
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
