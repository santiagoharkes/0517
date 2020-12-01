import React, { useState, useEffect } from "react";
import "./Cuadrito.css";

function Cuadrito() {
  const [color, setColor] = useState("rojo");

  useEffect(() => {
    function mouseMoviendo(e) {
      if (e.clientX < window.innerWidth / 2) {
        setColor("azul");
      } else {
        setColor("rojo");
      }
    }
    console.log("AGREGAMOS UN EVENTO");
    window.addEventListener("mousemove", mouseMoviendo);

    // FUNCION CLEANUP
    // return () => {}

    return () => {
      console.log("LIMPIAMOS TODO PERRI");
      window.removeEventListener("mousemove", mouseMoviendo);
    };
  }, []);

  return (
    <div>
      <div className={`cuadrito ${color}`}></div>
    </div>
  );
}

export default Cuadrito;
