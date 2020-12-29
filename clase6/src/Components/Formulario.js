import React, { useState, useEffect } from "react";

import Tareas from "./Tareas";

import "./Formulario.css";
import styles from "./Boton.module.css";

function Formulario() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    console.log(lista);
  }, [lista]);

  const onTextAreaChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLista([...lista, { titulo: titulo, descripcion: descripcion }]);

    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="formulario-content">
      <h1 className="formulario-title">Tareas para hacer</h1>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
        onSubmit={handleSubmit}
        className="formulario-form"
      >
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Agrega el titulo de la tarea..."
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
          value={titulo}
          className="formulario-input"
        />
        <textarea
          name="descripcion"
          id="descripcion"
          cols="30"
          rows="10"
          placeholder="Agrega la descripción de la tarea..."
          onChange={onTextAreaChange}
          value={descripcion}
          className="formulario-textarea"
        ></textarea>
        <button className={styles.botonModule}>Agregar Tarea</button>
        <Tareas listita={lista} />
      </form>
    </div>
  );
}

export default Formulario;
