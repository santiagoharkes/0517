import React, { useContext } from "react";
import Context from "./Context";

function HookContext() {
  const { color, nombre } = useContext(Context);

  return (
    <div style={{ backgroundColor: color }}>
      <p style={{ color: "white" }}>
        HOlis el nombre es de {nombre} y el color de su pantalon es {color}
      </p>
    </div>
  );
}

export default HookContext;
