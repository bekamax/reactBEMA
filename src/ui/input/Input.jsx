import React from "react";
import styles from "./input.module.css";
export const Input = ({
  name,
  onChange,
  value,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      
    />
  );
};
