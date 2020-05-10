import React from "react";
import PropTypes from "prop-types";
import "./Pregunta.css"
const Pregunta = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header-ou">{props.title}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.contenido}</p>
            <footer className="blockquote-footer">{props.usuario}</footer>
          </blockquote>
        </div>
        <hr></hr>
        <div className="text-right">
          <button className="botonVerdad">Verdad</button>
          <button className="botonMito">Mito</button>
        </div>
      </div>
    </div>
  );
};

Pregunta.propTypes = {};

export default Pregunta;
