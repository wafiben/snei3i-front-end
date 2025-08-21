import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalState } from "../types/globalState";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: GlobalState) => state.authReducer);

  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => navigate("/users"),
    },
    {
      label: "Add User",
      icon: "pi pi-fw pi-user-plus",
      command: () => navigate("/add_user"),
    },
  ];
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  return (
    <div className="navbar-card p-mb-4">
      <Menubar
        model={items}
        end={
          isLoggedIn && (
            <Button
              label="Logout"
              icon="pi pi-sign-out"
              className="p-button-danger"
             onClick={onLogout}
            />
          )
        }
      />
    </div>
  );
};
