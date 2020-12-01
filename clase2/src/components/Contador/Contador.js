// COMPONENTE DE CLASE

// import React, { Component } from "react";
// import ComponenteHijo from "./ComponenteHijo";

// class Contador extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       contador: this.props.numero,
//     };

//     componentDidMount() {
//        document.title = "El contador es " + this.state.contador
//     }

//     componentDidUpdate() {
//        document.title = "El contador es " + this.state.contador
//     }

//     componentWillUnmount() {
//        document.title = ""
//     }

//     setInterval(() => {
//       this.setState({ contador: this.state.contador + 1 });
//     }, 1000);
//   }

//   render() {
//     return <ComponenteHijo numero={this.state.contador} />;
//   }
// }

// export default Contador;

import React, { useState, useEffect } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  const [arraycito, setArraycito] = useState([1, 2, 3, 4, 5]);
  //   // Desestructuramos el array
  //   // Primer elemento: estado
  //   // Segundo elemento: funcion que cambia ese estado
  //   // const [estado, funcionQueCambiaElEstado]
  //   // const [estado, setEstado]

  //   const [numerito, setNumerito] = useState(5);
  //   const [objeto, setObjeto] = useState({
  //     nombre: "Henry",
  //     apellido: "Sanchez",
  //   });

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  useEffect(() => {
    document.title = `CONTADOR: ${cuenta}`;
  });

  return (
    <div>
      <h1>El contador es: {cuenta}</h1>
      <button
        onClick={() => {
          setCuenta(cuenta + 1);
        }}
      >
        APRETAME
      </button>
      <button
        onClick={() => {
          setCuenta(0);
        }}
      >
        Reset
      </button>

      {/* {cuenta > 10 && <h2>Soy mayor a 10</h2>}
      <ul>
        {arraycito.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul> */}

      {/* <h1>El numerito es: {numerito}</h1>
      <h1>El nombre del alumno es: {objeto.nombre}</h1>
      <h1>El apellido del alumno es: {objeto.apellido}</h1> */}
    </div>
  );
}

export default Contador;
