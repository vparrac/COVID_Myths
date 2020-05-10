import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import { useLocation } from 'react-router-dom';
import './VerDetalleNoticia.css';

const VerDetalle = (props) => {
  const location = useLocation();
  const news = location.state.state;

  return (
    <div>
      {news ? (
        <div>
          <div className="container-fluid">
            <div className="fixed">
              <nav className="navbar navbar-light">
                <div className="navbar-brand" to="/"></div>

                <div className="text-right">
                  <button className="btnLogin">Salir</button>
                </div>
              </nav>

              <div className="row">
                <div className="col-2">
                  <div className="row">
                    <button className="botonVerdad">Verdad</button>
                  </div>
                  <div className="row">
                    <button className="botonMito">Mito</button>
                  </div>
                </div>
                <div className="col-10">
                  <div className="row">
                    <h1>{news.title}</h1>
                  </div>
                  <div className="row">
                    <h4>Sitio de la noticia: {news.source.name}</h4>
                  </div>
                  <div className="row">
                    <p>Por: {news.author} </p>
                  </div>
                  <div className="row">
                    <img
                      src={news.urlToImage}
                      className="foto-noticia"
                      alt="Imagen de noticia"
                    ></img>
                  </div>
                  <div className="row">
                    <p>{news.description}</p>
                  </div>
                  <div className="row">
                    <h5>Seguir leyendo </h5>
                  </div>
                  <div className="row">
                    <a href={news.url}>{news.url}</a>
                  </div>
                </div>
              </div>

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
                      Someone famous in{' '}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                  <hr></hr>
                  <div className="text-right">
                    <button className="btnLogin">Publicar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'No se escogió una noticia, por favor volver a la página de noticias'
      )}
    </div>
  );
};

export default VerDetalle;
