import React, { useState, useEffect, useRef } from "react";

function Emeeseene() {
  const [contador, setContador] = useState(0);
  const mensajesEnFila = useRef(0);

  const enviarMensaje = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    mensajesEnFila.current = contador;
    setTimeout(() => {
      console.log(`Mensajes en fila: ${mensajesEnFila.current}`);
    }, 5000);
  }, [contador]);

  return (
    <div>
      <input type="button" value="Enviar mensaje" onClick={enviarMensaje} />
      <div>Mensajes enviados: {contador}</div>
    </div>
  );
}

export default Emeeseene;
