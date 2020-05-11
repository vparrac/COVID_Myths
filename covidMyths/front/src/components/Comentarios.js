import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import "./Comentarios.css";
const Comentarios = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formRef = useRef();
  const comentar = (evt) => {
    evt.preventDefault();
    console.log(props);
    const contenido = formRef.current.contenido.value;
    const comentario = {
      usuario: props.usuario,
      pregunta: props.pregunta,
      contenido: contenido,
    };
    fetch("/preguntas/hacerUnComentario", {
      method: "POST",
      body: JSON.stringify(comentario),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      console.log("llego");
    });
  };
  return (
    <>
      <button
        className="btn-comentarios"
        variant="primary"
        onClick={handleShow}
      >
        Comentarios de esta publicación
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="modal-title">Comentarios</div>
        </Modal.Header>
        <Modal.Body>
          <ul className="list-group">
            <form onClick={comentar} ref={formRef}>
              <label>Haz un comentario:</label>
              <div className="input-group mb-3">
                <textarea
                  name="contenido"
                  className="form-control"
                  aria-label="descripcion"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  className="btn-comentarios"
                  type="submit"
                  variant="primary"
                >
                  Comenta
                </button>
              </div>
            </form>
            <br></br>
            <br></br>
            <li className="list-group-item">Cras justo odio</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn-comentarios"
            variant="primary"
            onClick={handleShow}
          >
            Comentarios de esta publicación
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Comentarios.propTypes = {};

export default Comentarios;
