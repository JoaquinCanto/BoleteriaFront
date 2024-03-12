import './Eventos.css';
import { Evento } from "../Eventos/Evento";
import { useEffect, useState } from 'react';

interface EventoTypes {
	_id: string,
	nombre: string,
	banda: string,
	fecha: string,
	hora: string,
	descripcion: string
}

export default function Eventos() {

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

	const renderEventos = eventos.map((evento: EventoTypes) => {
		return (
			<Evento
				key={evento._id}
				_id={evento._id}
				nombre={evento.nombre}
				banda={evento.banda}
				fecha={evento.fecha}
				hora={evento.hora}
				descripcion={evento.descripcion}
			/>
		)
	})

	return (
		<div className="eventos">
			{renderEventos}
		</div>
	)
}
