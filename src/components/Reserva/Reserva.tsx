import './Reserva.css';
import FotoMonumental from '../../assets/ReservasMonumental.png';
import FotoCentral from '../../assets/ReservasCentral.png';
import ModalAgregarReserva from '../Modal/ModalAgregarReserva';
import { useState } from 'react';

export default function Reserva() {
	const [showModal, setShowModal] = useState(false);

	const sede = localStorage.getItem('eventSede');

	function toggleShowModal() {
		setShowModal(!showModal);
	}

	function reservar() {
		toggleShowModal();
	}

	return (
		<div className="reserva-contenedor">

			<h1>{localStorage.getItem('eventNombre')}</h1>
			<h2>{localStorage.getItem('eventFecha')}</h2>
			<h2>{localStorage.getItem('eventSede')}</h2>

			<h2>Seleccione una Ubicación</h2>
			<img className="imgMapa" src={sede === 'Gigante' ? FotoCentral : FotoMonumental} alt="imagenEstadio" />

			{showModal && <ModalAgregarReserva
				nombre={localStorage.getItem('eventNombre')}
				fecha={localStorage.getItem('eventFecha')}
				sede={localStorage.getItem('eventSede')}
				zona={""}
				cantidad={0}
				idEvento={localStorage.getItem('eventId')}
				idUsuario={localStorage.getItem('idMongo')}
				onClose={toggleShowModal} />}

			<button className="btnReservar" onClick={reservar}>Reservar</button>
		</div>
	);
}
