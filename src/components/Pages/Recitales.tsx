import './Pages.css'
import { useEffect, useState } from "react"
import ModalAgregar from "../Modal/ModalAgregar";
import EventoRenglon from "../Eventos/EventoRenglon";

export default function Recitales() {
	const [showModal, setShowModal] = useState(false);
	const [eventos, setEventos] = useState([]);

	function toggleShowModal() {
		setShowModal(!showModal);
	}

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

	function agregar() {
		toggleShowModal();
	}

	return (
		<div>
			<h2>Recitales</h2>
			{/* <table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Banda</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Descripción</th>
					</tr>
				</thead>
				<tbody>
					{eventos.map(evento => (
						<tr key={evento._id}>
							onClick={handleRowClick(evento._id)}>
							<td>{evento.nombre}</td>
							<td>{evento.banda}</td>
							<td>{evento.fecha}</td>
							<td>{evento.hora}</td>
							<td>{evento.descripcion}</td>
						</tr>
					))}
				</tbody>
			</table>

			
			<button onClick={consultar}>Consultar</button>
			<button onClick={modificar}>Modificar</button>
			<button onClick={elminar}>Eliminar</button> */}
			{eventos.map(evento => (
				<EventoRenglon key={evento._id} id={evento._id} nombre={evento.nombre} banda={evento.banda} fecha={evento.fecha} hora={evento.hora} descripcion={evento.descripcion} trigger={fetchEventos} />
			))}

			<button className="btnAgregar" onClick={agregar}>➕</button>
			{showModal && <ModalAgregar onClose={toggleShowModal} trigger={fetchEventos} />}

		</div>
	)
}
