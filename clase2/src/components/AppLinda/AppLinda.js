import React, { useState } from "react";
import Cuadrito from "../Cuadrito/Cuadrito";

function AppLinda() {
  const [mostrarCuadro, setMostrarCuadro] = useState(true);

  const toggleMostrar = () => {
    setMostrarCuadro(!mostrarCuadro);
  };

  return (
    <div>
      <button onClick={toggleMostrar}>
        {mostrarCuadro ? "Sacar cuadro" : "Mostrar cuadro"}
      </button>
      {mostrarCuadro && <Cuadrito />}
    </div>
  );
}

export default AppLinda;
