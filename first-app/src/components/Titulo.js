import React from "react";

function Titulo({texto, numero, array, funcioncita, objeto}) {
  return (
    <>
      <p>{texto}</p>
      <p>{numero}</p>
      <p>{array.join(", ")}</p>
      <p>
        {objeto.propiedad} - {objeto.numerito}
      </p>

      {

      array.map(funcioncita).join(" -- ")

      }

    </>
  );
}

export default Titulo;
