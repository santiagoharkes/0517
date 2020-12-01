import React, { useMemo, useState } from "react";
import Lista from "./Lista";

const usuarios = [
  {
    id: "a",
    nombre: "Juancito",
  },
  {
    id: "b",
    nombre: "Pepito",
  },
  {
    id: "c",
    nombre: "Diego",
  },
  {
    id: "d",
    nombre: "Armando",
  },
];

function HookMemo() {
  const [texto, setTexto] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const handleTexto = (event) => {
    setTexto(event.target.value);
  };

  const handleBusqueda = () => {
    setBusqueda(texto);
  };

  const filtrarUsuario = useMemo(
    () =>
      usuarios.filter((usuario) => {
        console.log("Filtrar usuarios se está ejecutando...");
        return usuario.nombre.toUpperCase().includes(busqueda.toUpperCase());
      }),
    [busqueda]
  );

  return (
    <div>
      <input type="text" value={texto} onChange={handleTexto} />
      <button onClick={handleBusqueda}>Buscarrrrrrrrrrrr</button>

      <Lista lista={filtrarUsuario} />
    </div>
  );
}

export default HookMemo;

// useMemo es un hook que nos permite optimizar el componente y la aplicacion
// Memo como su nombre lo indica, refiere a memorizar algo
// Que es lo que va a memorizar? -----> un valor
// Estructura básica
// const valorMemoizado = useMemo(() => funcionConCalculoComplejo(pepe, juan), [pepe, juan])
// Recibe dos parametros:
// Un callback que devuelve la función del "calculo"
// Y un array de dependencias
