import './Evento.css'
import { useNavigate } from 'react-router-dom';


interface propTypes {
	_id: string,
	nombre: string,
	banda: string,
	fecha: string,
	hora: string,
	descripcion: string,

}

export function Evento(props: propTypes) {
	const navigate = useNavigate();

	function handleReservas() {
		const token = localStorage.getItem('token');

		if (token) {
			localStorage.setItem('eventId', props._id)
			navigate('/reservas');
		} else {
			navigate('/registrarse');
		}
	}

	return (
		<div className="evento">
			<div className="eventoText">
				<div className='columna1'>
					<div className='eventoNombre' >{props.nombre}</div>
					<div className='banda'>{props.banda}</div>
				</div>
				<div className='columna2'>
					<div className="fechaHorario">
						<span className="Fecha">{props.fecha}</span>
						<span className="Horario">{props.hora}</span>
					</div>
					<div className='descr'>{props.descripcion}</div>
				</div>
			</div>
			<button className='btnReserva' onClick={handleReservas}>Reservar Entradas</button>
		</div>
	)
}
