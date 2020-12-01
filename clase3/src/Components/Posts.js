import React, { useEffect, useState } from "react";

function Posts() {
  const [posteos, setPosteos] = useState([]);

  const tomarPosteos = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posteitos) => setPosteos(posteitos))
      .catch((error) => console.log(error));
    console.log("Se re renderizo");
  };

  useEffect(() => {
    tomarPosteos();
    console.log("Se re renderizo");
  }, []);

  return (
    <div>
      <ul>
        {posteos.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
