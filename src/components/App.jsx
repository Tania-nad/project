import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const fullText = "Hi there! Soy Tania, fullstack developer.";

  const handleClickInput = (valueInput) => {
    console.log(valueInput);
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    if (index < fullText.length) {
      const interval = setInterval(() => {
        setText((prevText) => prevText + fullText[index]); // Agregar una letra al texto
        setIndex((prevIndex) => prevIndex + 1); // Incrementar el índice
      }, 50); // Velocidad de la animación en milisegundos

      return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }
  }, [index]); // Este efecto se ejecuta cada vez que el índice cambia
  return (
    <>
      <Header
        onClickInput={handleClickInput}
        menuVisible={menuVisible}
        toggleMenu={toggleMenu}
      />

      <Main text={text} />

      <Footer />
    </>
  );
}

export default App;
