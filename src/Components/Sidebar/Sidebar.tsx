import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../Assets/logo_branco.png";
import { logout } from "../../Auth/Auth";

interface Page {
  title: string;
  path: string;
}

interface HandlePages {
  [key: string]: Page[];
}

const Sidebar = () => {
  const [accountType, setAccountType] = React.useState<boolean>();
  const [currentPath, setCurrentPath] = React.useState<boolean>();
  let location = useLocation();
  const listOfNonSidebarVisible = ["/"];
  const checkIfIncludes = (pathname: string) => {
    return listOfNonSidebarVisible.includes(pathname);
  };
  const converter = sessionStorage.getItem("me");
  const me = JSON.parse(converter as string);
  React.useEffect(() => {
    setCurrentPath(checkIfIncludes(location.pathname));
  }, [location]);

  React.useEffect(() => {
    setAccountType(me?.is_admin);
  }, [me]);
  const handlePages: HandlePages = {
    admin: [
      { title: "Pedidos", path: "/pedidos" },
      { title: "Estoque", path: "/estoque" },
      { title: "Setores", path: "/setores" },
      { title: "Controle de notas", path: "/controle-de-notas" },
      { title: "Guias de entrada", path: "/guias-de-entrada" },
      { title: "Guias de saída", path: "/guias-de-saida" },
      { title: "Categorias", path: "/categorias" },
      { title: "Medidas", path: "/medidas" },
      { title: "Fornecedores", path: "/fornecedores" },
      { title: "Pedidos do Fornecedor", path: "/pedidos-fornecedor" },
      { title: "Atas", path: "/atas" },
      { title: "Produtos", path: "/produtos" },
      { title: "Pedidos de AF", path: "/pedidos-de-af" },
      { title: "Dispensa de licitação", path: "/dispensa-de-licitacao" },
      { title: "Relatório do Contador", path: "/relatorio-do-contador" },
      { title: "Relatório de Estoque", path: "/relatorio-de-estoque" },
      {
        title: "Inventário do almoxarifado",
        path: "/inventario-do-almoxarifado",
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
  if (currentPath) return null;
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.position}>
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
          {handlePages[accountType ? "admin" : "user"]?.map(
            (page: Page, index: any) => (
              <li className={styles.sidebarItem} key={index}>
                <Link
                  to={page.path}
                  className={styles.sidebarLink}
                  onClick={page.title === "Sair" ? logout : undefined}
                >
                  {page.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
