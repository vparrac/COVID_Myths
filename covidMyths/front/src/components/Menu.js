import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import "./Menu.css";
import Pregunta from "./Pregunta";
import ForoPreguntas from "./ForoPreguntas";

const Menu = (props) => {  
  return (
    <div>
      <div>
        <div className="sidebar">
          <a className="active"> Menu </a>
          <Link to="/preguntar">Preguntar</Link>
        </div>
        <div className="content">
          <Route
            path="/preguntar"
            exact
            component={() => <ForoPreguntas user={props.user}></ForoPreguntas>}
          ></Route>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
