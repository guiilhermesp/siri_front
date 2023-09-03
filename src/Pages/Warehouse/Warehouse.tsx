import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchWarehouse } from "../../Services/Slices/Warehouse/warehouseSlice";

const Warehouse = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Código", property: "product_code" },
    { title: "Produto", property: "product_name" },
    { title: "Medida", property: "product_measure" },
    { title: "Quantidade", property: "quantity" },
    { title: "Valor Total", property: "price" },
    { title: "Valor Médio", property: "average_price" },
  ];

  const { data } = useSelector((state: any) => state.warehouseSlice);
  useEffect(() => {
    dispatch<any>(fetchWarehouse());
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Inventário do almoxarifado"
        type="warehouse"
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default Warehouse;
