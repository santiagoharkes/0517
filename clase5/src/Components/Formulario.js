import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState(undefined);

  return (
    <div>
      <h1>Formularito</h1>
      <form action="">
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Colocá tu nombre"
        />
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Colocá tu apellido"
        />
        <input
          type="number"
          name="dni"
          id="dni"
          placeholder="METE TU DNIIIIIIIIIII"
        />
        <button>Enviar datos</button>
      </form>
    </div>
  );
}

export default Formulario;
