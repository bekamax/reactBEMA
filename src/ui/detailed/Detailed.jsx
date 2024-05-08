import React from "react";
import styles from "./Detailed.module.css";
import Button from "../buttons/Button";

const Detailed = () => {
  return (
    <div className={styles.detailed}>
      <img
        className={styles.img}
        src="https://roomika-mebel.ru/_ipx/f_webp/https://api.roomika-mebel.ru/upload/resize_cache/iblock/b9c/321_321_1/c9821e8pbt6sd4by2rfwendlf0joepnv.jpg"
        alt=""
      />
      <div className={styles.detailed_left}>
        <div className={styles.detailed_top}>
          <h2>name</h2>
          <p>$ 230</p>
        </div>
        <hr />
        <div className={styles.detailed_bottom}>
          <div className={styles.description}>
            <p>product description</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in
              iusto illum tenetur assumenda dolor consequuntur repudiandae
              inventore. Voluptatum nemo similique dicta rem exercitationem sit
              quisquam voluptas minima necessitatibus a!
            </p>
          </div>
          <div className={styles.Quantity}>
            <p>Quantity</p>
            <div className={styles.blockQuantity}>
              <Button style={{ color: "black" }}>-</Button>
              <p>1</p>
              <Button>+</Button>
            </div>
            <div className={styles.btnBlock}>
              <Button>Add to cart</Button>
              <Button>Save to favorites</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
