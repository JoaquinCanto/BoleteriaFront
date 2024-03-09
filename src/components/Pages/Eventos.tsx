import './Eventos.css';
import { Evento } from "../Eventos/Evento";
import { signOut } from 'firebase/auth';
import { auth } from '../../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Eventos() {

	const navigate = useNavigate();

	const handleLogOut = async () => {
		await signOut(auth);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		navigate("/registrarse");
	}

	const [eventos, setEventos] = useState([]);

	const fetchEventos = () => {
		fetch("http://localhost:3000/eventos")
			.then((response) => response.json())
			.then((response) => {
				setEventos(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}

	useEffect(() => {
		fetchEventos();
	}, [])

	// console.log(eventos);
	return (
		<div className="eventos">
			{eventos.map(evento => {
				return (
					<Evento key={evento._id} nombre={evento.nombre} banda={evento.banda} fecha={evento.fecha} hora={evento.hora} descripcion={evento.descripcion} />
				)
			})}

			<div>
				<button onClick={handleLogOut}>Log out</button>
			</div>
		</div>
	)
}
