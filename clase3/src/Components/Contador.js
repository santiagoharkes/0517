import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./Contador.css";

const reducer = (estado, accion) => {
  switch (accion) {
    case "SUMAR":
      return {
        ...estado,
        contador: estado.contador + 1,
        error: null,
      };

    case "RESTAR":
      return {
        ...estado,
        contador: estado.contador < 1 ? 0 : estado.contador - 1,
        error: estado.contador < 1 ? "Tiene que ser mayor a 0" : null,
      };

    case "CAMBIAR_TITULO":
      return {
        ...estado,
        titulo: "NUEVO TITULO CAMBIADO DESDE ACCION",
      };

    default:
      break;
  }
};

function Contador() {
  //   const [contador, setContador] = useState(0);
  //   const [error, setError] = useState(null);

  //   const sumar = () => {
  //     setContador(contador + 1);
  //     setError(null);
  //   };

  //   const restar = () => {
  //     if (contador >= 1) {
  //       setContador(contador - 1);
  //     } else {
  //       setError("Tiene que ser mayor a 0");
  //     }
  //   };

  const sumar = () => {
    dispatch("SUMAR");
  };

  const restar = () => {
    dispatch("RESTAR");
  };

  const cambiarTitulo = () => {
    dispatch("CAMBIAR_TITULO");
  };

  // ESQUEMA PRINCIPAL DE USEREDUCER
  // const [estado, dispatch] = useReducer(reducer, estadoInicial)

  const estadoInicial = {
    contador: 0,
    error: null,
    titulo: "Contador",
  };

  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div className="contadorContainer">
      <h1>{estado.titulo}</h1>
      <button onClick={cambiarTitulo}>Cambiar titulo</button>
      <div className="contador">
        <button className="restar" onClick={restar}>
          <FontAwesomeIcon icon={faMinus} className="icon" />
        </button>
        <div className="numero">
          <h1>{estado.contador}</h1>
        </div>
        <button className="sumar" onClick={sumar}>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </button>
      </div>
      {estado.error && <h1>{estado.error}</h1>}
    </div>
  );
}

export default Contador;
