import './Monumental.css'
import FotoMonumental from '../../../assets/Monumental.jpg'
import MonumentalAccesos from '../../../assets/MonumentalAccesos.png'

function Monumental() {
	return (
	<>
        <div className='Sede1'>
            <h2>Más Monumental</h2>
            <img src={FotoMonumental} alt="FotoMonumental" />
            <h3>Acerca de</h3>
            <p>El estadio Monumental, también conocido como el Monumental de Núñez, estadio River Plate, o por cuestiones de patrocinio estadio Mâs Monumental, es un recinto deportivo ubicado en la intersección de las avenidas Figueroa Alcorta y Udaondo del barrio de Belgrano, Buenos Aires, Argentina.5​6​ Es propiedad del Club Atlético River Plate y fue inaugurado el 26 de mayo de 1938 por el presidente Antonio Vespucio Liberti, quien decidió su construcción.
                Cuenta con una capacidad de 84 567 espectadores, luego de las remodelaciones concluidas en 2023.
                Es el estadio de fútbol con mayor capacidad de Argentina y de América. Es el recinto donde Argentina disputa sus partidos de local. Fue sede de cuatro finales de Copa América (1946, 1959, 1987 y 2011), y sede de la final de la Copa Mundial de la FIFA 1978, entre otros eventos trascendentes.</p>
            <h3>Calles</h3>
            <p>El recinto deportivo está ubicado en la intersección de las avenidas Figueroa Alcorta y Udaondo del barrio de Belgrano, Buenos Aires, Argentina. </p>
            <p> Las líneas de colectivo que llegan al estadio Mas Monumental son las siguientes: 15, 29, 37, 42, 57, 107, 130, 152 y 160.</p>
            <h3>Accesos</h3>
            <img src={MonumentalAccesos} alt="MonumentalAccesos" />
        </div>
	</>
	)
}

export default Monumental