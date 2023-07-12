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
                  <button key={columnIndex}>{column.title}</button>
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
    </div>
  );
};

export default Table;
