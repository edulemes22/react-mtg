import { Menubar } from "primereact/menubar";
import { useHistory, useLocation } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        history.push("/");
      },
    },
    {
      label: "Adicionar Carta",
      icon: "pi pi-plus",
      command: () => {
        history.push("/add");
      },
    },
    {
      label: "Editar Carta",
      icon: "pi pi-pencil",
      command: () => {
        history.push("/edit");
      },
    },
  ];

  return <Menubar model={items} />;
};

export default Menu;