import React from "react";
import Menu from "./Menu";
import Pregunta from "./Pregunta";

const ForoPreguntas = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="fixed">
          <nav className="navbar navbar-light">
            <div className="navbar-brand" to="/"></div>

            <div className="text-right">
              <button className="btnLogin">Salir</button>
            </div>
          </nav>
          <div className="card">
            <div className="card-header">Pregunta algo</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <div className="input-group mb-3">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <footer className="blockquote-footer">
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
  );
};

export default ForoPreguntas;
