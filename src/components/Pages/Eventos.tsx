import './Eventos.css';
import { Evento } from "../Eventos/Evento";

export default function Eventos() {
	return (
		<div className="eventos">
			<Evento evento="Recital1" fecha="10/08/24" horario="18hs"  />
			<Evento evento="Recital2" fecha="11/08/24" horario="18hs"  />
			<Evento evento="Recital3" fecha="12/08/24" horario="18hs"  />
			<Evento evento="Recital4" fecha="13/08/24" horario="18hs"  />
		</div>
	)
}
