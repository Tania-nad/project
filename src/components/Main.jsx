import "../scss/layout/_main.scss";
import photo from "../images/PHOTO.jpg";

function Main() {
  return (
    <div className="main">
      <section className="title">
        <h1>TANIA NADALES</h1>
        <h3>Web Developer</h3>
      </section>
      <section>
        <img className="photo" src={photo} alt="author" />
      </section>
    </div>
  );
}

export default Main;
