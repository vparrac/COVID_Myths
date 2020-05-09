import React from "react";
import PropTypes from "prop-types";
import "./Login.css"
const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card-2">
            <div className="card-headerLogin-2">
              <h3>Registrate</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Correo"
                    name="username"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="username"
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repite tu contraseña"
                    name="password"
                  />
                </div>
                <div>
                  <div className="err"></div>
                </div>
                <button type="submit" className="btn float-right btnLogin">
                  Inicio Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

Register.propTypes = {};

export default Register;
