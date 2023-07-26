import { useState } from "react";
import styles from "./EditModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";
import {
  convertDateFormat,
  handleShowObjectText,
  optionsType,
} from "../Helper";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeasures } from "../../Services/Slices/allMeasuresSlice";
import React from "react";
import { fetchAllCategories } from "../../Services/Slices/allCategoriesSlice";
import { fetchAllSectors } from "../../Services/Slices/allSectorsSlice";
import { fetchAllSuppliers } from "../../Services/Slices/allSuppliersSlice";
import SelectedList from "../SelectedList/SelectedList";

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

const EditModal: React.FC<ModalProps> = ({
  fields,
  onChange,
  className,
  data,
  isOpen,
  setIsOpen,
}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(isOpen);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>(data || {});
  const measures = useSelector<any>((state) => state.allMeasuresSlice);
  const categories = useSelector<any>((state) => state.allCategoriesSlice);
  const sectors = useSelector<any>((state) => state.allSectorsSlice);
  const suppliers = useSelector<any>((state) => state.allSuppliersSlice);
  const listOfOptions = ["measure", "category", "supplier", "sector"];

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

  const handleFocus = () => {
    setShowOptions(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 75);
  };

  const handleOptionClick = (field: any, e: any) => {
    const option = e.currentTarget.value;
    if (!formData.type.includes(option)) {
      setFormData((prevRange: any) => ({
        ...prevRange,
        type: [].concat(...formData[field], option),
      }));
    }
  };

  React.useEffect(() => {
    dispatch<any>(fetchAllMeasures());
    dispatch<any>(fetchAllCategories());
    dispatch<any>(fetchAllSectors());
    dispatch<any>(fetchAllSuppliers());
  }, []);

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
                {listOfOptions.includes(field.property) ? (
                  <>
                    <SelectedList
                      setList={setFormData}
                      list={formData}
                      field={field.property}
                      value={formData}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {showOptions && (
                      <div className={styles.list}>
                        {optionsType.map((option) => (
                          <button
                            className={`${styles.option} ${
                              formData.type.includes(option)
                                ? styles.selectedOption
                                : ""
                            }`}
                            key={uuidv4()}
                            value={option}
                            onClick={(e) =>
                              handleOptionClick(field.property, e)
                            }
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Input
                    type="text"
                    id={field.property}
                    value={convertDateFormat(
                      handleShowObjectText(formData[field.property])
                    )}
                    onChange={handleInputChange}
                    className={styles.input}
                    readOnly={listOfOptions.includes(field.property)}
                  />
                )}
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

export default EditModal;
