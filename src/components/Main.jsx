import "../scss/layout/_main.scss";
import photo from "../images/PHOTO.jpg";

function Main() {
  return (
    <div className="main">
      <section className="title">
        <h1 className="title-name">TANIA NADALES</h1>
        <h3>Web Developer</h3>
      </section>
      <section>
        <div className="photo-container">
          <img className="photo" src={photo} alt="author" />
        </div>
      </section>
    </div>
  );
}

export default Main;
