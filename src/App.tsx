import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Pages/Layout'

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
//import Reservas from './components/Pages/Reservas'
import Logout from './components/Pages/Logout'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/' element={<Eventos />} />
						<Route path='/not' element={<NotLanding />} />

						<Route path='/sedes/gigante' element={<Gigante />} />
						<Route path='/sedes/monumental' element={<Monumental />} />
						<Route path='/nosotros' element={<Nosotros />} />
						<Route path='/soporte' element={<Soporte />} />

						<Route path='/ingresar' element={<LogIn />} />
						<Route path='/registrarse' element={<Register />} />
						<Route path='/usuario' element={<Usuario />} />

						<Route path='/recitales' element={<Recitales />} />
						
						<Route path='/logout' element={<Logout />} />

					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
