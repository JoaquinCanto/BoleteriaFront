import './Nosotros.css'
import FotoHinchada from './hinchada.png'

function Nosotros() {
	return (
	<>
        <div className='Nosotros'>
            <h2>Nosotros</h2>
            <p>Bienvenidos a Event Entry, tu boletería digital de confianza para los eventos más emocionantes y memorables. En Event Entry, nos dedicamos a proporcionarte una experiencia de compra de boletos sin complicaciones para una amplia variedad de eventos, desde recitales y festivales hasta apasionantes partidos de fútbol. <br />
                Nuestra misión es hacer que la compra de boletos sea rápida, segura y accesible para todos, conectándote con tus eventos favoritos de manera sencilla y conveniente. Con años de experiencia en la industria del entretenimiento, en Event Entry nos enorgullece ofrecer un servicio confiable y de alta calidad a nuestros clientes. <br />
                Únete a nosotros en la emoción de vivir momentos inolvidables y asegura tu entrada a los eventos más destacados con Event Entry. ¡Nos vemos en el próximo evento!</p>
            <img src={FotoHinchada} alt="" />
        </div>
	</>
	)
}

export default Nosotros