import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchStock } from "../../Services/Slices/Stock/stockSlice";

const Stock = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Setor", property: "sector" },
  ];

  const { data } = useSelector((state: any) => state.stockSlice);

  useEffect(() => {
    dispatch<any>(fetchStock("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Estoque"
        columns={columns}
        data={data.results}
      />
    </div>
  );
};

export default Stock;
