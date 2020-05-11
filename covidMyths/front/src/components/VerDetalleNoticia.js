import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import { useLocation } from 'react-router-dom';
import './VerDetalleNoticia.css';

const VerDetalle = (props) => {
  const location = useLocation();
  let news = location.state.state;
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);
  const formRef = useRef();
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    let obj = {
      contenido: news.description,
    };
    fetch('/news/detalleNewsUpVote', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length > 0) {
          setUpVotes(json[0].total);
        }
      });
    fetch('/news/detalleNewsDownVote', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length > 0) {
          setDownVotes(json[0].total);
        }
      });
  }, []);

  const updateVotes = (upvote) => {
    if (upvote) {
      setUpVotes(upVotes + 1);
    } else {
      setDownVotes(downVotes + 1);
    }
    let obj = {
      upvote,
      contenido: news.description,
    };
    fetch('/news/detalleNews', {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  const registrarForm = (evt) => {
    evt.preventDefault();
    const formu = formRef.current;
    const form = {
      comentario: formu.comentario.value,
      user: props.user,
      contenido: news.description,
    };
    fetch('/news/registrarComentario', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {});
  };

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
                    <button
                      onClick={() => updateVotes(true)}
                      className="botonVerdad"
                    >
                      Verdad {upVotes}
                    </button>
                  </div>
                  <div className="row">
                    <button
                      onClick={() => updateVotes(false)}
                      className="botonMito"
                    >
                      Mito {downVotes}
                    </button>
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
                <form ref={formRef} onSubmit={registrarForm}>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend"></div>
                        <input
                          type="text"
                          name="comentario"
                          className="form-control"
                          placeholder="Comentario"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </blockquote>
                    <hr></hr>
                    <div className="text-right">
                      <button className="btnLogin" type="submit">Publicar</button>
                    </div>
                  </div>
                </form>
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
