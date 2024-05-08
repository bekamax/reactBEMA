import React, { useEffect, useState } from "react";
import { Input } from "../../ui/input/Input";
import styles from "./edit.module.css";
import Button from "../../ui/buttons/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditPRofile = () => {
   const navigate=useNavigate()
  const id = localStorage.getItem("currentUser");
  const API = `http://localhost:8000/users/${id}`;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(API);
        setUser(res.data);
      } catch (error) {}
    };
    fetchUserData();
  }, [API]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    const res = await axios.put(API, user);
     navigate('/profile');
  }
  console.log(user);
  return (
    <div className={styles.editpage}>
      <form onSubmit={handleSubmit}>
        <p>Edit profile</p>
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
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default EditPRofile;
