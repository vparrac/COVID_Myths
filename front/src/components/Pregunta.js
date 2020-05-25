import React from "react";
import PropTypes from "prop-types";
import "./styles/Pregunta.css";

import Comentarios from "./Comentarios";
const Pregunta = (props) => {
  const votarVerdad = () => {
    const q = {
      id: props.id,
      titulo: props.titulo,
      contenido: props.contenido,
      usuario: props.usuario,
      verdad: props.verdad + 1,
      mito: props.mito,
    };
    fetch("/preguntas/votarVerdad", {
      method: "PUT",
      body: JSON.stringify(q),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      console.log("llego");
    });
  };
  const votarMentira = () => {
    const q = {
      id: props.id,
      titulo: props.titulo,
      contenido: props.contenido,
      usuario: props.usuario,
      verdad: props.verdad + 1,
      mito: props.mito,
    };
    console.log(q);
    fetch("/preguntas/votarMentira", {
      method: "PUT",
      body: JSON.stringify(q),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      console.log("llego");
    });
  };

  return (
    <div>
      <div className="card">
        <div className={ props.verdad>props.mito?"card-header-ou":"card-header-pu"}>{props.title}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.contenido}</p>
            <footer className="blockquote-footer">{props.usuario}</footer>
          </blockquote>
        </div>
        <hr></hr>
        <div className="text-right">
          <button onClick={() => votarVerdad()} className="botonVerdad">
            {"Verdad: " + props.verdad}
          </button>
          <button onClick={() => votarMentira()} className="botonMito">
            {"Mito: " + props.mito}
          </button>
          <Comentarios usuario={props.usuario} pregunta={props.id}></Comentarios>
        </div>
      </div>
    </div>
  );
};

Pregunta.propTypes = {};

export default Pregunta;
