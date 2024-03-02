import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Evento } from './components/Eventos/Eventos'

function App() {
	return (
	<>
		<Header />
		<Evento evento='Recital 1' fecha="10/04/24" horario="18hs"/>
		{/* <Main /> */}
		<Footer />
	</>
	)
}

export default App
