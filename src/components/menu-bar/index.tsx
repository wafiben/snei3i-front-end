import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
/* import {searchEmployees} from './../../store/employeer/actions'; */
import {useDispatch} from 'react-redux';

export const MenuBar=() => {
	const dispatch=useDispatch()
	const handleChange=(e: any) => {
        console.log('sssssssssss')
		/* dispatch(searchEmployees(e.target.value)) */
	};

	const start=<img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
	const end=<InputText placeholder="Search" type="text" className="w-full" />;

	return (
		<div className="card mt-3">
			<Menubar start={start} end={end} onChange={(e) => handleChange(e)} />
		</div>
	)
}
