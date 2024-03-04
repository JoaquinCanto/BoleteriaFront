import './Footer.css'

export function Footer(){
	return(
		<footer>
			<div className="legales">
				<span><a href="">Terminos y Condiciones</a></span>
				<span><a href="">Política de Privacidad</a></span>
			</div>
			<div className="derechos">
				Todos Los Derechos Reservados © 2024 Canto Inc.
			</div>
		</footer>
	)
}