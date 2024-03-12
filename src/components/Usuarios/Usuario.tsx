import { useEffect, useState } from 'react';
import './Usuario.css'
import { useNavigate } from 'react-router-dom';

type user = {
	nombre: string,
	apellido: string,
	fechaNacimiento: Date,
	DNI: string,
	tel: string,
	email: string,
	admin?: boolean,
};

export default function Usuario() {
	const navigate = useNavigate();

	const [showRecitales, setShowRecitales] = useState<boolean>();
	const [usuario, setUsuario] = useState<user>();
	const userMongoId = localStorage.getItem('idMongo');

	const token = localStorage.getItem('token');

	if (!token) {
		navigate('/registrarse');
	}

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

	function isAdmin() {
		if (usuario?.admin) {
			setShowRecitales(true);
		}
		else {
			setShowRecitales(false);
		}
	}

	useEffect(() => {
		fetchUsuario();
		isAdmin();
	}, [])

	return (
		<div>
			<ul>
				<li>Cuenta</li>
				{showRecitales && <li>Recitales</li>} {/* Solo los admins */}
				<li>Entradas</li>
				<li>Reclamos</li>
			</ul>
		</div>
	)
}
