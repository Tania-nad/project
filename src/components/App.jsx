import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClickInput = (valueInput) => {
    console.log(valueInput);
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Header
        onClickInput={handleClickInput}
        menuVisible={menuVisible}
        toggleMenu={toggleMenu}
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
