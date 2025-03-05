import "../scss/layout/_main.scss";
import Projects from "./Projects";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import MovingTitles from "./MovingTitles";
import wordpress from "../images/wordpress.webp";
import python from "../images/python.webp";
import cyber from "../images/cybersecurity.webp";

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
      <section className="landing-section">
        <img
          src={imageUrl}
          alt="Imagen Giratoria"
          className={`flipping-image ${isFlipping ? "flip" : ""}`}
        />
        <MovingTitles />
      </section>

      <section id="sobre-mi" className="about-me">
        <h1 className="about-me-title">About me</h1>
        <p className="about-me-parag">
          Welcome to my page. My name is Tania and I am a full stack web
          developer passionate about new learnings, challenges that may come my
          way, and an adventurer in all aspects of life. My motto is: the harder
          it gets, the more I push myself and obsess over achieving it (wait, is
          that a good thing?). I did not get here by chance. My academic and
          professional background is quite broad. It all started with a passion
          for languages and different cultures, which led me not only to study
          Translation and Interpreting (I could easily pictured myself at the UN
          translating Kofi Annan speeches at the age of 16), but also to leave
          my home country to study, work, and hope for the best. In the search
          for new challenges, I fell headfirst into the world of technology and
          fell in love with programming and its many possibilities. I started
          with my school,{" "}
          <a className="adalab-link" href="https://adalab.es/" target="blank">
            Adalab
          </a>
          , and have continued learning and developing new languages on my own.
          Have I kept your attention so far? Scroll down ;)
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
                <h1 className="tech-skills-title">Technical skills</h1>
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
                    <i className="fa-solid fa-circle-check"></i>Organization
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="also-learning">
            <h1>Also learning...</h1>
            <div className="also-learning-squares">
              <div className="wordpress-section">
                <h2>Practical Wordpress</h2>
                <h3>Platzi</h3>
                <img
                  className="wordpress"
                  src={wordpress}
                  alt="wordpress platzi course"
                />
              </div>
              <div className="python-section">
                <h2>Fundamental Python</h2>
                <h3>Platzi</h3>
                <img
                  className="python"
                  src={python}
                  alt="python platzi course"
                />
              </div>
              <div className="cyber-section">
                <h2>Cybersecurity Certificate</h2>
                <h3>Google/Coursera</h3>
                <img className="cyber" src={cyber} alt="cybersecurity course" />
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
        <div className="info-intro">
          <h1 className="info-title">Contact</h1>
          <p className="questions">Let´s get in touch!</p>
          <i className="fa-solid fa-comments arrow"></i>
        </div>

        <section className="complete-contact-info">
          <div className="contact-info">
            <h1>You can either find me here:</h1>
            <p className="email-dot">
              <i className="fa-regular fa-envelope"></i>
              nadsanp@gmail.com
            </p>
            <div className="networks">
              <p className="linkedin-dot">
                <a
                  href="https://www.linkedin.com/in/tania-nadales-704208302/"
                  target="blank"
                  className="linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </p>
              <p className="github-dot">
                <a
                  href="https://github.com/Tania-nad"
                  target="blank"
                  className="github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
            <h1 className="lines">
              Or you can drop some lines. Make sure you type your name and email
              so I can contact you back.
            </h1>
          </div>

          <div>
            <ContactForm />
          </div>
        </section>

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
  showSquares: PropTypes.bool.isRequired,
};

export default Main;
