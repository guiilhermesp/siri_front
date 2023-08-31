import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { fetchInvoice } from "../../Services/Slices/Invoice/invoiceSlice";
import { fetchCreateInvoice } from "../../Services/Slices/Invoice/postInvoice";
import { fetchDeleteInvoice } from "../../Services/Slices/Invoice/deleteInvoice";
import styles from "./Invoice.module.css";

const Invoice = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Código", property: "code" },
    { title: "Fornecedor", property: "supplier" },
    { title: "Defensoria", property: "public_defense" },
    { title: "Valor total", property: "total_value" },
    { title: "Baixar", property: "download" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.invoiceSlice);

  useEffect(() => {
    dispatch<any>(fetchInvoice("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Controle de notas"
        type="invoice"
        columns={columns}
        data={data.results}
        onCreate={fetchCreateInvoice}
        onDelete={fetchDeleteInvoice}
      />
    </div>
  );
};

export default Invoice;
