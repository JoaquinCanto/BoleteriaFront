import './Header.css'
import logo from "../../assets/EventEntry.svg"
import user from "../../assets/User.svg"
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom';

export function Header(){
	const sedes = ["Gigante", "Monumental"];
	const opciones = ["Ingresar", "Registrarse"];

	return(
		<>
			<header className="">
				<img className="logo" src={logo} alt="LogoEventEntry"></img>
				<nav className="">
					<ul>
						<li><Link to={"/"}>Eventos</Link></li>
						<div className="verticalSeparator"></div>
						<li><DropDown btnClass="btnSedes" text="Sedes" img="" imgClass="" options={sedes} panelClass="sedesDropDown"/></li>
						<div className="verticalSeparator"></div>
						<li><Link to={"/nosotros"}>Nosotros</Link></li>
						<div className="verticalSeparator"></div>
						<li><Link to={"/Soporte"}>Soporte</Link></li>
					</ul>
				</nav>
				<div className="usuario">
					<DropDown btnClass='btnUsuario' text="" img={user} imgClass='imgUsuario' options={opciones}  panelClass="usuarioDropDown"/>
				</div>
			</header>
			<div className='divider'></div>
		</>
	)
}
