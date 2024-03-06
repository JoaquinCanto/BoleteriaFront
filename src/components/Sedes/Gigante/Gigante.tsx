import './Gigante.css'
import FotoGigante from './Gigante.jpg'
import AccGigante from './Esquema.png'

function Gigante() {
	return (
	<>
        <div className='Sede1'>
            <h2>Gigante de Arroyito</h2>
            <img src={FotoGigante} alt="" />
            <h3>A cerca de</h3>
            <p>El Estadio Gigante de Arroyito es una cancha de fútbol que se encuentra en la ciudad de Rosario a orillas del Río Paraná, en la Provincia de Santa Fe. Su propietario es el Club Atlético Rosario Central.
                Fue inaugurado oficialmente el 14 de noviembre de 1926 y a través de numerosas reformas (la última en el año 2024), logró alcanzar la actual capacidad estimada de 50.000 espectadores.
                La FIFA lo designó como una de las sedes de la Copa Mundial de Fútbol de 1978, disputada en Argentina. Esto, lo convierte en el único estadio de la provincia de Santa Fe que ha albergado a una Copa Mundial de Fútbol de mayores.
                A su vez, el Gigante de Arroyito fue una de las subsedes de la Copa América 1987, disputada en la Argentina.</p>
            <h3>Calles</h3>
            <p>El Gigante está ubicado en el Barrio Arroyito, en la zona norte de la ciudad de Rosario.<br />
                El estadio, está circunscrito por las siguientes calles:<br />
                - Avenida Costanera al norte.<br />
                - Calle J.B. Cordiviola al oeste.<br />
                - Avenida Centenario Club Atlético Rosario Central al este.<br />
                - Avenida Génova al sur. <br />
                Existe una amplia disponibilidad de transporte público, donde destacan las siguientes líneas de colectivos: 35/9, 102, 103, 107, 110, 113, 129 y 153.</p>
            <h3>Accesos</h3>
            <img src={AccGigante} alt="" />
        </div>
	</>
	)
}

export default Gigante