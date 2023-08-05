import React, { useState } from "react";
import styles from "./SelectedList.module.css";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";
import { extractNamesFromData } from "../Helper";

interface iSelectedList {
  setList: any;
  list: any;
  placeholder?: string;
  isType?: boolean;
  field: string;
  value?: any;
  readOnly?: boolean;
  className?: any;
  classNameDiv?: any;
  options?: any;
  defaultValue?: string;
  isSingle?: boolean;
  onChange?: any;
}

const SelectedList: React.FC<iSelectedList> = ({
  setList,
  list = {},
  placeholder,
  isType,
  field,
  value,
  readOnly,
  className,
  classNameDiv,
  options,
  isSingle,
  ...props
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value.trim();
    if (e.key === "Enter" && inputValue !== "") {
      setList((prev: any) => ({
        ...prev,
        [field]: isSingle ? [inputValue] : [...(prev[field] || []), inputValue],
      }));
      if (isSingle) {
        setShowOptions(false); // Hide the options after selecting a value (for isSingle mode).
      }
      e.currentTarget.value = "";
      e.preventDefault();
    }
  };

  const removeItem = (keyword: string) => {
    setList((prev: any) => ({
      ...prev,
      [field]: prev[field]?.filter((item: string) => item !== keyword),
    }));
  };

  const handleInputChange = () => {
    setShowOptions(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 75);
  };

  const handleOption = (e: any) => {
    const option = e.currentTarget.value;
    const selectedOption = options.find((opt: any) => opt.name === option);

    setList((prevRange: any) => ({
      ...prevRange,
      [field]: selectedOption,
    }));

    if (isSingle) {
      setShowOptions(false);
    }
  };

  return (
    <div className={styles.container}>
      <Input
        className={`${styles.input} ${className}`}
        onKeyPress={handleAddItem}
        name={field}
        placeholder={placeholder}
        onFocus={isType && handleInputChange}
        onBlur={isType && handleBlur}
        value={value}
        readOnly={readOnly}
        {...props}
      />

      {showOptions && (
        <div className={styles.list}>
          {extractNamesFromData(options).map((option: any) => (
            <button
              className={`${styles.option}`}
              key={uuidv4()}
              value={option}
              onClick={handleOption}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {list[field]?.length > 0 && !isSingle && (
        <div className={styles.selected}>
          {list[field]?.map((item: string) => (
            <div key={uuidv4()} className={`${styles.item} ${classNameDiv}`}>
              {item}
              <button
                className={styles.remove}
                onClick={() => removeItem(item)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedList;
