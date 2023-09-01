import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../Components/Table/Table";
import { fetchSupplierOrder } from "../../Services/Slices/SupplierOrder/supplierOrderSlice";
import { fetchPatchSupplierOrder } from "../../Services/Slices/SupplierOrder/patchSupplierOrder";
import { fetchDeleteSupplierOrder } from "../../Services/Slices/SupplierOrder/deleteSupplierOrder";
import { fetchPostSupplierOrder } from "../../Services/Slices/SupplierOrder/postSupplierOrder";

const SupplierOrder = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Fornecedor", property: "supplier" },
    { title: "Defensoria", property: "public_defense" },
    { title: "Ata", property: "itens" },
    { title: "Prazo de entrega", property: "itens" },
    { title: "Recebido", property: "delete" },
    { title: "Criado", property: "created" },
    { title: "Atualizado", property: "updated" },
    { title: "Itens do pedido", property: "itens" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.supplierOrderSlice);

  useEffect(() => {
    dispatch<any>(fetchSupplierOrder());
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Pedidos do fornecedor"
        type="SupplierOrder"
        columns={columns}
        data={data.results}
        onEdit={fetchPatchSupplierOrder}
        onCreate={fetchPostSupplierOrder}
        onDelete={fetchDeleteSupplierOrder}
      />
    </div>
  );
};

export default SupplierOrder;
