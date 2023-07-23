// import { useState } from "react";
// import styles from "./EditModal.module.css";
// import Button from "../Forms/Button";
// import Input from "../Forms/Input";

// interface Field {
//   property: string;
//   title: string;
// }

// interface ModalProps {
//   fields: Field[];
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onSubmit?: () => void;
//   className?: string;
//   isOpen: boolean;
//   data?: any;
// }

// const Modal: React.FC<ModalProps> = ({
//   fields,
//   onChange,
//   className,
//   data,
//   isOpen,
// }) => {
//   const [openModal, setOpenModal] = useState<boolean>(isOpen);

//   const handleSubmit = () => {};

//   return (
//     <div
//       className={`${className} ${styles.container}`}
//       style={{ display: openModal ? "block" : "none" }}
//     >
//       {fields.map((field: Field) => (
//         <div key={field.property} className={styles.modal}>
//           <label htmlFor={field.property} className={styles.label}>
//             {field.title}
//           </label>
//           <Input
//             type="text"
//             id={field.property}
//             value={data?.[field.property]}
//             onChange={onChange}
//             placeholder={field.title}
//             className={styles.input}
//           />
//         </div>
//       ))}
//       <div className={styles.handle}>
//         <Button className={styles.button}>Cancel</Button>
//         <Button className={styles.button} onClick={handleSubmit}>
//           Salvar
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import { useState } from "react";
import styles from "./EditModal.module.css";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

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

const Modal: React.FC<ModalProps> = ({
  fields,
  onChange,
  className,
  data,
  isOpen,
  setIsOpen,
}) => {
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
  console.log("fields: ", fields);
  return (
    <div
      className={`${className} ${styles.container}`}
      style={{ display: openModal ? "block" : "none" }}
    >
      {fields.map((field: Field) => (
        <div>
          {field.property !== "button" && (
            <div key={field.property} className={styles.modal}>
              <label htmlFor={field.property} className={styles.label}>
                {field.title}
              </label>
              <Input
                type="text"
                id={field.property}
                value={formData[field.property]}
                onChange={handleInputChange}
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
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default Modal;
