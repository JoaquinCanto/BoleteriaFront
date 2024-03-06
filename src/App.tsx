import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Pages/Eventos'
import NotLanding from './components/Pages/NotLanding'
import { Layout } from './components/Pages/Layout'
import LogIn from './components/Usuarios/LogIn'
import Register from './components/Usuarios/Register'
import Usuario from './components/Usuarios/Usuario'


function App() {
	return (
	<>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout/>}>
					<Route path='/' element={<Landing/>} />
					<Route path='/not' element={<NotLanding/>} />
					<Route path='/ingresar' element={<LogIn/>} />
					<Route path='/registrarse' element={<Register/>} />
					<Route path='/usuario' element={<Usuario/>} />

				</Route>
			</Routes>
		</BrowserRouter>
	</>
	)
}

export default App
