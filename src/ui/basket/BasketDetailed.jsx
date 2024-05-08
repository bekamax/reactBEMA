import React from "react";
import styles from "./BasketDetailed.module.css";
import Button from "../buttons/Button";

const BasketDetailed = () => {
  return (
    <div>
      <div className={styles.productDetail}>
        <div className={styles.product}>
          <img
            src="https://roomika-mebel.ru/_ipx/f_webp/https://api.roomika-mebel.ru/upload/resize_cache/iblock/b9c/321_321_1/c9821e8pbt6sd4by2rfwendlf0joepnv.jpg"
            alt=""
          />
          <div className={styles.productInfo}>
            <h2>Graystone vase</h2>
            <p>A timeless ceramic vase with a tri color grey glaze.</p>
            <p>$ 222</p>
          </div>
        </div>
        <div className={styles.productDetailRight}>
          <div className={styles.quantity}>
            <Button style={{ color: "black" }}>-</Button>
            <p>1</p>
            <Button>+</Button>
          </div>
          <div className={styles.price}>
            <h2>$ 222</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDetailed;
