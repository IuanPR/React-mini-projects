import React from "react";
import { useState, useEffect } from "react";
export default function Effect() {
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
  const [time, setTime] = useState(new Date());
  const CurrentTime = () => {
    return setTime(new Date());
  };
  useEffect(() => {
    setInterval(CurrentTime(), 1000);
  });
  return (
    <div>
      <h2>Сечас время {time.toLocaleTimeString()}</h2>
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
