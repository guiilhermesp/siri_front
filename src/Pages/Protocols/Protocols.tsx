import { useEffect } from "react";
import Table from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProtocol } from "../../Services/Slices/Protocol/ProtocolSlice";
import { fetchPatchProtocol } from "../../Services/Slices/Protocol/patchProtocol";
import { fetchPostProtocol } from "../../Services/Slices/Protocol/postProtocol";
import { fetchDeleteProtocol } from "../../Services/Slices/Protocol/deleteProtocol";

const Protocols = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Código", property: "code" },
    { title: "Fornecedor", property: "supplier" },
    { title: "Categoria", property: "category" },
    { title: "Início de vigência", property: "startVigencia" },
    { title: "Fim de vigência", property: "endVigencia" },
    { title: "Criado", property: "download" },
    { title: "Atualizado", property: "items" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const data = useSelector((state: any) => state.protocolSlice);

  useEffect(() => {
    dispatch<any>(fetchProtocol("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Atas"
        type="protocol"
        columns={columns}
        data={data}
        onEdit={fetchPatchProtocol}
        onDelete={fetchDeleteProtocol}
        onCreate={fetchPostProtocol}
      />
    </div>
  );
};

export default Protocols;
