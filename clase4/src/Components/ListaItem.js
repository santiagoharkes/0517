import React from "react";

function ListaItem({ item, borrarUsuario }) {
  console.log("Se renderizó un item de usuario");
  return (
    <li>
      {item.nombre}
      <button onClick={() => borrarUsuario(item.id)}>Borrar usuario</button>
    </li>
  );
}

export default React.memo(ListaItem);
