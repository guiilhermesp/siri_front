import { useEffect, useState } from "react";
import styles from "./EditModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";
import { convertDateFormat, handleShowObjectText } from "../Helper";
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
  const measure: any = useSelector<any>((state) => state.allMeasuresSlice);
  const category: any = useSelector<any>((state) => state.allCategoriesSlice);
  const sector: any = useSelector<any>((state) => state.allSectorsSlice);
  const supplier: any = useSelector<any>((state) => state.allSuppliersSlice);
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

  const extractNamesFromData = (data: any[]) => {
    return data.map((item) => item.name);
  };

  const extractNames = (property: string) => {
    switch (property) {
      case "measure":
        console.log(
          "extractNamesFromData(measure.data):",
          extractNamesFromData(measure.data)
        );
        return extractNamesFromData(measure.data);
      case "category":
        return extractNamesFromData(category.data);
      case "sector":
        return extractNamesFromData(sector.data);
      case "supplier":
        return extractNamesFromData(supplier.data);
      default:
        return [];
    }
  };

  useEffect(() => {
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
              {listOfOptions.includes(field.property) ? (
                <>
                  <div
                    className={styles.modal}
                    onClick={() => {
                      console.log(
                        "extractNames(field.property)",
                        extractNames(field.property)
                      );
                    }}
                  >
                    <label htmlFor={field.property} className={styles.label}>
                      {field.title}
                    </label>
                    <SelectedList
                      setList={setFormData}
                      list={formData}
                      field={field.property}
                      defaultValue={formData[field.property].name}
                      options={extractNames(field.property)}
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
                      defaultValue={convertDateFormat(
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
