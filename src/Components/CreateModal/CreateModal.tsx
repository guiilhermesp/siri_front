import React from "react";
import { useEffect, useState } from "react";
import styles from "./CreateModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { v4 as uuidv4 } from "uuid";
import {
  filterColumns,
  isBooleanDisplay,
  removeObjectFromCode,
} from "../Helper";
import { useDispatch, useSelector } from "react-redux";
import SelectedList from "../SelectedList/SelectedList";
import { fetchAllMeasures } from "../../Services/Slices/allMeasuresSlice";
import { fetchAllCategories } from "../../Services/Slices/allCategoriesSlice";
import { fetchAllSectors } from "../../Services/Slices/allSectorsSlice";
import { fetchAllSuppliers } from "../../Services/Slices/allSuppliersSlice";
import { fetchPostProduct } from "../../Services/Slices/postProduct";

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
  const listOfOptions = ["measure", "category", "supplier", "sector"];
  const remove = ["button", "created", "updated", "id"];
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(isOpen);
  const [formData, setFormData] = useState<any>({
    name: "",
    description: "",
    code: "",
    measure: "",
    category: "",
    price: "",
    is_available: true,
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
    dispatch<any>(fetchPostProduct(removeObjectFromCode(formData)));
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
        <div key={uuidv4()}>
          {listOfOptions.includes(field.property) ? (
            <div className={styles.modal}>
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
