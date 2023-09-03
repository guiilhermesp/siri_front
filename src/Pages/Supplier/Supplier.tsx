import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchSupplier } from "../../Services/Slices/Supplier/SupplierSlice";
import { fetchPostSupplier } from "../../Services/Slices/Supplier/postSupplier";
import { fetchDeleteSupplier } from "../../Services/Slices/Supplier/deleteSupplier";
import { fetchPatchSupplier } from "../../Services/Slices/Supplier/patchSupplier";

const Supplier = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Agente", property: "agent" },
    { title: "Endereço", property: "address" },
    { title: "Email", property: "email" },
    { title: "Contato", property: "phone" },
    { title: "CNPJ", property: "nic" },
    { title: "CPF", property: "ssn" },
    { title: "RG", property: "ein" },
    { title: "Pedidos", property: "delete" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.SupplierSlice);

  useEffect(() => {
    dispatch<any>(fetchSupplier("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Fornecedores"
        type="supplier"
        columns={columns}
        data={data.results}
        onEdit={fetchPatchSupplier}
        onDelete={fetchDeleteSupplier}
        onCreate={fetchPostSupplier}
      />
    </div>
  );
};

export default Supplier;
