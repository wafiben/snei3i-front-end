import { Menubar } from "primereact/menubar";

export const Navbar: React.FC = () => {
  /* const navigate=useNavigate() */
  const handleClick = () => {
    console.log("ddddddddddd");
    /* navigate('/employees') */
  };
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-power-off",
      command: handleClick,
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
