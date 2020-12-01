import React, { useState, useEffect } from "react";

function Form() {
  const [nombre, setNombre] = useState("Juan");
  const [apellido, setApellido] = useState("Franco");

  useEffect(() => {
    setNombre("Pedro");
  });

  // Si le pasamos un array vacio como segundo parametro de useEffect, este se ejecuta UNA SOLA vez cuando se monta el componente
  // Si no le pasamos ningún array, el useEffect se ejecuta cada vez que el componente se re-renderice
  // Si le pasamos algun valor al array de dependencias, el useEffect se va a ejecutar cada vez que este valor cambie

  return (
    <div>
      <p>Nombre</p>
      <input
        name="nombre"
        type="text"
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <p>Apellido</p>
      <input
        name="apellido"
        type="text"
        onChange={(e) => {
          setApellido(e.target.value);
        }}
      />
    </div>
  );
}

export default Form;
