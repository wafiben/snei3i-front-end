import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import {Button} from "primereact/button";

type PropsComponent={
	user: User;
};

export const UserCard: React.FC<PropsComponent>=({user}) => {
	const navigate=useNavigate();
	const footer=(
		<div className="flex flex-wrap justify-content-end gap-2">
			<Button
				label="See details"
				icon="pi pi-check"
				/* onClick={() => navigate(`/employees/${employee.id}`)} */
			/>
		</div>
	);
	return (
		<div className="card flex justify-content-center w-4 mt-7">
			<Card
				title={"sssssss"}
				subTitle={"dddddddddd"}
				footer={footer}
				className="md:w-25rem"
			>
				<div className="flex">
					<div className="m-0">
						<div>
							Recrutement Date:
							{/* {formatDate(employee.recrutementDate,"MMMM DD, YYYY")} */}
                            ddddddddd
						</div>
						<div>Age 25</div>
						<div>Position:ddddddddddd</div>
					</div>
					{/* <img src={employee.gender==="male"? man:woman} alt={`photo/${employee.id}`} /> */}
				</div>
		
			</Card>
		</div>
	);
};