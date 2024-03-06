import './Usuario.css'

export default function Usuario() {
	return (
		<div>
			<ul>
				<li>Cuenta</li>
				<li>Recitales</li> {/* Solo los admins */}
				<li>Entradas</li>
				<li>Reclamos</li>
			</ul>
		</div>
	)
}
