import { useState } from "react";
import styles from "./CreateModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { convertDateFormat, handleShowObjectText } from "../Helper";

interface Field {
  property: string;
  title: string;
}

interface ModalProps {
  fields: Field[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  className?: string;
  isOpen: boolean;
  data?: any;
  setIsOpen: any;
}

const CreateModal: React.FC<ModalProps> = ({
  fields,
  onChange,
  className,
  data,
  isOpen,
  setIsOpen,
}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(isOpen);
  const [formData, setFormData] = useState<any>(data || {});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [id]: value,
    }));

    if (onChange) {
      onChange(event);
    }
  };

  const handleCancel = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {};

  return (
    <div
      className={`${className} ${styles.container}`}
      style={{ display: openModal ? "block" : "none" }}
    >
      {fields.map((field: Field) => (
        <div key={uuidv4()}>
          {field.property !== "button" && (
            <>
              {}
              <div className={styles.modal}>
                <label htmlFor={field.property} className={styles.label}>
                  {field.title}
                </label>
                <Input
                  type="text"
                  id={field.property}
                  value={convertDateFormat(
                    handleShowObjectText(formData[field.property])
                  )}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
            </>
          )}
        </div>
      ))}
      <div className={styles.handle}>
        <Button className={styles.button} onClick={handleCancel}>
          Cancel
        </Button>
        <Button className={styles.button} onClick={handleSubmit}>
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default CreateModal;
