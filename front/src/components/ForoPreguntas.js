import React, { useRef, useEffect, useState } from "react";
import Menu from "./Menu";
import Pregunta from "./Pregunta";

//Daniella Arteaga:Me gusta la idea; sería bueno que pudiesen manejar paginación para hcer más fácil y usable la navegación
//de las preguntas.

const ForoPreguntas = (props) => {
  const salir = () => {
    fetch("/salir", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        props.setUser(false);
      }
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const contenido = formRef.current.contenido.value;
    const titulo = formRef.current.titulo.value;
    const user = props.user;
    const pregunta = { titulo, contenido, user, verdad: 0, mito: 0 };
    console.log(pregunta);

    fetch("/preguntas/publicarPregunta", {
      method: "POST",
      body: JSON.stringify(pregunta),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      console.log("llego");
    });
  };
  const formRef = useRef();
  console.log(props.user);
  return (
    <div>
      <div className="container-fluid">
        <div className="fixed">
          <nav className="navbar navbar-light">
            <div className="navbar-brand" to="/"></div>

            <div className="text-right">
              <button className="btnLogin" onClick={salir}>
                Salir
              </button>
            </div>
          </nav>
          <form ref={formRef} onSubmit={onSubmit}>
            <div className="card">
              <div className="card-header">Pregunta algo</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titulo"
                      aria-label="titulo"
                      aria-describedby="basic-addon1"
                      name="titulo"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <textarea
                      name="contenido"
                      className="form-control"
                      aria-label="descripcion"
                    ></textarea>
                  </div>
                </blockquote>
                <hr></hr>
                <div className="text-right">
                  <button className="btnLogin">Publicar</button>
                </div>
              </div>
            </div>
          </form>

          {props.q}
        </div>
      </div>
    </div>
  );
};

export default ForoPreguntas;
