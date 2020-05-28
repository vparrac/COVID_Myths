import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Home.css";
import WOW from "wowjs";

const Home = (props) => {
  useEffect(() => {
    new WOW.WOW().init();
  });

  return (
    <div>
      <section className="mas" role="img" aria-label="Image Description">
        <h1 className="title">Covid-19 Myths</h1>
        <h6 className="title2"> Ayúdanos a revelar la verdad </h6>
      </section>

      <div className="paragraph wow slideInRight">
        <div className="row margin-70">
          <div className="col-lg-6 col-sm-12">
            <h2 className="font-w-600">¿Quiénes somos?</h2>
            <p className="par">
              Covid-19 es una aplicación cuyo objetivo es crear una comunidad
              donde se puedan comentar las noticias acerca del COVID-19 y juzgar
              su veracidad. Adicionalmente queremos crear un foro donde haya una
              comunidad que participe activamente en preguntas sobre este tema.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="ml-5">
              <img
                className="img-quienes-somos"
                src="./img/coronavirus-statistics-3970326.jpg"
                alt="quienes_somos"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="wow slideInLeft paragraph2">
        <div className="row">
          <h2 className="font-w-600  text-center">¿Qué podemos hacer?</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="card">
              <img
                className="card-img-top"
                src="./img/coronavirus-statistics-on-screen-3970330.jpg"
                alt="noticias corona virus"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Noticias</h5>
                <p className="par">
                  Ver las noticias más recientes del coronavirus
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="card">
              <img
                className="card-img-top"
                src="./img/selective-focus-close-up-photo-of-smiling-woman-in-white-3758990.jpg"
                alt="noticias corona virus"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Votación</h5>
                <p className="par">
                  Votar si el contenido de una noticias mito o verdad
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="card">
              <img
                className="card-img-top"
                src="./img/close-up-photo-of-person-in-white-shirt-using-a-phone-3759044.jpg"
                alt="noticias corona virus"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Preguntar</h5>
                <p className="par">
                  Hacer una pregunta en el foro de la comunidad
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="card">
              <img
                className="card-img-top"
                src="./img/coronavirus-statistics-on-screen-3970333.jpg"
                alt="noticias corona virus"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Aportar</h5>
                <p className="par">
                  Responder una pregunta hecho por otro miembro de la comunidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="paragraph wow slideInRight">
        <div className="row">
          <h2 className="font-w-600 margin-bot text-center">¿Quieres unirte?</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <h5 className="text-center">1. Registrate</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <h5 className="text-center">2. Ingresa</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <h5 className="text-center">3. Pregunta</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  setimg: PropTypes.func,
  img: PropTypes.string,
};
export default Home;
