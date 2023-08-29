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
  classnameContainer?: any;
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
  classnameContainer,
  className,
  classNameDiv,
  options,
  isSingle,
  onChange,
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
        setShowOptions(false);
      }
      e.currentTarget.value = "";
      e.preventDefault();
    }
  };

  const removeItem = (keyword: string) => {
    setList((prev: any) => {
      const updatedKeywords = Array.isArray(prev[field])
        ? [...prev[field]]
        : [];
      const index = updatedKeywords.indexOf(keyword);
      if (index !== -1) {
        updatedKeywords.splice(index, 1);
      }

      return {
        ...prev,
        [field]: updatedKeywords,
      };
    });
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

    const alreadyExists = list[field].some(
      (item: any) => item.id === selectedOption.id
    );

    if (!alreadyExists) {
      setList((prevRange: any) => ({
        ...prevRange,
        [field]: isSingle
          ? selectedOption
          : [...prevRange[field], selectedOption],
      }));
    }

    if (isSingle) {
      setShowOptions(false);
    }
  };

  return (
    <div className={`${styles.container} ${classnameContainer}`}>
      <Input
        className={`${styles.input} ${className}`}
        onKeyPress={handleAddItem}
        name={field}
        placeholder={placeholder}
        onFocus={isType && handleInputChange}
        onBlur={isType && handleBlur}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        {...props}
      />

      {showOptions && (
        <div className={styles.list}>
          {options.map((option: any) => (
            <button
              className={`${styles.option}`}
              key={uuidv4()}
              value={option.name}
              onClick={handleOption}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}

      {!showOptions && list[field]?.length > 0 && (
        <div className={styles.selected}>
          {list[field]?.map((item: any) => (
            <div key={uuidv4()} className={`${styles.item} ${classNameDiv}`}>
              {item.name} {/* Render the 'name' property here */}
              <button
                className={styles.remove}
                onClick={() => removeItem(item.name)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedList;
