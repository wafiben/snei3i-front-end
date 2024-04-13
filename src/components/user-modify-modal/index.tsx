import { Dialog } from "primereact/dialog";
import { UpdateUser } from "./update-form";
import { User } from "../../types/user";

type ModalProps = {
  handleClose: () => void;
  visible: boolean;
  user:any
};

export const ModifyUserModal: React.FC<ModalProps> = ({
  handleClose,
  visible,
  user
}) => {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Projects"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => handleClose()}
      >
        <UpdateUser user={user} handleClose={handleClose}/>
      </Dialog>
    </div>
  ); 
};
