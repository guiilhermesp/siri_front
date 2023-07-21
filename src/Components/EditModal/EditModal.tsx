// import { ChangeEventHandler, InputHTMLAttributes } from "react";
// import styles from "./EditModal.module.css";
// import Button from "../Forms/Button";
// import Input from "../Forms/Input";

// interface Field {
//   property: string;
//   title: string;
// }

// interface ModalProps {
//   fields: Field[];
//   data?: any;
//   onChange?: ChangeEventHandler<HTMLInputElement>;
//   onSubmit?: () => void;
//   className?: string;
//   isEditing?: boolean;
// }

// const Modal: React.FC<ModalProps> = ({
//   fields,
//   onChange,
//   className,
//   isEditing,
//   data,
// }) => {
//   console.log("fields:", fields);

//   const handleSubmit = () => {};

//   return (
//     <div className={`${className} ${styles.container}`}>
//       {fields.map((field: any) => (
//         <div key={field.id} className={styles.modal}>
//           <label htmlFor={field.id} className={styles.label}>
//             {field.title}
//           </label>
//           <Input
//             type="text"
//             id={field.id}
//             value={isEditing ? data?.[field.id] : ""}
//             onChange={onChange}
//             placeholder={field.label}
//             className={styles.input}
//           />
//         </div>
//       ))}
//       <div className={styles.handle}>
//         <Button className={styles.button}>Cancel</Button>
//         <Button className={styles.button} onClick={handleSubmit}>
//           {isEditing ? "Salvar" : "Enviar"}
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
  isEditing?: boolean;
  isOpen: boolean;
  data?: any;
}

const Modal: React.FC<ModalProps> = ({
  fields,
  onChange,
  className,
  isEditing,
  data,
  isOpen,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(isOpen);

  const handleSubmit = () => {};

  return (
    <div
      className={`${className} ${styles.container}`}
      style={{ display: openModal ? "block" : "none" }}
    >
      {fields.map((field: Field) => (
        <div key={field.property} className={styles.modal}>
          <label htmlFor={field.property} className={styles.label}>
            {field.title}
          </label>
          <Input
            type="text"
            id={field.property}
            value={isEditing ? data?.[field.property] : ""}
            onChange={onChange}
            placeholder={field.title}
            className={styles.input}
          />
        </div>
      ))}
      <div className={styles.handle}>
        <Button className={styles.button}>Cancel</Button>
        <Button className={styles.button} onClick={handleSubmit}>
          {isEditing ? "Salvar" : "Enviar"}
        </Button>
      </div>
    </div>
  );
};

export default Modal;