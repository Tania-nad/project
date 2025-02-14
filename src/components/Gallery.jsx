import "../scss/layout/_gallery.scss";
import Me from "../images/PHOTO.jpg";
import Scrum from "../images/scrum.jpg";
import Turron from "../images/turron.jpg";
import Veleta from "../images/veleta.jpg";
import Apple from "../images/apple.jpg";

function Gallery() {
  return (
    <section className="section">
      <img className="gallery-image" src={Me} alt="developer" />
      <img className="gallery-image" src={Scrum} alt="scrum" />
      <img className="gallery-image" src={Turron} alt="dog" />
      <img className="gallery-image" src={Veleta} alt="mountain" />
      <img className="gallery-image" src={Apple} alt="computer" />
    </section>
  );
}

export default Gallery;
