import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Exito from "./Exito";
const Register = () => {
  const [error, seterror] = useState("");
  const [sucess, setsucess] = useState(true);
  const onRegister = (evt) => {
    evt.preventDefault();
    const password = formRef.current.password.value;
    const passwordc = formRef.current.passwordc.value;
    const username = formRef.current.username.value;

    if (password != passwordc) {
      seterror("Las contraseñas no coinciden");
    } else {
      const user = { username, password };
      fetch("/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((a) => {
        console.log("llega front");
        console.log(a);
        if (a.status === 200) {
          setsucess(false);
        } else {
          seterror(a.statusText);
        }
      });
    }
  };

  const formRef = useRef();
  return (
    <div>
      {sucess ? (
        <div>
          <div className="container">
            <div className="d-flex justify-content-center h-100">
              <div className="card-2">
                <div className="card-headerLogin-2">
                  <h3>Registrate</h3>
                </div>
                <div className="card-body">
                  <form ref={formRef} onSubmit={onRegister}>
                    <div className="input-group form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                        name="username"
                      />
                    </div>
                    <div className="input-group form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                      />
                    </div>
                    <div className="input-group form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Repite tu contraseña"
                        name="passwordc"
                      />
                    </div>
                    <div>
                      <div className="err">{error}</div>
                    </div>
                    <button type="submit" className="btn float-right btnLogin">
                      Crea una cuenta
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      ) : (
        <Exito></Exito>
      )}
    </div>
  );
};

Register.propTypes = {};

export default Register;
