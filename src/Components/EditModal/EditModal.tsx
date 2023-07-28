import { useEffect, useState } from "react";
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
  const [formData, setFormData] = useState<any>(data || {});
  const [options, setOptions] = useState<any>({});
  const measure = useSelector<any>((state) => state.allMeasuresSlice);
  const category = useSelector<any>((state) => state.allCategoriesSlice);
  const sector = useSelector<any>((state) => state.allSectorsSlice);
  const supplier = useSelector<any>((state) => state.allSuppliersSlice);
  const listOfOptions = ["measure", "category", "supplier", "sector"];

  // Define the OptionSelectors type
  type OptionSelectors = {
    [key: string]: any; // Replace 'any' with the appropriate type of your selectors
  };

  // Use OptionSelectors type for optionSelectors
  const optionSelectors: OptionSelectors = {
    measure: useSelector<any>((state) => state.allMeasuresSlice),
    category: useSelector<any>((state) => state.allCategoriesSlice),
    supplier: useSelector<any>((state) => state.allSuppliersSlice),
    sector: useSelector<any>((state) => state.allSectorsSlice),
  };

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

  const handleOptionClick = (field: any, e: any) => {
    const option = e.currentTarget.value;
    if (!formData[field].includes(option)) {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        [field]: [...prevFormData[field], option],
      }));
    }
  };

  useEffect(() => {
    dispatch<any>(fetchAllMeasures());
    dispatch<any>(fetchAllCategories());
    dispatch<any>(fetchAllSectors());
    dispatch<any>(fetchAllSuppliers());
  }, []);

  useEffect(() => {
    const tempOptions: OptionSelectors = {};
    listOfOptions.forEach((item) => {
      if (optionSelectors[item]?.data) {
        tempOptions[item] = optionSelectors[item].data;
      }
    });
    setOptions(tempOptions);
  }, [optionSelectors, listOfOptions]);

  return (
    <div
      className={`${className} ${styles.container}`}
      style={{ display: openModal ? "block" : "none" }}
    >
      {fields.map((field: Field) => (
        <div key={uuidv4()}>
          {field.property !== "button" && (
            <>
              {listOfOptions.includes(field.property) ? (
                <>
                  <div
                    className={styles.modal}
                    onClick={() => {
                      console.log(
                        "options[field.property]?.data",
                        options[field.property]?.data
                      );
                    }}
                  >
                    <label htmlFor={field.property} className={styles.label}>
                      {field.title}
                    </label>
                    {/* Conditionally render the SelectedList component */}
                    <SelectedList
                      setList={setFormData}
                      list={formData}
                      field={field.property}
                      value={formData[field.property].name}
                      options={
                        options[field.property]?.data
                          ? options[field.property]?.data?.name
                          : undefined
                      }
                      isType
                    />
                  </div>
                </>
              ) : (
                <>
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
                      readOnly={
                        listOfOptions.includes(field.property) // Set readOnly based on field type
                      }
                    />
                  </div>
                </>
              )}
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
