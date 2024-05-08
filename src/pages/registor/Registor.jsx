import React, { useState } from "react";
import styles from "./registor.module.css";
import Button from "../../ui/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../ui/input/Input";
import axios from "axios";
const Registor = () => {
  const API = " http://localhost:8000/users";
  async function registorUser(user) {
    try {
      await axios.post(API, user);
    } catch (error) {
      console.error(error);
    }
  }

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key].trim()) {
        alert("Some inputs are empty!");
        return;
      }
    }
    if (user.password.length <= 5) {
      alert("Min length of password is 6 symbols");
      return;
    }
    if (user.password !== user.password_confirm) {
      alert("Passowrds do not match!");
      return;
    }

    setUser({
      name: "",
      phone: "",
      email: "",
      password: "",
      password_confirm: "",
    });
    navigate("/");
    console.log("hello");
    registorUser(user);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  console.log(user);
  return (
    <div className={styles.registor}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Регистрация</p>
        {Object.keys(user).map((item, index) => (
          <div key={index}>
            <Input
              className={styles.input}
              placeholder={item}
              name={item}
              onChange={handleChange}
              value={user.item}
              type={item}
            />
          </div>
        ))}
        <div className={styles.btn}>
          <Button>Регистрация</Button>
          <Link to={"/login"}>У вас есть аккаунт?</Link>
        </div>
      </form>
    </div>
  );
};

export default Registor;
