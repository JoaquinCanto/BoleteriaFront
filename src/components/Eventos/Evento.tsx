import './Evento.css'

interface propTypes {
	nombre: string,
	banda: string,
	fecha: string,
	hora: string,
	descripcion: string
}

export function Evento(props: propTypes) {
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
			<img className="imgRecital" src="" alt="Imagen Recital" />
		</div>
	)
}
