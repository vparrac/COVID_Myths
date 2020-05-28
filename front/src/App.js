import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Menu from "./components/Menu";
import Pregunta from "./components/Pregunta";

function App() {
  const [hayUsuario, sethayUsuario] = useState(false);
  const [q, setq] = useState("");
  const [show, setShow] = useState(false);



  return (
    <div>
      {hayUsuario ? (
        <Menu user={hayUsuario} q={q} setUser={sethayUsuario}></Menu>
      ) : (
        <Navbar setUsuario={sethayUsuario}></Navbar>
      )}
    </div>
  );
}

export default App;
