import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleClickInput = (valueInput) => {
    console.log(valueInput);
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const handleMouseEnter = () => {
    setMessage("¡Has pasado el ratón sobre la palabra!");
  };
  const handleMouseLeave = () => {
    setMessage("");
  };

  return (
    <>
      <Header
        onClickInput={handleClickInput}
        menuVisible={menuVisible}
        toggleMenu={toggleMenu}
      />

      <Main onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} />
      {message && <p>{message}</p>}
      <Footer />
    </>
  );
}

export default App;
