import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/todo")
      .then((resp) => {
        if (!resp.ok) throw Error("Fetching To Do List Failed");
        return resp.json();
      })
      .then((todolist) => {
        setTimeout(() => {
          setData(todolist);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.log(err.message);
      });
  }, []);

  return { loading, error, data };
};

export default useFetch;
