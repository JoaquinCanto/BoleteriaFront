import './Header.css'

export function Header(){
	return(
		<header className="">
			<div className="logoNombre">
				<img src='' alt="Logo"></img>
				<span>EventEntry</span>
			</div>
			<div className="separator"></div>
			<nav className="">
				<ul>
					<li>Enventos</li>
					<li>Sedes</li>
					<li>Nosotros</li>
					<li>Soporte</li>
				</ul>
			</nav>
		</header>
	)
}
