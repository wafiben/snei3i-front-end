import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
const navigate=useNavigate() 
  const handleClick = () => {
    navigate('/users')
  };
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-power-off",
      command: ()=>navigate('/users'),
    },
    {
      label: "ADD user",
      command: ()=>navigate('/add_user'),
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  );
};
