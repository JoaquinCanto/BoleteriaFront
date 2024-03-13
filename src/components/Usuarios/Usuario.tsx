import './Usuario.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../Models/Routes';

type User = {
	nombre: string,
	apellido: string,
	fechaNacimiento: Date,
	DNI: string,
	tel: string,
	email: string,
	admin?: boolean,
};

export default function Usuario() {

	const [showRecitales, setShowRecitales] = useState<boolean>();
	const [usuario, setUsuario] = useState<User>();
	const userMongoId = localStorage.getItem('idMongo');

	useEffect(() => {
		fetchUsuario();
	}, [])

	const fetchUsuario = () => {
		fetch(`http://localhost:3000/usuarios/${userMongoId}`)
			.then((response) => response.json())
			.then((response) => {
				setUsuario(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}

	useEffect(() => {
		if (usuario?.admin) {
			setShowRecitales(true);
		} else {
			setShowRecitales(false);
		}
	}, [usuario])

	return (
		<div>
			<ul>
				<li><Link to={PrivateRoutes.CUENTA}>Mi Cuenta</Link></li>
				{showRecitales && <li><Link to={PrivateRoutes.RECITALES}>Recitales</Link></li>} {/* Solo los admins */}
				<li><Link to={PrivateRoutes.MISRESERVAS}>Mis Reservas</Link></li>
				{/* <li>Reclamos</li> */}
			</ul>
		</div>
	)
}
