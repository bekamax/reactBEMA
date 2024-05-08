import React, { useState } from "react";
import styles from "./addproduct.module.css";
import { Input } from "../../ui/input/Input";
import Button from "../../ui/buttons/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Addproduct = () => {
  const API = " http://localhost:8000/products";
  const navigate = useNavigate();
  async function addProduct(product) {
    try {
      await axios.post(API, product);
      alert("Продукт успешно добавлена!");
    } catch (error) {
      console.error(error);
    }
  }
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discrip: "",
    img: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in product) {
      if (!product[key].trim()) {
        alert("Some inputs are empty!");
        return;
      }
    }

    setProduct({
      name: "",
      price: "",
      discrip: "",
      img: "",
    });
    navigate("/");
    addProduct(product);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }
  return (
    <div className={styles.add}>
      <form onSubmit={handleSubmit}>
        <p>Add Product</p>
        {Object.keys(product).map((item, index) => (
          <div key={index}>
            <Input
              className={styles.input}
              placeholder={item}
              name={item}
              onChange={handleChange}
              value={product.item}
              type={item}
            />
          </div>
        ))}
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default Addproduct;
