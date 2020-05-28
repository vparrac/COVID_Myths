import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import { useLocation } from "react-router-dom";
import "./VerDetalleNoticia.css";
import Swal from "sweetalert2";

const VerDetalle = (props) => {
  const location = useLocation();
  let news = location.state.state;
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);
  const formRef = useRef();
  const [comentarios, setComentarios] = useState([]);
  const [limInf, setLimInf] = useState(0);
  const [limSup, setLimSup] = useState(6);
  const [numberOfPages, setPages] = useState(6);

  const saliendo = () => {
    console.log("Intentando salir");
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

  const parentCallback = (inf, sup) => {
    let obj = {
      contenido: news.description,
      limInf: inf,
      limSup: sup,
    };
    fetch("/news/getComentarios", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length > 0 && json[0].comentarios.length > 0) {
          setComentarios(json[0].comentarios);
        }
      });
  };

  useEffect(() => {
    let obj = {
      contenido: news.description,
    };
    let obj2 = {
      contenido: news.description,
      page: numberOfPages,
    };
    fetch("/news/detalleNewsUpVote", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length > 0) {
          setUpVotes(json[0].total);
        }
      });
    fetch("/news/detalleNewsDownVote", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length > 0) {
          setDownVotes(json[0].total);
        }
      });
    fetch("/news/getComentarios", {
      method: "POST",
      body: JSON.stringify(obj2),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setPages(numberOfPages + 6);
        if (json.length > 0) {
          setComentarios(json[0].comentarios);
        }
      });
  }, []);

  const updateVotes = (upvote) => {
    let obj = {
      upvote,
      usuario: props.user,
      contenido: news.description,
    };
    fetch("/news/detalleNews", {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.upVotes.length > 0) {
          setUpVotes(json.upVotes[0].total);
        }
        if (json.downVotes.length > 0) {
          setDownVotes(json.downVotes[0].total);
        }
        if (json.upVotes.length === 0) {
          setUpVotes(0);
        }
        if (json.downVotes.length === 0) {
          setDownVotes(0);
        }
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
    fetch("/news/registrarComentario", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        let obj2 = {
          contenido: news.description,
          page: numberOfPages,
        };
        fetch("/news/getComentarios", {
          method: "POST",
          body: JSON.stringify(obj2),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            Swal.fire("Comentario creado con exito", "", "success");
            formu.comentario.value = "";
            if (json.length > 0) {
              setComentarios(json[0].comentarios);
            }
          });
      });
  };

  return (
    <div className="padding">
      {news ? (
        <div>
          <div className="container-fluid">
            <div className="fixed">
              <nav className="navbar navbar-light">
                <div className="navbar-brand" to="/"></div>

                <div className="text-right">
                  <button className="btnLogin" onClick={saliendo}>
                    Salir
                  </button>
                </div>
              </nav>

              <div className="row">
                <div className="col-3">
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
                <div className="col-9">
                  <div className="row">
                    <h1 className="title">{news.title}</h1>
                  </div>
                </div>
              </div>

              <div className="row margin-bot-top">
                <img
                  src={news.urlToImage}
                  onError={(e) => (e.target.src = "./periodico.jpg")}
                  className="foto-noticia"
                  alt="Imagen de noticia"
                ></img>
              </div>
              <div className="row">
                <h4>Sitio de la noticia: {news.source.name}</h4>
              </div>
              <div className="row">
                <p>Por: {news.author} </p>
              </div>
              <div className="row">
                <h5>Seguir leyendo </h5>
              </div>
              <div className="row">
                <a href={news.url}>{news.url}</a>
              </div>

              <div className="card">
                <div className="card-header">Comenta algo</div>
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
                      <button className="btnLogin" type="submit">
                        Publicar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                {comentarios ? (
                  comentarios.map((el, key) => {
                    return (
                      <div className="row" key={"comentario" + key}>
                        <div className="col-12">
                          <div className="row">
                            <p className="usuario">{el.username}</p>
                          </div>
                          <div className="row">
                            <p className="pregunta">{el.comentario}</p>
                          </div>
                          {/* {el.respuestas
                            ? el.respuestas.map((respuesta, i) => {
                                return (
                                  <div className="row" key={'respuesta' + i}>
                                    <div className="row">
                                      <p className="usuarioRespuesta">{el.usuario}</p>
                                    </div>
                                    <div className="row">
                                      <p className="respuesta">
                                        {el.comentario}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })
                            : ''}
                          <div className="row">
                            <button className="btnLogin ml-auto">
                              Responder
                            </button>
                          </div> */}
                          <hr></hr>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h6>No hay comentarios para esta noticia</h6>
                )}
                {comentarios ? (
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                      <nav aria-label="Page navigation example"></nav>
                    </div>
                    <div className="col-4"></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No se escogió una noticia, por favor volver a la página de noticias"
      )}
    </div>
  );
};

const Pagination = (props) => {
  return (
    <li className="page-item">
      <button
        onClick={() => {
          props.parentCallback(props.page * 6, props.limSup * (props.page + 1));
        }}
        className="page-link"
      >
        {props.page}
      </button>
    </li>
  );
};

export default VerDetalle;
