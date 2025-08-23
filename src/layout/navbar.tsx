import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => navigate("/users"),
    },
    ...(token
      ? []
      : [
          {
            label: "Create account",
            icon: "pi pi-fw pi-user-plus",
            command: () => navigate("/create_freelancer_account"),
          },
        ]),
  ];

  const signOut = () => {
    window.location.href = "/";
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar-card p-mb-4">
      <Menubar
        model={items}
        end={
          token && (
            <Button
              label="Logout"
              icon="pi pi-sign-out"
              className="p-button-danger"
              onClick={() => signOut()}
            />
          )
        }
      />
    </div>
  );
};
