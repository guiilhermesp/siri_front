import React, { useState } from "react";
import styles from "./Table.module.css";
import EditModal from "../EditModal/EditModal";
import Button from "../Forms/Button";
import { convertDateFormat, handleTextBoolean } from "../Helper";
import CreateModal from "../CreateModal/CreateModal";
import { fetchDeleteProduct } from "../../Services/Slices/Product/deleteProduct";
import { useDispatch } from "react-redux";

interface Column {
  title: string;
  type?: "string" | "number" | "date";
  property: string;
}

interface TableProps {
  title: string;
  createButton?: boolean;
  columns: Column[];
  edit?: any;
  create?: any;
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
  edit,
  create,
}) => {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);

  const handleEditModal = (rowData: any) => {
    setSelectedRowData(rowData);
    setOpenEditModal(!openEditModal);
  };

  const handleCreateModal = () => {
    setOpenCreateModal(!openEditModal);
  };

  const handleDelete = (id: string | number) => {
    dispatch<any>(fetchDeleteProduct(id));
    setTimeout(() => {
      window.location.reload();
    }, 1.5 * 1000);
  };

  return (
    <div className={styles.genericTable}>
      <div className={styles.headerTable}>
        <div className={styles.tableTitle}>{title}</div>
        {createButton && (
          <div className={styles.tableButtons}>
            <Button className={styles.create} onClick={handleCreateModal}>
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
                {column.property === "edit" ? (
                  <Button
                    className={styles.inlineButton}
                    key={columnIndex}
                    onClick={() => handleEditModal(row)}
                  >
                    {column.title}
                  </Button>
                ) : column.property === "delete" ? (
                  <Button
                    className={styles.inlineButton}
                    key={columnIndex}
                    onClick={() => handleDelete(row.id)}
                  >
                    {column.title}
                  </Button>
                ) : typeof row[column.property] === "object" ? (
                  <div>{row[column.property].name}</div>
                ) : typeof row[column.property] === "boolean" ? (
                  <div>{handleTextBoolean(row[column.property])}</div>
                ) : (
                  convertDateFormat(row[column.property])
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {openEditModal && (
        <EditModal
          className={styles.modal}
          fields={columns}
          data={selectedRowData}
          isOpen={openEditModal}
          setIsOpen={setOpenEditModal}
          fetch={edit}
        />
      )}
      {openCreateModal && (
        <CreateModal
          className={styles.modal}
          fields={columns}
          isOpen={openCreateModal}
          setIsOpen={setOpenCreateModal}
          fetch={create}
        />
      )}
    </div>
  );
};

export default Table;
