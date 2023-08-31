import React from "react";
import { useEffect, useState } from "react";
import styles from "./CreateModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import {
  filterColumns,
  handleObjectPostMeasure,
  isBooleanDisplay,
  is_available,
  removeObjectFromCode,
} from "../Helper";
import { useDispatch, useSelector } from "react-redux";
import SelectedList from "../SelectedList/SelectedList";
import { fetchAllMeasures } from "../../Services/Slices/Measure/allMeasuresSlice";
import { fetchAllCategories } from "../../Services/Slices/allCategoriesSlice";
import { fetchAllSectors } from "../../Services/Slices/Sector/allSectorsSlice";
import { fetchAllSuppliers } from "../../Services/Slices/allSuppliersSlice";
import { fetchPostProduct } from "../../Services/Slices/Product/postProduct";

interface Field {
  property: string;
  title: string;
}

interface HandleProperties {
  [key: string]: (data: any) => any;
}

interface ModalProps {
  fields: Field[];
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  className?: string;
  isOpen: boolean;
  setIsOpen: any;
  fetch: any;
}

const CreateModal: React.FC<ModalProps> = ({
  fields,
  type,
  onChange,
  className,
  isOpen,
  setIsOpen,
  fetch,
}) => {
  const handleProperties: HandleProperties = {
    measure: handleObjectPostMeasure,
    sector: handleObjectPostMeasure,
    product: handleObjectPostMeasure,
    warehouse: handleObjectPostMeasure,
    stock: handleObjectPostMeasure,
    stockReport: handleObjectPostMeasure,
  };
  const listOfOptions = [
    "measure",
    "category",
    "supplier",
    "sector",
    "is_available",
  ];

  const remove = ["button", "created", "updated", "id", "delete", "edit"];
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
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
    dispatch<any>(fetch(handleProperties[type](formData)));
    setIsOpen(!isOpen);
  };

  const extractNames = (property: string) => {
    switch (property) {
      case "measure":
        return measure.data;
      case "category":
        return category.data;
      case "sector":
        return sector.data;
      case "supplier":
        return supplier.data;
      case "is_available":
        return is_available;
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
      {filterColumns(fields, remove).map((field: Field) => (
        <div>
          {listOfOptions.includes(field.property) ? (
            <div className={styles.modal}>
              <label htmlFor={field.property} className={styles.label}>
                {field.title}
              </label>
              <SelectedList
                setList={setFormData}
                list={formData}
                field={field.property}
                value={formData[field.property].name}
                options={extractNames(field.property)}
                isType
                isSingle
                readOnly
                onChange={(selectedOption: any) => {
                  setFormData((prev: any) => ({
                    ...prev,
                    [field.property]: selectedOption?.id,
                  }));
                }}
              />
            </div>
          ) : (
            <div className={styles.modal}>
              <label htmlFor={field.property} className={styles.label}>
                {field.title}
              </label>
              <Input
                type="text"
                name={field.property}
                value={isBooleanDisplay(formData[field.property])}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          )}
        </div>
      ))}
      <div className={styles.handle}>
        <Button className={styles.button} onClick={handleCancel}>
          Cancel
        </Button>
        <Button className={styles.button} onClick={handleSubmit}>
          Criar
        </Button>
      </div>
    </div>
  );
};

export default CreateModal;
