import { ReactNode } from "react";
import { Navbar } from "./navbar";

type ChildrenProps = {
  children: ReactNode;
};
export const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-content">{children}</div>
    </div>
  );
};
