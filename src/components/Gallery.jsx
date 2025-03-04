import "../scss/layout/_gallery.scss";
import Me from "../images/ME1.webp";
import Scrum from "../images/scrum.jpg";
import Turron from "../images/ME2.webp";
import Veleta from "../images/ME3.webp";

function Gallery() {
  return (
    <section className="section">
      <img className="gallery-image" src={Me} alt="developer" />
      <img className="gallery-image" src={Turron} alt="author" />
      <img className="gallery-image" src={Veleta} alt="mountain" />
      <img className="gallery-image" src={Scrum} alt="scrum" />
    </section>
  );
}

export default Gallery;
