import React, { useState } from "react";
import styles from "./Table.module.css";
import Modal from "../EditModal/EditModal";
import Button from "../Forms/Button";

interface Column {
  title: string;
  type?: "string" | "number" | "date";
  property: string;
}

interface TableProps {
  title: string;
  createButton: boolean;
  columns: Column[];
  data: {
    id: number;
    name: string;
    created: string;
    updated: string;
    category: {
      id: number;
      name: string;
      code: string;
    };
    code: string;
    description: string;
    is_available: boolean;
    measure: {
      id: number;
      name: string;
      created: string;
      updated: string;
    };
    price: number;
  }[];
}

const Table: React.FC<TableProps> = ({
  title,
  createButton,
  columns,
  data,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  function handleCreate(): void {
    console.log("handleCreate on Table.tsx");
  }

  return (
    <div className={styles.genericTable}>
      <div className={styles.headerTable}>
        <div className={styles.tableTitle}>{title}</div>
        {createButton && (
          <div className={styles.tableButtons}>
            <Button className={styles.create} onClick={handleCreate}>
              Criar
            </Button>
          </div>
        )}
      </div>
      <hr />
      <div className={styles.tableHeader}>
        {columns?.map((column, index) => (
          <div key={index} className={styles.columnHeader}>
            <div className={styles.columnTitle}>{column.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {data?.map((row: any, rowIndex: any) => (
          <div key={rowIndex} className={styles.tableRow}>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className={styles.tableCell}>
                {column.property === "button" ? (
                  <Button
                    className={styles.inlineButton}
                    key={columnIndex}
                    onClick={handleModal}
                  >
                    {column.title}
                  </Button>
                ) : typeof row[column.property] === "object" ? (
                  <div>{row[column.property].name}</div>
                ) : (
                  row[column.property]
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {openModal && (
        <Modal className={styles.modal} fields={columns} data={data} />
      )}
    </div>
  );
};

export default Table;
