import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { fetchReceiveReport } from "../../Services/Slices/ReceiveReport/receiveReportSlice";
import { fetchDispatchReport } from "../../Services/Slices/DispatchReport/dispatchReportSlice";

const DispatchReport = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Núcleo", property: "public_defense" },
    { title: "Produto", property: "product" },
    { title: "Descrição do produto", property: "id" },
    { title: "Quantidade", property: "quantity" },
    { title: "Descrição da guia", property: "description" },
    { title: "Criado", property: "created" },
    { title: "Atualizado", property: "updated" },
    { title: "Baixar", property: "download" },
    { title: "Editar", property: "edit" },
  ];

  const { data } = useSelector((state: any) => state.dispatchReportSlice);

  useEffect(() => {
    dispatch<any>(fetchDispatchReport("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Guias de saídas"
        type="dispatchReport"
        columns={columns}
        data={data.results}
      />
    </div>
  );
};

export default DispatchReport;
