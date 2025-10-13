import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import { Button } from "primereact/button";


type PropsComponent = {
  user: User;
};

export const UserCard: React.FC<PropsComponent> = ({ user }) => {
  const navigate = useNavigate();
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button
        label="See details"
        icon="pi pi-check"
        onClick={() => navigate(`/users/${user.id}`)}
      />
    </div>
  );
  return (
    <div className="card flex justify-content-center w-4 mt-7">
      <Card
        title={user.name}
        subTitle={user.email}
        footer={footer}
        className="md:w-25rem"
      ></Card>
    </div>
  );
};
