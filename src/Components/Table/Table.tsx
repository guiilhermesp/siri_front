// import React from "react";
// import styles from "./Table.module.css";

// interface Column {
//   title: string;
//   type: "string" | "number" | "date";
// }

// interface TableProps {
//   title: string;
//   createButton: boolean;
//   columns: any[];
//   data: any[];
// }

// const Table: React.FC<TableProps> = ({
//   title,
//   createButton,
//   columns,
//   data,
// }) => {
//   function handleCreate(): void {
//     console.log("handleCreate on Table.tsx");
//   }

//   return (
//     <div className={styles.genericTable}>
//       <div className={styles.headerTable}>
//         <div className={styles.tableTitle}>{title}</div>
//         {createButton && (
//           <div className={styles.tableButtons}>
//             <button onClick={handleCreate}>Criar</button>
//           </div>
//         )}
//       </div>
//       <hr />
//       <div className={styles.tableHeader}>
//         {columns.map((column, index) => (
//           <div key={index} className={styles.columnHeader}>
//             <div className={styles.columnTitle}>{column.title}</div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.tableBody}>
//         {data.map((row, index) => (
//           <div key={index} className={styles.tableRow}>
//             {columns.map((column, columnIndex) => (
//               {(column.property == "button")
//               ? (<button>{row.[column.name]}</button>)
//               : (<div key={columnIndex} className={styles.tableCell}>
//                 {row[column.property]}
//               </div>)}
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Table;

import React from "react";
import styles from "./Table.module.css";

interface Column {
  title: string;
  type: "string" | "number" | "date";
  property: string;
}

interface TableProps {
  title: string;
  createButton: boolean;
  columns: Column[];
  data: any[];
}

const Table: React.FC<TableProps> = ({
  title,
  createButton,
  columns,
  data,
}) => {
  function handleCreate(): void {
    console.log("handleCreate on Table.tsx");
  }

  return (
    <div className={styles.genericTable}>
      <div className={styles.headerTable}>
        <div className={styles.tableTitle}>{title}</div>
        {createButton && (
          <div className={styles.tableButtons}>
            <button onClick={handleCreate}>Criar</button>
          </div>
        )}
      </div>
      <hr />
      <div className={styles.tableHeader}>
        {columns.map((column, index) => (
          <div key={index} className={styles.columnHeader}>
            <div className={styles.columnTitle}>{column.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            {columns.map((column, columnIndex) =>
              column.property === "button" ? (
                <button key={columnIndex}>teste</button>
              ) : (
                <div key={columnIndex} className={styles.tableCell}>
                  {row[column.property]}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
