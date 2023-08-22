import Table from "../../Components/Table/Table";
import { useSelector } from "react-redux";
import StockReportForm from "./StockReportForm/StockReportForm";

const StockReport = () => {
  const columns: any[] = [
    { title: "Código", property: "id" },
    { title: "Produto", property: "sector" },
    { title: "Quantidade de Entrada", property: "sector" },
    { title: "Quantidade de Saída", property: "sector" },
    { title: "Valor de Entrada", property: "sector" },
    { title: "Valor de Saída", property: "sector" },
    { title: "Núcleo", property: "sector" },
    { title: "Setor", property: "sector" },
  ];

  const { data } = useSelector((state: any) => state.stockReportSlice);
  
  return (
    <div>
        <StockReportForm />
      <Table
        title="Relatório de Estoque"
        columns={columns}
        data={data.results}
      />
    </div>
  );
};

export default StockReport;
