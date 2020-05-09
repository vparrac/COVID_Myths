import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import Pregunta from "./Pregunta";

const Noticias = (props) => {
  useEffect(() => {
    props.setmostrar(false);
  });
  return (
    <div>
      <div>
        <div class="sidebar">
          <a class="active" href="home">
            Home
          </a>
          <a href="#news">Noticias</a>
          <a href="#contact">Foro</a>
          <a href="#about">Pérfil</a>
        </div>

        <div class="content">
          <div className="container-fluid">
            <div className="fixed">
              <nav class="navbar navbar-light">
                <div className="navbar-brand" to="/"></div>

                <div className="text-right">
                  <button className="btnLogin">Salir</button>
                </div>
              </nav>
              <div class="card">
                <div class="card-header">Pregunta algo</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend"></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend"></div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <footer class="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                  <hr></hr>
                  <div className="text-right">
                    <button className="btnLogin">Publicar</button>                    
                  </div>
                </div>
              </div>
              <Pregunta
                title={"Un título"}
                contenido={"Un contenido"}
                usuario={"Usuario"}
              ></Pregunta>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Noticias;
