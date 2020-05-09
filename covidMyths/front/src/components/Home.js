import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <div className="title">Covid-19 Myths</div>
      <hr></hr>

      <div className="paragraph">
        <div className="subtitle">¿Quiénes somos?</div>
        Covid-19 es una aplicación cuyo objetivo es crear una comunidad donde se
        puedan comentar las noticias acerca del COVID-19 y juzgar su veracidad.
        Adicionalmente queremos crear un foro donde haya una comunidad que
        participe activamente en preguntas sobre este tema.
        <div className="subtitle">¿Qué podemos hacer?</div>
      </div>

      <div className="list">
        <div className="row">
          <div className="col-md-6">
            <ul class="list-group list-group-flush">
              <button
                class="list-group-item"
                onClick={() => props.setimg("./img/noticias.png")}
              >
                Ver las noticias más recientes del coronavirus
              </button>
              <button
                class="list-group-item"
                onClick={() => props.setimg("./img/falso.png")}
              >
                Votar si el contenido de una noticias mito o verdad
              </button>
              <button
                class="list-group-item"
                onClick={() => props.setimg("./img/forum.png")}
              >
                Hacer una pregunta en el foro de la comunidad
              </button>
              <button
                class="list-group-item"
                onClick={() => props.setimg("./img/ask.png")}
              >
                Responder una pregunta hecho por otro miembro de la comunidad
              </button>
            </ul>
          </div>
          <img src={props.img} alt="Ver noticias" className="img-home"></img>
        </div>
      </div>
      <hr></hr>
      <div className="paragraph">
        <div className="subtitle">¿Quieres unirte?</div>
        <div className="container-imagenes">
          <div className="row">
            <div className="col">
              <div className="cards">
                <div className="titulo-fin">¡Registrate!</div>
                <img src="./img/register.png" alt="Ver noticias" className="img-fin"></img>
              </div>
            </div>
            <div className="col">
            <div className="cards">
                <div className="titulo-fin">Ingresa</div>
                <img src="./img/arrow.png" alt="Ver noticias" className="img-fin-2"></img>
              </div>
            </div>
            <div className="col">
            <div className="cards">
                <div className="titulo-fin">¡Pregunta!</div>
                <img src="./img/ask.png" alt="Ver noticias" className="img-fin-2"></img>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


Home.propTypes = {
  setimg: PropTypes.func,
  img: PropTypes.string
};
export default Home;
