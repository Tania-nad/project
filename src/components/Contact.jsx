import "../scss/layout/_contact.scss";

function Contact() {
  return (
    <section>
      <div className="personal-info">
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
    </section>
  );
}

export default Contact;
