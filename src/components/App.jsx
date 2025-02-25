import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import image from "../images/PHOTO.jpg";
import image2 from "../images/apple.jpg";
import image3 from "../images/scrum.jpg";
import image4 from "../images/veleta.jpg";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  //barra nav visible al hacer scroll down
  const [color, setColor] = useState(false);
  //estado para saber si las skills deben mostrarse
  const [showSquares, setShowSquares] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [imageUrl, setImageUrl] = useState(image);
  const [isFlipping, setIsFlipping] = useState(false); // Para controlar el estado de la animación

  // Función para cambiar la imagen aleatoriamente
  const changeImage = useCallback(() => {
    const imageUrls = [image2, image3, image4];

    setIsFlipping(true); // Activa el flip
    setTimeout(() => setIsFlipping(false), 1000); // Desactiva el flip después de 1 segundo (duración de la animación)

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setImageUrl(imageUrls[randomIndex]);
  }, []); // Ya no es necesario poner imageUrls como dependencia

  // Efecto para cambiar la imagen cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeImage(); // Cambia la imagen automáticamente
    }, 2000); // 2 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando se desmonte el componente
  }, [changeImage]); // Ahora changeImage es una dependencia

  //botón de scroll hacia arriba
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Lógica para detectar el scroll
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Esta función de retorno se ejecuta cuando el componente se desmonta o el efecto se vuelve a ejecutar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const fullText = "Hi there! I´m Tania, fullstack developer.";

  const handleClickInput = (valueInput) => {
    console.log(valueInput);
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

  // Función que maneja el evento de scroll
  const handleScroll = () => {
    const section = document.getElementById("target-section");
    const sectionPosition = section.getBoundingClientRect();

    // Si la sección está visible en la ventana del navegador, mostramos los cuadrados
    if (
      sectionPosition.top <= window.innerHeight &&
      sectionPosition.bottom >= 0
    ) {
      setShowSquares(true);
    } else {
      setShowSquares(false);
    }
  };

  // Usamos useEffect para agregar y eliminar el listener de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        onClickInput={handleClickInput}
        isOpen={isOpen}
        toggleMenuBurguer={toggleMenuBurguer}
        color={color}
      />
      <main>
        <Main
          text={text}
          onChangeName={handleChangeName}
          onChangeEmail={handleChangeEmail}
          onChangeTitle={handleChangeTitle}
          onChangeMessage={handleChangeMessage}
          showScrollToTop={showScrollToTop}
          scrollToTop={scrollToTop}
          imageUrl={imageUrl}
          isFlipping={isFlipping}
          showSquares={showSquares}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
