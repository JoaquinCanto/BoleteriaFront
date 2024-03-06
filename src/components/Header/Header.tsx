import './Header.css'
import logo from "../../assets/EventEntry.svg"
import user from "../../assets/User.svg"
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom';

export function Header(){
	const opciones = ["Ingresar", "Registrarse"];
	
	return(
		<>
			<header className="">
				<img className="logo" src={logo} alt="LogoEventEntry"></img>
				<nav className="">
					<ul>
						<li><Link to={"/"}>Eventos</Link></li>
						<div className="vLine"></div>
						<li><Link to="/sedes">Sedes</Link></li>
						<div className="vLine"></div>
						<li><Link to="">Nosotros</Link></li>
						<div className="vLine"></div>
						<li><Link to="">Soporte</Link></li>
					</ul>
				</nav>
				<div className="usuario">
					{/* <button className="btnUsuario">
						<img className="imgUsuario" src={user} alt="usuario"></img>
					</button> */}
					<DropDown classname='btnUsuario' text="" img={user} imgClass='imgUsuario' options={opciones} />
				</div>
			</header>
			<div className='divider'></div>
		</>
	)
}
