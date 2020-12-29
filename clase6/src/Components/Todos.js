import React from "react";

function Todos() {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-center">UNA COSA HECHA CON BUTSTRAP</h1>

      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Listado de tareas</h4>

          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">1</span>
              <button className="btn btn-sm btn-danger float-right mx-2">
                Borrar
              </button>
              <button className="btn btn-sm btn-warning float-right">
                Editar
              </button>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <h4 className="text-center">Agregar nueva</h4>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="form-control mb-2"
              placeholder="Agregar nueva tarea..."
            />
            <button className="btn btn-dark btn-block">Agregar nueva</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todos;
