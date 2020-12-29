import React from "react";
import Navbar from "./Navbar";

import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function ContactPepito() {
  const { idDeMiPost } = useParams();
  const { loading, error, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${idDeMiPost}`
  );

  if (loading) {
    return <h1>CARGANDO...</h1>;
  }

  if (error) {
    return <h1>Se pudrió todo...</h1>;
  }

  return (
    <div>
      <Navbar />
      {data ? (
        <div>
          <h1>{data.title}</h1> <p>{data.body}</p>
        </div>
      ) : (
        <div>
          <h1>No se encontró ese post</h1>
        </div>
      )}
    </div>
  );
}

export default ContactPepito;
