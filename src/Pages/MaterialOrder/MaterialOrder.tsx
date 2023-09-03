import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchMaterialOrder } from "../../Services/Slices/MaterialOrder/MaterialOrderSlice";
import { fetchDeleteMaterialOrder } from "../../Services/Slices/MaterialOrder/deleteMaterialOrder";
import { fetchPostMaterialOrder } from "../../Services/Slices/MaterialOrder/postMaterialOrder";

const MaterialOrder = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Fornecedor", property: "supplier" },
    { title: "Intervalo de data", property: "date" },
    { title: "Criado", property: "created" },
    { title: "Arquivo", property: "download" },
    { title: "Excluir", property: "delete" },
  ];

  const data = useSelector((state: any) => state.materialOrderSlice);

  useEffect(() => {
    dispatch<any>(fetchMaterialOrder("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Pedidos de AF"
        type="materialOrder"
        columns={columns}
        data={data}
        onDelete={fetchDeleteMaterialOrder}
        onCreate={fetchPostMaterialOrder}
      />
    </div>
  );
};

export default MaterialOrder;
