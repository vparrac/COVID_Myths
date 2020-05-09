import React from "react";
import PropTypes from "prop-types";
import "./Pregunta.css"
const Pregunta = (props) => {
  return (
    <div>
      <div class="card">
        <div class="card-header-ou">{props.title}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{props.contenido}</p>
            <footer class="blockquote-footer">{props.usuario}</footer>
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
