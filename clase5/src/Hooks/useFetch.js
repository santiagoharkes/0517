import { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setLoading(false);
        setError(null);
        setData(info);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { loading, error, data };
}

export default useFetch;
