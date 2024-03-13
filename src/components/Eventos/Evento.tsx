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
		localStorage.setItem('eventId', props._id);
		localStorage.setItem('eventNombre', props.nombre);
		localStorage.setItem('eventBanda', props.banda);
		localStorage.setItem('eventFecha', props.fecha);
		localStorage.setItem('eventHora', props.hora);
		localStorage.setItem('eventDescripcion', props.descripcion);
		navigate('/reservas');

	}

	return (
		<div className="evento">
			<div className="eventoText">
				<div className='eventoNombre' >{props.nombre}</div>
				<div>{props.banda}</div>
				<div className="fechaHorario">
					<span className="Fecha">{props.fecha}</span>
					<span className="Horario">{props.hora}</span>
				</div>
				<div>{props.descripcion}</div>
			</div>
			<button onClick={handleReservas}>Reservar Entradas</button>
		</div>
	)
}
