import './Header.css'
import logo from "../../assets/EventEntry.svg"
import user from "../../assets/User.svg"

export function Header(){
	return(
		<header className="">
			{/* <div className="logo"> */}
				<img className="logo" src={logo} alt="LogoEventEntry"></img>
			{/* </div> */}
			<nav className="">
				<ul>
					<li>Eventos</li>
					<div className="vLine"></div>
					<li>Sedes</li>
					<div className="vLine"></div>
					<li>Nosotros</li>
					<div className="vLine"></div>
					<li>Soporte</li>
				</ul>
			</nav>
			<div >
				<img className="usuario" src={user} alt="usuario"></img>
			</div>
		</header>
	)
}
