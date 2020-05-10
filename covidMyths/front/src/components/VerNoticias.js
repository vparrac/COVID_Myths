import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import Pregunta from './Pregunta';

const Noticias = (props) => {
  const [noticias, setNoticias] = useState([]);
  const [page, setPages] = useState(1);
  const [hayNoticias, setHayNoticias] = useState('asdsad');
  let hola = null;

  useEffect(() => {
    props.setmostrar(false);
    fetch('/news/getNews', {
      method: 'GET',
      qs: {
        page: 1,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.articles) {
          setHayNoticias('bbbbbbb');
          setNoticias(json.articles);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <div className="sidebar">
          <a href="home">Home</a>
          <a className="active" href="#news">
            Noticias {hayNoticias}
          </a>
          <a href="#contact">Foro</a>
          <a href="#about">Pérfil</a>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="fixed">
              <nav className="navbar navbar-light">
                <div className="navbar-brand" to="/"></div>

                <div className="text-right">
                  <button className="btnLogin">Salir</button>
                </div>
              </nav>

              <div className="row">
                {noticias
                  ? noticias.map((el, key) => {
                      return (
                        <div  key={'noticia' + key} className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                          <div className="card">
                            <img
                              className="card-img-top"
                              src={el.urlToImage}
                              alt="Imagen de noticia"
                            ></img>
                            <div className="card-body">
                              <h5 className="card-title">{el.title}</h5>
                              <p className="card-text">
                                {el.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ''}
              </div>
              <button className="btnLogin">Ver más</button>

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
      </div>
    </div>
  );
};

export default Noticias;
