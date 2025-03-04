import "../scss/layout/_projects.scss";
import Brains from "../images/BrilliantBrains.png";
import Infinito from "../images/Infinito.png";
import Morty from "../images/Rick&Morty.png";
import Naruto from "../images/Naruto.png";

function Projects() {
  return (
    <>
      <h1 className="project-title">
        Some of the works I´ve been involved in...
      </h1>
      <div className="container">
        <div>
          <h3 className="project-title-box">
            <a
              href="https://tania-nad.github.io/project-promo-a-module-3-team-3/"
              className="project-title-box"
              target="blank"
            >
              Brilliant Brains (proyecto grupal)🔗
            </a>
          </h3>
          <div>
            <img
              className="container-image"
              src={Brains}
              alt="Brilliant Brains"
            />
          </div>
        </div>
        <div>
          <h3 className="project-title-box">
            <a
              href="https://nuria8890.github.io/ADALAB-project-module-2-team-3-HastaElInfinito/"
              className="project-title-box"
              target="blank"
            >
              Hasta el infinito (proyecto grupal)🔗
            </a>
          </h3>

          <div>
            <img
              className="container-image"
              src={Infinito}
              alt="Hasta el infinito"
            />
          </div>
        </div>
        <div className="second-row">
          <div className="project-4">
            <h3 className="project-title-box">
              <a
                href="https://beta.adalab.es/modulo-3-evaluacion-final-Tania-nad/"
                className="project-title-box"
                target="blank"
              >
                Rick&Morty🔗
              </a>
            </h3>
            <img className="container-image" src={Morty} alt="Rick and Morty" />
          </div>
          <div className="project-5">
            <h3 className="project-title-box">
              <a
                href="http://127.0.0.1:5501/index.html"
                className="project-title-box"
                target="blank"
              >
                Buscador de series de anime 🔗
              </a>
            </h3>
            <img className="container-image" src={Naruto} alt="Anime Series" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
