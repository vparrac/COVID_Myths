import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Menu from "./components/Menu";
import Pregunta from "./components/Pregunta";

function App() {
  const [hayUsuario, sethayUsuario] = useState(false);
  const [q, setq] = useState("JOA");
  const listarNoticias = (noticiass) => {
    return noticiass.map((elem) => {
      console.log(elem);
      return (
        <Pregunta
          key={elem._id}
          title={elem.titulo}
          contenido={elem.contenido}
          usuario={elem.user}
        ></Pregunta>
      );
    });
  };
  useEffect(() => {
    fetch("/preguntas/getPreguntas", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        const nn = listarNoticias(json);
        console.log(nn);
        setq(nn);
      });
  }, [hayUsuario]);

  return (
    <div>
      {hayUsuario ? (
        <Menu user={hayUsuario} q={q}></Menu>
      ) : (
        <Navbar setUsuario={sethayUsuario}></Navbar>
      )}
    </div>
  );
}

export default App;
