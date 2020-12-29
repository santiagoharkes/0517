import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import UnaTarea from "./UnaTarea";

function GrupoDeTareas({ todasLasTareas, borrarTarea, editarTarea }) {
  return (
    <ListGroup as="ul">
      {todasLasTareas.length === 0 ? (
        <ListGroup.Item as="li" className="bg-info text-light">
          <span className="lead">No tenés tareas</span>
        </ListGroup.Item>
      ) : (
        todasLasTareas.map((valor, index) => (
          <UnaTarea
            valor={valor}
            borrarTarea={borrarTarea}
            editarTarea={editarTarea}
            key={valor.id}
          />
        ))
      )}
    </ListGroup>
  );
}

export default GrupoDeTareas;
