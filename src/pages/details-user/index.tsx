import { useEffect } from "react";
import { AppDispatch } from "../../store/store";
import { useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../types/globalState";
import { deleteUser, getOneUser } from "../../store/users/actions";
import { calculateBirthYear } from "../../utils/birthdayYear";

export const DetailsUser: React.FC = () => {
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
  }, [dispatch, id]);
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }
  const handleDelete =async ()  => {
     await dispatch(deleteUser(String(id))); 
     navigate('/users')
  };

  return (
    <div className="flex justify-content-center">
      <div className="card w-5 mt-5 text-center">
        <Card title={user ? `${user.firstName} ${user.lastName}` : ""}>
          <Avatar
            label={user ? user.firstName[0] : ""}
            size="large"
            style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
            shape="circle"
          />
          <p className="m-0">
            birthday year:
            <strong>{user && calculateBirthYear(user.age)} </strong>
          </p>
          <p className="m-0">
            city :<strong>{user && user.age}</strong>
          </p>
          <p className="m-0">
            city :<strong>{user && user.city}</strong>
          </p>
          <div className="m-2 flex justify-content-around">
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-danger p-button-outlined"
              onClick={() => handleDelete()}
            />
            <Button
              label="back to Home"
              severity="info"
              onClick={() => navigate("/users")}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
