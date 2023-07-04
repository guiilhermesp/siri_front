import React from "react";
import Table from "../Table/Table";

interface Column {
  title: string;
  property: string;
}

const Produtos = () => {
  const columns: any[] = [
    { title: "Nome", property: "nome" },
    { title: "Descrição", property: "descricao" },
    { title: "Medida", property: "medida" },
    { title: "Quantidade", property: "quantidade" },
    { title: "Excluir", property: "button" },
  ];

  const data = [
    {
      nome: "Notebook",
      descricao: 30,
      medida: "Caixa c/ 10",
      quantidade: 12,
      excluir: true,
    },
    {
      nome: "Computador",
      descricao: 25,
      medida: "Caixa c/ 15",
      quantidade: 8,
      excluir: true,
    },
    {
      nome: "Monitor",
      descricao: 40,
      medida: "Caixa c/ 20",
      quantidade: 43,
      excluir: true,
    },
  ];
  return (
    <div>
      <Table title="Produtos" createButton columns={columns} data={data} />
    </div>
  );
};

export default Produtos;
