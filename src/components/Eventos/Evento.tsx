import './Evento.css'

export function Evento({evento, fecha, horario}: {evento: string, fecha: string, horario: string}){
	return(
		<div className="evento">
			<div className="eventoText">
				<span className='eventoNombre' >{evento}</span>
				<div className="fechaHorario">
					<span className="Fecha">{fecha}</span>
					<span className="Horario">{horario}</span>
				</div>
			</div>
			<img className="imgRecital" src="" alt="Imagen Recital"/>
		</div>
	)
}
