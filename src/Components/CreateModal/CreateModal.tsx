import React from "react";
import { useEffect, useState } from "react";
import styles from "./CreateModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";
import {
  convertDateFormat,
  extractNamesFromData,
  handleShowObjectText,
} from "../Helper";
import { useDispatch, useSelector } from "react-redux";
import SelectedList from "../SelectedList/SelectedList";
import { fetchAllMeasures } from "../../Services/Slices/allMeasuresSlice";
import { fetchAllCategories } from "../../Services/Slices/allCategoriesSlice";
import { fetchAllSectors } from "../../Services/Slices/allSectorsSlice";
import { fetchAllSuppliers } from "../../Services/Slices/allSuppliersSlice";

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
  setIsOpen: any;
  fetch: any;
}

const CreateModal: React.FC<ModalProps> = ({
  fields,
  onChange,
  className,
  isOpen,
  setIsOpen,
  fetch,
}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(isOpen);
  const [formData, setFormData] = useState<any>({
    name: "",
    description: "",
    code: "",
    measure: "",
    category: "",
    price: "",
    is_available: "",
  });
  const measure: any = useSelector<any>((state) => state.allMeasuresSlice);
  const category: any = useSelector<any>((state) => state.allCategoriesSlice);
  const sector: any = useSelector<any>((state) => state.allSectorsSlice);
  const supplier: any = useSelector<any>((state) => state.allSuppliersSlice);
  const listOfOptions = ["measure", "category", "supplier", "sector"];

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = event.target;
  //   setFormData((prevFormData: any) => ({
  //     ...prevFormData,
  //     [id]: value,
  //   }));

  //   if (onChange) {
  //     onChange(event);
  //   }
  // };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    if (name === "date") {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev: any) => {
        if (Array.isArray(prev[name])) {
          return {
            ...prev,
            [name]: [...prev[name], value],
          };
        }
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleCancel = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    // dispatch<any>(fetch(id, body));
  };

  const extractNames = (property: string) => {
    switch (property) {
      case "measure":
        console.log(extractNamesFromData(measure.data));
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
                  <div className={styles.modal}>
                    <label htmlFor={field.property} className={styles.label}>
                      {field.title}
                    </label>
                    <SelectedList
                      setList={setFormData}
                      list={formData}
                      field={field.property}
                      defaultValue={formData[field.property]}
                      options={extractNames(field.property)}
                      isType
                      isSingle
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

export default CreateModal;
