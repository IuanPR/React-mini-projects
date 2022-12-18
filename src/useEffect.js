import React from "react";
import { useState, useEffect } from "react";
function Effect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      });
    });
  });
  return (
    <div>
      <h1>Тип: {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>ToDo</button>
      <button onClick={() => setType("posts")}>Посты</button>
      <h1>Mouse Move:</h1>
      <h3>{JSON.stringify(pos, null, 2)}</h3>
      <div className="users">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
export default Effect;
