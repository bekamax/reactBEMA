import React from 'react'
import styles from './Card.module.css'

const Card = () => {
  return (
    // <div className={styles.cardContainer}>
    <div className={styles.card}>
      <img
        className={styles.img}
        src="https://roomika-mebel.ru/_ipx/f_webp/https://api.roomika-mebel.ru/upload/resize_cache/iblock/b9c/321_321_1/c9821e8pbt6sd4by2rfwendlf0joepnv.jpg"
        alt=""
      />
      <div className={styles.info}>
        <h2>info</h2>
        <p>$ price</p>
      </div>
    </div>
    // </div>
  );
}

export default Card