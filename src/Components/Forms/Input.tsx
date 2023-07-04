import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  return <input className={styles.content} onChange={onChange} {...props} />;
};

export default Input;
