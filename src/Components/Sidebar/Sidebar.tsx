import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../Assets/logo.png";

interface Page {
  title: string;
  path: string;
}

interface SidebarProps {
  pages: Page[];
}

interface HandlePages {
  [key: string]: Page[];
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [selectAccount, setSelectAccount] = useState<string>("");
  let accountType = sessionStorage.getItem("accountType");
  const handlePages: HandlePages = {
    admin: [
      { title: "Pedidos", path: "/pedidos" },
      { title: "Estoque", path: "/estoque" },
      { title: "Setores", path: "/setores" },
      { title: "Controle de notas", path: "/controle-notas" },
      { title: "Guias de entrada", path: "/guias-de-entrada" },
      { title: "Guias de saída", path: "/guias-de-saida" },
      { title: "Categorias", path: "/categorias" },
      { title: "Medidas", path: "/medidas" },
      { title: "Fornecedores", path: "/fornecedores" },
      { title: "Pedidos do Fornecedor", path: "/pedidos-do-fornecedor" },
      { title: "Atas", path: "/atas" },
      { title: "Produtos", path: "/produtos" },
      { title: "Pedidos de AF", path: "/pedidos-de-af" },
      { title: "Dispensa de licitação", path: "/dispensa-de-licitacao" },
      { title: "Relatório do Contador", path: "/relatorio-do-contador" },
      { title: "Relatório de Estoque", path: "/relatorio-de-estoque" },
      {
        title: "Relatório do almoxarifado",
        path: "/relatorio-do-almoxarifado",
      },
      { title: "Enviar Email", path: "/enviar-email" },
      { title: "Sair", path: "/" },
    ],
    user: [
      { title: "Criar pedido", path: "/pedidos" },
      { title: "Estoque", path: "/estoque" },
      { title: "Pedidos", path: "/pedidos" },
      { title: "Alterar Senha", path: "/alterar-senha" },
      { title: "Sair", path: "/" },
    ],
  };

  useEffect(() => {
    accountType = accountType ? "admin" : "user";
  }, []);

  return (
    <>
      {handlePages[selectAccount] ? (
        <div className={styles.sidebarContainer}>
          <div>
            <img
              src={logo}
              alt="Logo da defensoria pública"
              width="250"
              height="75"
            />
            <hr />
          </div>
          <ul className={styles.sidebarList}>
            {handlePages[selectAccount]?.map((page: Page, index: any) => (
              <li className={styles.sidebarItem} key={index}>
                <Link to={page.path} className={styles.sidebarLink}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
