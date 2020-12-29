import React from "react";

import "./Tareas.css";

function Tareas({ listita }) {
  return (
    <ul>
      {listita.lenght > 0 ? (
        listita.map((valor) => (
          <li>
            <h2 className="">{valor.titulo}</h2>
            <p>{valor.descripcion}</p>
          </li>
        ))
      ) : (
        <h2>No hay elementos en la lista</h2>
      )}
    </ul>
  );
}

export default Tareas;
