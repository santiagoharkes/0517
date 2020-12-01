// COMPONENTE DE CLASE

import React, { Component } from "react";
import ComponenteHijo from "./ComponenteHijo";

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: this.props.numero,
    };

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return <ComponenteHijo numero={this.state.contador} />;
  }
}

export default Contador;

// // COMPONENTE FUNCION

// import React, { useState } from 'react'
// import ComponenteHijo from "./ComponenteHijo";

// function Contador(props) {
//   const [numeroDeContador, setNumeroDeContador] = useState(props.numero)
//   // Desestructuramos el array
//   // Primer elemento: estado
//   // Segundo elemento: funcion que cambia ese estado
//   // const [estado, setEstado]

//   return (
//     <div>

//     </div>
//   )
// }

// export default Contador
