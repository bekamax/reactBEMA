import React from "react";
import styles from "./Products.module.css";
import Card from "../../ui/Card/Card";
import OurBrand from "../ourBrand/OurBrand";

const ProductList = () => {
  return (
    <>
      <div className={styles.blockCard}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.blockBrand}>
        <OurBrand />
      </div>
    </>
  );
};

export default ProductList;
