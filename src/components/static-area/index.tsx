import { GlobalState } from "../../types/globalState";
import {useSelector} from "react-redux";
import {Card} from 'primereact/card';

export const UsersStatistics=() => {
    const {users}=useSelector((state: GlobalState) => state.userReducer);

    return (
		<div className="mt-3">
			<Card title="Users Statistics">
				<div className="grid grid-cols-3 gap-4">
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Total users</div>
							<div className="text-4xl font-bold">{users.length}</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Male users</div>
							<div className="text-4xl font-bold">5</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-200 p-4 rounded">
							<div className="text-lg font-semibold">Female Usser</div>
							<div className="text-4xl font-bold">2</div>
						</div>
					</div>	
				</div>
			</Card>
		</div>
	);
}


