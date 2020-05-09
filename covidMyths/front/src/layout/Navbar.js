import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";

const Navbar = () => {
  const [img, setimg] = useState('./img/noticias.png');
  

  return (
    <div className="container-fluid">
      <div>
      <nav class="navbar navbar-light">
          <href className="navbar-brand" to="/">
            <img
              src="logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo Aplicación"
            ></img>
          </href>

          <div className="text-right">
            <button className="btnLogin">Registrate</button>
            <button className="btnLogin" to="/registrarfiebre">
              Ingresa
            </button>
          </div>
        </nav>
      </div>
      <hr></hr>
      <Route
        path="/"
        exact
        component={() => <Home img={img} setimg={setimg}></Home>}
      ></Route>
    </div>
  );
};

export default Navbar;
