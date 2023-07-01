import React from "react";
import Table from "../Table/Table";

const Produtos = () => {
  const columns = [
    { title: "Nome", property: "nome" },
    { title: "Descrição", property: "descricao" },
    { title: "Medida", property: "medida" },
    { title: "Quantidade", property: "quantidade" },
  ];

  const data = [
    { nome: "Notebook", descricao: 30, medida: "Caixa c/ 10", quantidade: 12 },
    { nome: "Computador", descricao: 25, medida: "Caixa c/ 15", quantidade: 8 },
    { nome: "Monitor", descricao: 40, medida: "Caixa c/ 20", quantidade: 43 },
  ];
  return (
    <div>
      <Table title="Produtos" createButton columns={columns} data={data} />
    </div>
  );
};

export default Produtos;
