import React from 'react'
import styles from './OurBrand.module.css'

const OurBrand = () => {
  return (
    <>
      <div className={styles.secondPage}>
        <h2 className={styles.secondPage_Zag}>
          What makes our brand different
        </h2>
        <div className={styles.frames}>
          <div className={styles.frame}>
            <span>Next day as standard</span>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className={styles.frame}>
            <span>Made by true artisans</span>
            <p>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className={styles.frame}>
            <span>Unbeatable prices</span>
            <p>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className={styles.frame}>
            <span>Recycled packaging</span>
            <p>
              We use 100% recycled pckaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurBrand