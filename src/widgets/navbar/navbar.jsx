import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API } from "../../pages/logIn/Login";
const Navbar = () => {
  const id = localStorage.getItem("currentUser");

  let dataName = null;

  const [us, setUs] = useState(null);

  async function getOneUser(id) {
    console.log(id);
    if (id) {
      const { data } = await axios.get(`${API}/${id}`);
      setUs(data.name);
    }
  }

  useEffect(() => {
    getOneUser(id);
  }, []);

  return (
    <div className={style.navbar}>
      <div className={style.cont}>
        <div className={style.nav_top}>
          <h1></h1>
          <h1>BEMA</h1>
          {id ? (
            <NavLink to={`/profile`}>{us ? us : ""}</NavLink>
          ) : (
            <div>
              <NavLink to={"/registor"}>Регистрация</NavLink>
            </div>
          )}
        </div>
        <hr className={style.hr} />
        <div className={style.nav_bottom}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/addproduct"}>Add product</NavLink>
          <NavLink to={"/basket"}>Basket</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
