import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormularioTarea({
  modoEdicion,
  submitAgregar,
  submitEditar,
  onTareaAEditarChange,
  onTareaIndividualChange,
  tareaAEditar,
  tareaIndividual,
}) {
  return (
    <Form onSubmit={modoEdicion ? submitEditar : submitAgregar}>
      <Form.Group controlId="tarea">
        <Form.Label>Agregar nueva tarea</Form.Label>
        <Form.Control
          type="text"
          placeholder="Escribí tu tarea..."
          onChange={
            modoEdicion ? onTareaAEditarChange : onTareaIndividualChange
          }
          value={tareaAEditar ? tareaAEditar.tarea : tareaIndividual}
        />
      </Form.Group>
      <Button variant="dark" block type="submit">
        {tareaAEditar ? "Editar" : "Agregar"}
      </Button>
    </Form>
  );
}

export default FormularioTarea;
