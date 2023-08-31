import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../Components/Table/Table";
import { fetchRequest } from "../../Services/Slices/Order/orderSlice";
import styles from "./Request.module.css";

const Request = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Usuário", property: "id" },
    { title: "Enviado", property: "id" },
    { title: "Parcialmente adicionado", property: "id" },
    { title: "Completamente adicionado", property: "id" },
    { title: "Criado", property: "id" },
    { title: "Atualizado", property: "id" },
    { title: "Itens", property: "id" },
    { title: "Visualizar", property: "id" },
  ];

  const { data } = useSelector((state: any) => state.orderSlice);

  useEffect(() => {
    dispatch<any>(fetchRequest("1"));
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Pedidos"
        type="request"
        columns={columns}
        data={data.results}
      />
    </div>
  );
};

export default Request;
