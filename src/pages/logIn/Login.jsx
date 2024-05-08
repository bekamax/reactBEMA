import React, { useState } from "react";
import styles from "./login.module.css";
import { Input } from "../../ui/input/Input";
import Button from "../../ui/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const API = "http://localhost:8000/users";
const Login = () => {
  async function logInUsers() {
    const { data } = await axios.get(API);
    return data;
  }
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    const users = await logInUsers();

    const bol = users.some((item) => item.email === user.email);

    if (bol) {
      const currentUser = users.find(
        (item) => item.email === user.email && item.password === user.password
      );
      const id = currentUser.id;
      localStorage.setItem("currentUser", id + "");
    } else {
      alert("Такого пользователя нет!");
    }
    setUser({ email: "", password: "" });
    navigate("/");
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <p>Регистрация</p>
        {Object.keys(user).map((item, index) => (
          <div key={index}>
            <Input
              placeholder={item}
              name={item}
              onChange={handleChange}
              value={user[item]}
            />
          </div>
        ))}
        <div className={styles.btn}>
          <Button>hello</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
