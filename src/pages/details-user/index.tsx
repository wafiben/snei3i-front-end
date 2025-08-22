import { useEffect, useState } from "react";
import { AppDispatch } from "../../store/store";
import { useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../types/globalState";
import { deleteUser, getOneUser } from "../../store/users/actions";
import { calculateBirthYear } from "../../utils/birthdayYear";
import { ModifyUserModal } from "../../components/user-modify-modal";

export const DetailsUser: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const { user, loading } = useSelector(
    (state: GlobalState) => state.userReducer
  );

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    }
  }, [dispatch, id, visible]);

  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }

  const handleDelete = async () => {
    await dispatch(deleteUser(String(id)));
    navigate("/users");
  };

  const handleShow = () => {
    setVisible(true);
  };

  function handleClose(): void {
    setVisible(false);
  }

  return (
    <div className="flex justify-content-center">
      <div className="card w-5 mt-5 text-center">
        <Card title={user ? `${user.name} ${user.name}` : ""}>
          <Avatar
            label={user ? user.name[0] : ""}
            size="large"
            style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
            shape="circle"
          />
          <p className="m-0">
            name: <strong>{user && user.name}</strong>
          </p>

          {user?.services && user.services.length > 0 ? (
            user.services.map((service, index) => (
              <div className="m-0" key={index}>
                <p>
                  Service Name: <strong>{service.name}</strong>
                </p>
                <p>
                  Labor Price: <strong>${service.laborPrice}</strong>
                </p>
                <p>
                  Estimated Material Cost:{" "}
                  <strong>${service.estimatedMaterialCost}</strong>
                </p>
                <p>
                  Notes: <strong>{service.notes}</strong>
                </p>
              </div>
            ))
          ) : (
            <p>No services available</p>
          )}

          <div className="m-2 flex justify-content-around">
            <Button
              label="back to Home"
              severity="info"
              onClick={() => navigate("/users")}
            />
            <Button label="pick service" severity="info" onClick={handleShow} />
          </div>
        </Card>
        <ModifyUserModal
          visible={visible}
          handleClose={handleClose}
          user={user}
        />
      </div>
    </div>
  );
};
