import "../scss/layout/_main.scss";
import Projects from "./Projects";
import PropTypes from "prop-types";

function Main({
  text,
  onChangeName,
  onChangeEmail,
  onChangeTitle,
  onChangeMessage,
  showScrollToTop,
  scrollToTop,
  imageUrl,
  isFlipping,
  showSquares,
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
        <img
          src={imageUrl}
          alt="Imagen Giratoria"
          className={`flipping-image ${isFlipping ? "flip" : ""}`}
        />
      </section>

      <section id="sobre-mi" className="about-me">
        <h1 className="about-me-title">Tania...Who?</h1>
        <p className="about-me-parag">
          Welcome to my page. My name is Tania and I am a full stack web
          developer passionate about new learnings, challenges that may come my
          way, and an adventurer in all aspects of life. My motto is: the harder
          it gets, the more I push myself and obsess over achieving it (wait, is
          that a good thing?). I didn’t get here by chance. My academic and
          professional background is quite broad. It all started with a passion
          for languages and different cultures, which led me not only to study
          Translation and Interpreting (I could easily pictured myself at the UN
          translating Kofi Annan's speeches at the age of 16), but also to leave
          my home country to study, work, and hope for the best. In the search
          for new challenges, I fell headfirst into the world of technology and
          fell in love with programming and its many possibilities. I started
          with my school, Adalab, and have continued learning and developing new
          languages on my own. Have I kept your attention so far? Scroll down ;)
        </p>
      </section>
      <section id="proyectos" className="projects-section">
        <Projects />
      </section>

      <section id="habilidades" className="skills">
        <h1 className="skills-title">Skills</h1>
        <section id="target-section" className="target-section">
          <div className="tech">
            <div className={`squared-box left ${showSquares ? "show" : ""}`}>
              <div className="tech-skills-section">
                <h1>Technical skills</h1>
                <ul className="tech-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>HTML5
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>CSS3, flexbox,
                    CSS Grid, Sass
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>JavaScript
                    Vanilla
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>ES6, React
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Node, Express
                  </li>
                </ul>
              </div>
            </div>
            <div className={`squared-box right ${showSquares ? "show" : ""}`}>
              <div className="soft-skills-section">
                <h1>Soft skills</h1>
                <ul className="soft-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Languages
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Cultural
                    competence
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Team management
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Project
                    management
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Organization and
                    commitment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="mas-info" className="info">
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

        <h1 className="info-title">Wanna know more?</h1>
        <p className="questions">Let´s get in touch! You can find me here:</p>
        <div className="contact-info">
          <p className="location">
            <i className="fas fa-location-dot"></i>
            Córdoba,Spain
          </p>
          <p className="email-dot">
            <i className="fa-regular fa-envelope"></i>
            nadsanp@gmail.com
          </p>
          <p className="linkedin-dot">
            <i className="fa-brands fa-linkedin-in"></i>
            <a
              href="https://www.linkedin.com/in/tania-nadales-704208302/"
              target="blank"
              className="linkedin"
            >
              www.linkedin.com/in/tania-nadales
            </a>
          </p>
          <p className="github-dot">
            <i className="fa-brands fa-github"></i>
            <a
              href="https://github.com/Tania-nad"
              target="blank"
              className="github"
            >
              www.github.com/Tania-nad
            </a>
          </p>
        </div>

        {showScrollToTop && (
          <button
            style={buttonStyle}
            onClick={scrollToTop}
            aria-label="Volver arriba"
          >
            <i className="fa fa-arrow-up"></i>
          </button>
        )}
      </section>
    </div>
  );
}
const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#f78da7",
  color: "white",
  padding: "10px",
  borderRadius: "50%",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: "1000",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.5s ease",
  pointerEvents: "auto",
  opacity: ".9",
};

Main.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  showScrollToTop: PropTypes.bool.isRequired,
  scrollToTop: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isFlipping: PropTypes.bool.isRequired,
};

export default Main;
