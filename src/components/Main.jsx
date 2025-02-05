import "../scss/layout/_main.scss";

import Gallery from "./Gallery";

function Main() {
  return (
    <div className="main">
      <section className="title">
        <h1 className="title-name">TANIA NADALES</h1>
        <h3>Web Developer</h3>
      </section>
      <section>
        <div>
          <Gallery />
        </div>
      </section>
    </div>
  );
}

export default Main;
