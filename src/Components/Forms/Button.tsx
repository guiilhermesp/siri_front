import React, { ReactNode, MouseEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  children,
}) => {
  return (
    <button className={`${styles.content} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
