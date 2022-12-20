import React from "react";
import { useState, useEffect } from "react";
function Succes() {}
function Home() {
  return (
    <div className="main-component">
      <div className="Search-parent">
        <input type={"text"} placeholder="Search person" maxLength={"30"} />
      </div>
      <div className="Users"></div>
      <div className="sendinvite-parent">
        <button>Отправить приглашение</button>
      </div>
    </div>
  );
}
function Guests() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((result) => result.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((error) => {
        console.warn(error);
        alert("Ошибка при получинии пользователей");
      });
  }, []);
  console.log(users);
  return (
    <div>
      <Home />
      <Succes />
    </div>
  );
}
export default Guests;
