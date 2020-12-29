import React, { useState, useEffect } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState(undefined);
  const [listita, setListita] = useState([]);

  useEffect(() => {
    console.log(listita);
  }, [listita]);

  const onNameChange = (e) => {
    setNombre(e.target.value);
  };

  const onApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const onDniChange = (e) => {
    setDni(e.target.value);
  };

  const onFormularioSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, apellido, dni });

    setListita([...listita, { nombre, apellido, dni }]);

    setNombre("");
    setApellido("");
    setDni("");
  };

  return (
    <div>
      <h1>Formularito</h1>
      <form action="" onSubmit={onFormularioSubmit}>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Colocá tu nombre"
          onChange={onNameChange}
          value={nombre}
        />
        <input
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Colocá tu apellido"
          onChange={onApellidoChange}
          value={apellido}
        />
        <input
          type="number"
          name="dni"
          id="dni"
          placeholder="METE TU DNIIIIIIIIIII"
          onChange={onDniChange}
          value={dni}
        />
        <button>Enviar datos</button>
      </form>

      {listita && (
        <div>
          <ul>
            {listita.map((item) => (
              <li>{item.nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Formulario;

// Hook personalizado de validacion de Formulario
// (y si no, usar una libreria para validar formularios)
// App para ingresar alumnos/participantes, lo que sea
// Que se puedan editar y borrar
// Guardarlo el local storage
// Mostrarlos en tarjetas
// Despues hacer el dark mode
