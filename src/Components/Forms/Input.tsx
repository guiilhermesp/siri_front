import { ChangeEventHandler, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  type?: any;
  id?: any;
  value?: any;
  onFocus?: any;
  onBlur?: any;
}

const Input: React.FC<InputProps> = ({
  onChange,
  className,
  placeholder,
  id,
  value,
  type,
  ...props
}) => {
  const inputClassName = `${className || ""} ${styles.content}`;
  return (
    <input
      className={inputClassName.trim()}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      {...props}
    />
  );
};

export default Input;
