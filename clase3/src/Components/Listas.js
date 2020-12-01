import React, { useReducer, useEffect } from "react";

import "./Listas.css";

const estadoInicial = [
  {
    id: 1,
    titulo: "Lavar la ropa",
    completado: false,
  },
  {
    id: 2,
    titulo: "Comprar pan",
    completado: false,
  },
  {
    id: 3,
    titulo: "Comprar Cafe",
    completado: false,
  },
  {
    id: 4,
    titulo: "Jugar al futbol",
    completado: false,
  },
  {
    id: 5,
    titulo: "Alimentar al perro",
    completado: false,
  },
  {
    id: 6,
    titulo: "Hablar con la vecina",
    completado: false,
  },
  {
    id: 7,
    titulo: "Dormir",
    completado: false,
  },
];

const reducer = (estado, accion) => {
  switch (accion.type) {
    case "COMPLETAR":
      return estado.map((tarea) => {
        if (tarea.id === accion.id) {
          return { ...tarea, completado: true };
        } else {
          return tarea;
        }
      });

    case "DESHACER":
      return estado.map((tarea) => {
        if (tarea.id === accion.id) {
          return { ...tarea, completado: false };
        } else {
          return tarea;
        }
      });

    default:
      break;
  }
};

function Listas() {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  useEffect(() => {
    console.log("Se renderizó otra vez");
  });

  const manejarCompletado = (tarea) => {
    dispatch({
      type: tarea.completado ? "DESHACER" : "COMPLETAR",
      id: tarea.id,
    });
  };

  console.log(estado);

  return (
    <div>
      <ul>
        {estado.map((valor) => (
          <>
            <li
              key={valor.id}
              className={valor.completado ? "completado" : "hacer"}
            >
              {valor.titulo}
            </li>
            <button onClick={() => manejarCompletado(valor)}>
              {valor.completado
                ? "VIAJAR EN EL TIEMPO y deshacerlo"
                : "HACERLO :("}
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Listas;
