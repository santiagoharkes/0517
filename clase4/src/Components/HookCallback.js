import React, { useCallback, useState } from "react";
import Lista from "./Lista";

function HookCallback() {
  console.log("Se renderizó la aplicacion");
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Juancito",
    },
    {
      id: 2,
      nombre: "Pepito",
    },
    {
      id: 3,
      nombre: "Diego",
    },
    {
      id: 4,
      nombre: "Armando",
    },
  ]);

  const [texto, setTexto] = useState("");

  const handleTexto = (e) => {
    setTexto(e.target.value);
  };

  const agregarUsuario = () => {
    setUsuarios(usuarios.concat({ id: usuarios.length + 1, nombre: texto }));
  };

  const borrarUsuario = useCallback(
    (id) => setUsuarios(usuarios.filter((usuario) => usuario.id !== id)),
    [usuarios]
  );

  return (
    <div>
      <input type="text" value={texto} onChange={handleTexto} />
      <button onClick={agregarUsuario}>Agregar usuario</button>

      <Lista lista={usuarios} borrarUsuario={borrarUsuario} />
    </div>
  );
}

export default HookCallback;

// useCallback es parecido a useMemo
// Estos dos hooks son para optimizar la aplicacion o la renderizacion del componente
// Pero useCallback es usado para memorizar funciones
// Y useMemo es usado para memorizar valores
// Estructura principal
// const funcion = useCallback(funcion, [])
