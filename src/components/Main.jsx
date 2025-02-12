import "../scss/layout/_main.scss";
import Gallery from "./Gallery";
import Projects from "./Projects";
import PropTypes from "prop-types";

function Main({
  text,
  onChangeName,
  onChangeEmail,
  onChangeTitle,
  onChangeMessage,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado sin recarga de página");
  };
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  const handleChangeEmail = (ev) => {
    onChangeEmail(ev.target.value);
  };
  const handleChangeTitle = (ev) => {
    onChangeTitle(ev.target.value);
  };
  const handleChangeMessage = (ev) => {
    onChangeMessage(ev.target.value);
  };
  return (
    <div className="main">
      <section className="Hi">
        <h1>{text}</h1>
      </section>
      <section>
        <Gallery />
      </section>
      <section id="sobre-mi" className="about-me">
        <h1 className="about-me-title">¿Quién soy?</h1>
        <p className="about-me-parag">
          He tenido la oportunidad de explorar un campo completamente diferente
          al que había trabajado anteriormente, y he decidido quedarme en él. Mi
          nombre es Tania, y soy apasionada del desarrollo web y las
          oportunidades de aprendizaje que este trae consigo. Me formé como
          traductora, y después de vivir en tres países diferentes y
          perfeccionar mi inglés, he pasado los últimos 10 años dedicándome a la
          enseñanza de idiomas y a la gestión de equipos y proyectos. En busca
          de nuevos objetivos y experiencias de aprendizaje, comencé mi
          formación en programación web con Adalab. A través de ello, descubrí
          un mundo lleno de posibilidades, donde la innovación es constante, la
          tecnología mejora la vida diaria de los usuarios y puedes ser parte
          del cambio desde adentro. Me apasiona el trabajo en equipo, crecer y
          aprender junto a profesionales de este sector. Es por eso que busco
          unirme a una empresa donde pueda desarrollarme profesionalmente y
          expandir mi creatividad. Además... 📚 🍝 y 🎞️ como forma de vida.
        </p>
      </section>
      <section id="proyectos">
        <Projects />
      </section>
      <section id="habilidades" className="skills">
        <h1 className="skills-title">Habilidades</h1>
        <p className="skills-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          mollitia placeat dolor reprehenderit iusto earum possimus rem,
          perspiciatis veniam eaque distinctio, totam rerum aperiam fugiat
          architecto fugit! Tempora, id accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestias, sapiente. Nisi similique
          laboriosam autem nulla perspiciatis fugit, facilis voluptatum? Nobis
          quidem obcaecati deserunt architecto praesentium velit quisquam
          fugiat, possimus provident!
        </p>
        <div className="tech">
          <a
            href="https://nuria8890.github.io/ADALAB-project-module-2-team-3-HastaElInfinito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>JAVASCRIPT</h3>
          </a>
          <a
            href="https://tania-nad.github.io/project-promo-a-module-3-team-3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>REACT</h3>
          </a>

          <a
            href="https://kendaltw.github.io/sername-project-promo-A-module-1-team-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>HTML/CSS</h3>
          </a>
          <a
            href="https://kendaltw.github.io/sername-project-promo-A-module-1-team-2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>SASS</h3>
          </a>
          <a
            href="https://github.com/Tania-nad/Brilliant-Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>NODE</h3>
          </a>
          <a
            href="https://github.com/Tania-nad/Brilliant-Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>EXPRESS</h3>
          </a>
          <a
            href="https://github.com/Tania-nad/Brilliant-Brains"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>MySQL</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/tania-nadales-704208302/details/skills/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>INGLÉS</h3>
          </a>
        </div>
      </section>
      <section id="mas-info" className="info">
        <h1 className="info-title">Conéctate conmigo</h1>
        <p className="questions">
          ¿Tienes preguntas? No dudes en escribirme un mensaje rellenando el
          siguiente formulario:
        </p>
        <form className="form">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChangeName}
          />
          <label htmlFor="email">Tu email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChangeEmail}
          />
          <label htmlFor="title">Asunto</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChangeTitle}
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="textArea"
            name="message"
            id="message"
            rows="4"
            cols="50"
            placeholder="Write your message here"
            onChange={handleChangeMessage}
          ></textarea>
          <button type="submit" onClick={handleSubmit} className="button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

Main.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

export default Main;
