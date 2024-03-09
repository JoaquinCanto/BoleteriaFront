import './Evento.css'

interface propTypes{
	evento: string,
	fecha: string,
	horario: string,
	descripcion: string
}

export function Evento(props: propTypes){
	return(
		<div className="evento">
			<div className="eventoText">
				<span className='eventoNombre' >{props.evento}</span>
				<div className="fechaHorario">
					<span className="Fecha">{props.fecha}</span>
					<span className="Horario">{props.horario}</span>
				</div>
				<div>
					{props.descripcion}
				</div>
			</div>
			<img className="imgRecital" src="" alt="Imagen Recital"/>
		</div>
	)
}
