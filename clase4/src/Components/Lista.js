import React from "react";
import ListaItem from "./ListaItem";

function Lista({ lista, borrarUsuario }) {
  console.log("Se renderizó la lista");
  return (
    <ul>
      {lista.map((usuario) => (
        <ListaItem
          key={usuario.id}
          item={usuario}
          borrarUsuario={borrarUsuario}
        />
      ))}
    </ul>
  );
}

export default React.memo(Lista);
