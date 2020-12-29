import React from "react";

import Navbar from "./Navbar";
import Button from "./Button/Button";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Button title="Un boton" color="azul" />
      <Button title="Otro boton" color="amarillo" />
      <Button title="Castrili" color="rojo" />
    </div>
  );
}

export default Home;
