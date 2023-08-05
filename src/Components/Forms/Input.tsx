import React, { useEffect, useRef, ForwardedRef } from "react";
import styles from "./Input.module.css";

interface iInput {
  className?: any;
  name?: string;
  value?: any;
  content?: any;
  onClick?: any;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  type?: any;
  placeholder?: string;
  onKeyPress?: any;
  id?: any;
  readOnly?: boolean;
  min?: string;
  max?: string;
  step?: string;
  pattern?: string;
  defaultValue?: any;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, iInput> = (
  { className, onClick, ...props },
  ref
) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.value]);

  return (
    <input
      className={`${styles.content} ${className}`}
      onClick={onClick}
      ref={(el) => {
        inputRef.current = el;
        if (ref) {
          if (typeof ref === "function") {
            ref(el);
          } else {
            ref.current = el;
          }
        }
      }}
      {...props}
    />
  );
};

export default React.forwardRef(Input);
