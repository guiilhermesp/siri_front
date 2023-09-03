import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountantReport } from "../../Services/Slices/AccountantReport/AccountantReportSlice";
import { fetchDeleteAccountantReport } from "../../Services/Slices/AccountantReport/deleteAccountantReport";
import { fetchPostAccountantReport } from "../../Services/Slices/AccountantReport/postAccountantReport";

const AccountantReport = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Mês", property: "month" },
    { title: "Saldo anterior", property: "total_previous_value" },
    { title: "Saldo atual", property: "total_current_value" },
    { title: "Valor de entrada", property: "total_entry_value" },
    { title: "Valor de saída", property: "total_output_value" },
    { title: "Arquivo", property: "download" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.AccountantReportSlice);

  useEffect(() => {
    dispatch<any>(fetchAccountantReport());
  }, [dispatch]);
  console.log("data:", data);
  return (
    <div>
      <Table
        title="Pedidos de AF"
        type="AccountantReport"
        columns={columns}
        data={data}
        onDelete={fetchDeleteAccountantReport}
        onCreate={fetchPostAccountantReport}
      />
    </div>
  );
};

export default AccountantReport;
