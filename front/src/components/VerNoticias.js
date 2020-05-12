import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import "./VerNoticias.css";
import { useHistory } from "react-router-dom";

//Daniella Arteaga: Muy buena implementación,me gustó el resultado. No obstante, podrían mejorar la navegación con tab de las noticias
//ya que omite estas y solo navega las opciones del menú y los botones principales.
const Noticias = (props) => {
  const [noticias, setNoticias] = useState([]);
  const [page, setPages] = useState(1);
  const [hayNoticias, setHayNoticias] = useState(false);
  const history = useHistory();

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
  useEffect(() => {
    fetch("/news/getNews", {
      method: "GET",
      qs: {
        page: 1,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.articles) {
          setHayNoticias(true);
          setNoticias(json.articles);
        }
      });
  }, []);

  useEffect(() => {
    fetch("/news/getNews?page=" + page, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.articles) {
          setHayNoticias(true);
          setNoticias(noticias.concat(json.articles));
        }
      });
  }, [page]);

  return (
    <div>
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
              {noticias
                ? noticias.map((el, key) => {
                    return (
                      <div
                        key={"noticia" + key}
                        className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
                      >
                        <div
                          className="card cardBorder"
                          onClick={() =>
                            history.push("/verDetalleNoticia", { state: el })
                          }
                        >
                          <img
                            className="card-img-top"
                            src={el.urlToImage}
                            alt="Imagen de noticia"
                          ></img>
                          <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text">{el.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <button className="btnLogin" onClick={() => setPages(page + 1)}>
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
