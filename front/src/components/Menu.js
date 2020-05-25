import React from "react";
import { Route, Link } from "react-router-dom";
import "./styles/Menu.css";
import ForoPreguntas from "./ForoPreguntas";
import Noticias from "../components/VerNoticias";
import VerDetalleNoticia from "../components/VerDetalleNoticia";

const Menu = (props) => {
  return (
    <div>
      <div>
        <div className="sidebar">
          <a className="active"> Menu </a>
          <Link to="/preguntar">Preguntar</Link>
          <Link to="/noticias">Noticias</Link>
        </div>
        <div className="content">
          <Route
            path="/preguntar"
            exact
            component={() => (
              <ForoPreguntas
                user={props.user}
                q={props.q}
                setUser={props.setUser}
              ></ForoPreguntas>
            )}
          ></Route>x
          <Route
            path="/noticias"
            exact
            component={() => <Noticias  setUser={props.setUser}></Noticias>}
          ></Route>

          <Route
            path="/verDetalleNoticia"
            exact
            component={() => (
              <VerDetalleNoticia user={props.user}></VerDetalleNoticia>
            )}
          ></Route>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
