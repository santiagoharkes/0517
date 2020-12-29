import React, { useState } from "react";
import Navbar from "../Navbar";
import "./About.css";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

function Posts() {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h1>CARGANDO...</h1>;
  }

  if (error) {
    return <h1>Se pudrió todo...</h1>;
  }

  return data ? (
    <div className="about-bg">
      <Navbar />
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Nada</h1>
  );
}

export default Posts;
