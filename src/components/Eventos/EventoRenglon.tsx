import './EventoRenglon.css'
import { useEffect, useState } from 'react';
import Modal from '../Modal/ModalAgregar';
import ModalConsulta from '../Modal/ModalConsulta';
import ModalModificar from '../Modal/ModalModificar';
import ModalEliminar from '../Modal/ModalEliminar';

// interface RenglonData {
// 	data: data,
// };
type RenglonData = {
	id: string,
	nombre: string,
	banda: string,
	fecha: string,
	hora: string,
	descripcion: string,
	trigger: () => void,
}
export default function EventoRenglon(props: RenglonData) {
	const [consulta, setConsulta] = useState(false);
	const [modifica, setModifica] = useState(false);
	const [elimina, setElimina] = useState(false);
	// const [date, setDate] = useState<string>('');

	function toggleConsutla() {
		setConsulta(!consulta);
	}

	function toggleModifica() {
		setModifica(!modifica);
	}

	function toggleElimina() {
		setElimina(!elimina);
	}

	// useEffect(() => {
	// 	// console.log(date, typeof date)
	// 	// console.log(props.fecha, typeof props.fecha)
	// 	// const parsed = Date.parse();
	// 	// console.log(parsed, typeof parsed)
	// 	const toDate = new Date(props.fecha);
	// 	console.log(toDate, typeof toDate)
	// 	const day = toDate.getDay();
	// 	const month = toDate.getMonth();
	// 	const year = toDate.getFullYear()
	// 	console.log(day, typeof day)
	// 	const dateString = "" + day.toString() + "/" + month.toString() + "/" + year.toString()

	// 	// const strDate = toDate.toLocaleDateString('en-GB');
	// 	// const strDate = toDate.toDateString();
	// 	// console.log(strDate, typeof strDate)
	// 	setDate(dateString);
	// 	console.log(date, typeof date)

	// }, [])
	// function formatDateToDDMMYYYY(date: Date) {
	// 	return date.toLocaleDateString('en-GB');
	// }
	// const date: string = props.fecha instanceof Date ? props.fecha.toLocaleDateString() : '';
	// const date = ().toLocaleDateString('en-GB');
	// console.log(date)
	// const parsed = Date.parse(props.fecha);
	// const toDate = new Date(parsed);

	// const date = toDate.toLocaleDateString('en-GB');

	// console.log(props.fecha, typeof props.fecha)
	return (
		<div className="renglon">
			<div className="nombre">{props.nombre}</div>
			<div className="banda">{props.banda}</div>
			<div className="fecha">{props.fecha}</div>
			<div className="hora">{props.hora}</div>
			<div className="descripcion">{props.descripcion}</div>

			<div className=""><button onClick={toggleConsutla}>🔍</button></div>
			{consulta && <ModalConsulta onClose={toggleConsutla} data={props} />}

			<div className=""><button onClick={toggleModifica}>✏️</button></div>
			{modifica && <ModalModificar onClose={toggleModifica} data={props} trigger={props.trigger} />}

			<div className=""><button onClick={toggleElimina}>🗑️</button></div>
			{elimina && <ModalEliminar onClose={toggleElimina} data={props} trigger={props.trigger} />}
		</div>
	)
}
