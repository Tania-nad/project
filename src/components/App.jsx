import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuBurguer = () => {
    setIsOpen(!isOpen); // Cambiar el estado de isOpen
  };

  const handleChangeName = (value) => {
    setForm({ ...form, name: value });
  };
  const handleChangeEmail = (value) => {
    setForm({ ...form, email: value });
  };
  const handleChangeTitle = (value) => {
    setForm({ ...form, title: value });
  };
  const handleChangeMessage = (value) => {
    setForm({ ...form, message: value });
  };

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
        isOpen={isOpen}
        toggleMenuBurguer={toggleMenuBurguer}
      />

      <Main
        text={text}
        onChangeName={handleChangeName}
        onChangeEmail={handleChangeEmail}
        onChangeTitle={handleChangeTitle}
        onChangeMessage={handleChangeMessage}
      />

      <Footer />
    </>
  );
}

export default App;
