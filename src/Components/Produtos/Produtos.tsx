import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Services/Slices/productsSlice";

const Produtos = () => {
  const [slice, setSlice] = useState<any>();
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
    { title: "Editar", property: "button" },
    { title: "Excluir", property: "button" },
  ];

  const mock = [
    {
      id: 1,
      name: "Notebook dell G15",
      description: "I7 - 11g, RTX 3050",
      code: 12,
      measure: "unidade",
      category: "escritorio",
      price: "3.050,00",
      available: "Sim",
      created: "20/05/1976",
      updated: "22/06/1998",
      editProduct: "Editar",
      deleteProduct: "Excluir",
    },
    {
      id: 2,
      name: "Notebook dell G15",
      description: "I7 - 11g, RTX 3050",
      code: 12,
      measure: "unidade",
      category: "escritorio",
      price: "3.050,00",
      available: "Sim",
      created: "20/05/1976",
      updated: "22/06/1998",
      editProduct: "Editar",
      deleteProduct: "Excluir",
    },
    {
      id: 3,
      name: "Notebook dell G15",
      description: "I7 - 11g, RTX 3050",
      code: 12,
      measure: "unidade",
      category: "escritorio",
      price: "3.050,00",
      available: "Sim",
      created: "20/05/1976",
      updated: "22/06/1998",
      editProduct: "Editar",
      deleteProduct: "Excluir",
    },
  ];

  const { data } = useSelector((state: any) => state.productsSlice);
  console.log("response produtos: ", data);

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
      />
    </div>
  );
};

export default Produtos;
