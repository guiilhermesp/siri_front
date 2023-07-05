import { ChangeEventHandler, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  classNames?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  classNames,
  placeholder,
  ...props
}) => {
  return (
    <input
      className={`${styles.content} ${classNames}`}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
