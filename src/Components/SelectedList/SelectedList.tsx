import React, { useState } from "react";
import styles from "./SelectedList.module.css";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";

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
  options?: string[];
  defaultValue?: string;
  isSingle?: boolean;
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
    setList((prevRange: any) => {
      let updatedList;
      if (isSingle) {
        console.log("option:", option);
        updatedList = option;
        value = option;
      } else {
        const existingList = prevRange[field] || [];
        if (!existingList.includes(option)) {
          updatedList = [...existingList, option];
        } else {
          updatedList = existingList;
        }
      }
      return {
        ...prevRange,
        [field]: updatedList,
      };
    });
    if (isSingle) {
      setShowOptions(false);
    }
  };
  console.log("list: ", list);
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
          {options?.map((option: any) => (
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
