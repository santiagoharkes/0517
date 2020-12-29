import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uuid from "react-uuid";
import GrupoDeTareas from "./GrupoDeTareas";
import FormularioTarea from "./FormularioTarea";

function TodosBootstrap() {
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [todasLasTareas, setTodasLasTareas] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaAEditar, setTareaAEditar] = useState(null);

  const onTareaIndividualChange = (e) => setTareaIndividual(e.target.value);

  const onTareaAEditarChange = (e) =>
    setTareaAEditar({ ...tareaAEditar, tarea: e.target.value });

  const submitAgregar = (e) => {
    e.preventDefault();

    setTodasLasTareas([
      ...todasLasTareas,
      { tarea: tareaIndividual, id: uuid() },
    ]);

    setTareaIndividual("");
  };

  const borrarTarea = (id) => {
    const arrayFiltrado = todasLasTareas.filter((item) => item.id !== id);
    setTodasLasTareas(arrayFiltrado);
  };

  const editarTarea = (tarea) => {
    setModoEdicion(true);
    setTareaAEditar(tarea);
  };

  const submitEditar = (e) => {
    e.preventDefault();
    const nuevoArray = todasLasTareas.map((valor) =>
      valor.id === tareaAEditar.id ? tareaAEditar : valor
    );
    setTodasLasTareas(nuevoArray);
    setModoEdicion(false);
    setTareaAEditar(null);
  };

  return (
    <Container fluid="sm" className="my-5">
      <h1 className="text-center mb-5">Una cosa hecha con REACTBUTSTRAP</h1>
      <Row>
        <Col md={8}>
          <h4 className="text-center">Listado de tareas</h4>
          <GrupoDeTareas
            todasLasTareas={todasLasTareas}
            borrarTarea={borrarTarea}
            editarTarea={editarTarea}
          />
        </Col>

        <Col md={4}>
          <h4 className="text-center">Agregar nueva</h4>
          <FormularioTarea
            modoEdicion={modoEdicion}
            submitAgregar={submitAgregar}
            submitEditar={submitEditar}
            onTareaAEditarChange={onTareaAEditarChange}
            onTareaIndividualChange={onTareaIndividualChange}
            tareaAEditar={tareaAEditar}
            tareaIndividual={tareaIndividual}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TodosBootstrap;
