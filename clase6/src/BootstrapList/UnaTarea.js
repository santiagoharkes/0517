import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function UnaTarea({ valor, borrarTarea, editarTarea, key }) {
  return (
    <ListGroup.Item as="li" key={key}>
      <span className="lead">{valor.tarea}</span>
      <Button
        onClick={() => borrarTarea(valor.id)}
        size="sm"
        variant="danger"
        className="float-right mx-2"
      >
        Borrar
      </Button>
      <Button
        onClick={() => editarTarea(valor)}
        size="sm"
        variant="warning"
        className="float-right"
      >
        Editar
      </Button>
    </ListGroup.Item>
  );
}

export default UnaTarea;
