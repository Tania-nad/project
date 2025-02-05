import "../scss/layout/_gallery.scss";
import Me from "../images/PHOTO.jpg";
import Scrum from "../images/scrum.jpg";
import Turron from "../images/turron.jpg";
import Veleta from "../images/veleta.jpg";
import Apple from "../images/apple.jpg";

function Gallery() {
  return (
    <section className="section">
      <img src={Me} alt="developer" />
      <img src={Scrum} alt="scrum" />
      <img src={Turron} alt="dog" />
      <img src={Veleta} alt="mountain" />
      <img src={Apple} alt="computer" />
    </section>
  );
}

export default Gallery;
