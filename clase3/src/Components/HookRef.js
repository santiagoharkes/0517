import React, { useRef } from "react";

function HookRef() {
  // Esquema principal del useRef
  // const algunaRef = useRef(valorInicial)
  // algunaRef.current ---------> valorInicial

  const algunaRef = useRef();

  const focusToInput = () => {
    algunaRef.current.focus();
    console.log(algunaRef);
  };

  return (
    <div>
      <input type="text" ref={algunaRef} />
      <input
        type="button"
        onClick={focusToInput}
        value="BOTON PARA EJECUTAR USEREF"
      />
    </div>
  );
}

export default HookRef;

// useRef es una funcion y nos devuelve un objeto mutable
// nos va a dar una propiedad .current
// la propiedad current se la pasamos como argumento a la funcion useRef
// este objeto va a persistir durante la vida del componente
