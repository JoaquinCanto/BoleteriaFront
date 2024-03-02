export function Footer(){
	return(
		<footer className="">
			<div>
				<div className="follow">
					<div>Seguinos:</div>
					<div>
						{/* <span><a href=""><img class="socImage" src="Images/f.png" alt=""></a></span>
						<span><a href=""><img class="socImage" src="Images/i.png" alt=""></a></span>
						<span><a href=""><img class="socImage" src="Images/t.png" alt=""></a></span>  */}
					</div>
				</div>
				<div className="legales">
					<div>Legales</div>
					<div>
						<span><a href="">Terminos y Condiciones</a></span>
						<span><a href="">Política de Privacidad</a></span>
					</div>
				</div>
			</div>
			<div className="derechos">
				Todos Los Derechos Reservados © 2023 Canto Inc.
			</div>
		</footer>
	)
}