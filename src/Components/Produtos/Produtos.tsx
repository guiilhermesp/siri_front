import React from "react";
import Table from "../Table/Table";

interface Column {
  title: string;
  property: string;
}

const Produtos = () => {
  const columns: any[] = [
    { title: "Id", property: "id" },
    { title: "Nome", property: "name" },
    { title: "Descrição", property: "description" },
    { title: "Código", property: "code" },
    { title: "Medida", property: "measure" },
    { title: "Categoria", property: "category" },
    { title: "Preço", property: "price" },
    { title: "Disponível", property: "available" },
    { title: "Criado", property: "created" },
    { title: "Atualizado", property: "updated" },
    { title: "Editar", property: "button" },
    { title: "Excluir", property: "button" },
  ];

  const data = [
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
  return (
    <div>
      <Table title="Produtos" createButton columns={columns} data={data} />
    </div>
  );
};

export default Produtos;
