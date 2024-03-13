import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Pages/Layout'
import { PrivateRoutes, PublicRoutes } from './components/Models/Routes'
import { AuthGuard } from './components/Guards/AuthGuard'

import Eventos from './components/Pages/Eventos'
import NotLanding from './components/Pages/NotLanding'

import Monumental from './components/Sedes/Monumental/Monumental'
import Gigante from './components/Sedes/Gigante/Gigante'
import Nosotros from './components/Nosotros/Nosotros'
import Soporte from './components/Soporte/Soporte'

import LogIn from './components/Usuarios/LogIn'
import Register from './components/Usuarios/Register'
import Usuario from './components/Usuarios/Usuario'


import Recitales from './components/Pages/Recitales'

import MiCuenta from './components/Pages/MiCuenta'
import MisReservas from './components/Pages/MisReservas'

import Logout from './components/Pages/Logout'
import Reservas from './components/Pages/Reservas';

function App() {

	return (	
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Eventos />} />
						<Route path='/not' element={<NotLanding />} />

						<Route path={PublicRoutes.GIGANTE} element={<Gigante />} />
						<Route path={PublicRoutes.MONUMENTAL} element={<Monumental />} />
						<Route path={PublicRoutes.NOSOTROS} element={<Nosotros />} />
						<Route path={PublicRoutes.SOPORTE} element={<Soporte />} />

						<Route path={PublicRoutes.INGRESAR} element={<LogIn />} />
						<Route path={PublicRoutes.REGISTRARSE} element={<Register />} />


						<Route path='/MiCuenta' element={<MiCuenta />} />
						<Route path='/MisReservas' element={<MisReservas />} />

						<Route element={<AuthGuard />}>
							<Route path={PrivateRoutes.USUARIO} element={<Usuario />} />
							<Route path={PrivateRoutes.RECITALES} element={<Recitales />} />
							<Route path={PrivateRoutes.RESERVAS} element={<Reservas />} />
							<Route path={PrivateRoutes.LOGOUT} element={<Logout />} />

						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
