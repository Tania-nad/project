import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState("");

  const handleClickInput = (valueInput) => {
    console.log(valueInput);
    setMenu(valueInput);
  };

  return (
    <>
      <Header onClickInput={handleClickInput} menuInput={menu} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
