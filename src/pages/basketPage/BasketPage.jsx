import React from "react";
import BasketDetailed from "../../ui/basket/BasketDetailed";
import styles from "./BasketPage.module.css";
import Button from "../../ui/buttons/Button";

const BasketPage = () => {
  return (
    <div className={styles.basketPage}>
      <h2>Your shopping cart</h2>
      <div className={styles.basketTitleBig}>
        <p>product</p>
        <div className={styles.basketTitleSmall}>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
      <hr />
      <div>
        <BasketDetailed />
        <BasketDetailed />
      </div>
      <hr />
      <div>
        <div className={styles.subtotal}>
          <div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <span style={{display: 'flex', }}>
                <h2 style={{paddingRight: '2vh'}}>Subtotal</h2>
                <h2>$ 223</h2>
              </span>
            </div>
            <div>
              <p style={{ padding: "2vh 0" }}>
                Taxes and shipping are calculated at checkout
              </p>
              <Button>Go to checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
