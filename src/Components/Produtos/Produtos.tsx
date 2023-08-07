import { useEffect } from "react";
import Table from "../Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Services/Slices/productsSlice";
import { fetchPatchProduct } from "../../Services/Slices/patchProduct";
import { fetchPostProduct } from "../../Services/Slices/postProduct";

const Produtos = () => {
  const dispatch = useDispatch();
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Descrição", property: "description" },
    { title: "Código", property: "code" },
    { title: "Medida", property: "measure" },
    { title: "Categoria", property: "category" },
    { title: "Preço", property: "price" },
    { title: "Disponível", property: "is_available" },
    { title: "Criado", property: "created" },
    { title: "Atualizado", property: "updated" },
    { title: "Editar", property: "edit" },
    { title: "Excluir", property: "delete" },
  ];

  const { data } = useSelector((state: any) => state.productsSlice);

  useEffect(() => {
    dispatch<any>(fetchProducts("1"));
    const converter = sessionStorage.getItem("me");
    const me = JSON.parse(converter as string);
  }, [dispatch]);

  return (
    <div>
      <Table
        title="Produtos"
        createButton
        columns={columns}
        data={data.results}
        edit={fetchPatchProduct}
        create={fetchPostProduct}
      />
    </div>
  );
};

export default Produtos;
