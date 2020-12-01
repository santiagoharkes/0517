import logo from "./logo.svg";
import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import "./App.css";

function App() {
  const funcioncita = (valor) => valor * 2;

  return (
    <div className="App">
      <header className="App-header">
        <Titulo
          texto="Texto 1"
          numero={4}
          array={[1, 2, 3, 4]}
          funcioncita={funcioncita}
          objeto={{ propiedad: "valor", numerito: 555 }}
        />
        <Contador numero={50} />
        {/* <Titulo texto="Texto 2" />
        <Titulo texto="Texto 3" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Editando nuestro primer archivo de React.</p>
        <h2>HOLA DE NUEVO</h2>
        <h4>Re pesado</h4> */}
      </header>
    </div>
  );
}

export default App;
