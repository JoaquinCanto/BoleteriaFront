export function Evento({evento, fecha, horario}: {evento: string, fecha: string, horario: string}){
	return(
		<div>
			<div className="Evento">{evento}</div>
			<div className="FechaHorario">
				<span className="Fecha">{fecha}</span>
				<span className="Horario">{horario}</span>
			</div>
			<img src="" alt="" />
		</div>
	)
}