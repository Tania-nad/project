import "../scss/layout/_projects.scss";
import Brains from "../images/BrilliantBrains.png";
import Infinito from "../images/Infinito.png";
import Animals from "../images/techAnimals.png";
import Morty from "../images/Rick&Morty.png";
import Naruto from "../images/Naruto.png";

function Projects() {
  return (
    <>
      <h1 className="project-title">Some of my works</h1>
      <div className="container">
        <div>
          <h3 className="project-title-box">
            Brilliant Brains (proyecto grupal)🔗
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
          <h3 className="project-title-box">Hasta el infinito (grupal)🔗</h3>
          <div>
            <img
              className="container-image"
              src={Infinito}
              alt="Hasta el infinito"
            />
          </div>
        </div>
        <div>
          <h3 className="project-title-box">TechAnimals (grupal)🔗</h3>
          <img className="container-image" src={Animals} alt="TechAnimals" />
        </div>
        <div className="second-row">
          <div className="project-4">
            <h3 className="project-title-box">Rick&Morty🔗</h3>
            <img className="container-image" src={Morty} alt="Rick and Morty" />
          </div>
          <div className="project-5">
            <h3 className="project-title-box">
              Buscador de series de anime 🔗
            </h3>
            <img className="container-image" src={Naruto} alt="Anime Series" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
