import FotoEstadio from './mapa2.png';
import './Reserva.css'; 

interface propTypes {
  titulo: string;
  fecha: string;
  img: string;
  imgClass: string;
  options: string[];
  panelClass: string;
}

export default function Reserva(props: propTypes) {
  return (
    <div className="reserva-contenedor">
      <p>Información del Evento:</p>
      <h1>{props.titulo}</h1>

      <h2>Seleccione una Ubicación</h2>
      <img className="imgMapa" src={FotoEstadio} alt="" />

      <div className="combos">
        <p>Zona:</p>
        <select name="cmbZonas">
          <option value="Zona 1">Zona Verde</option>
          <option value="Zona 2">Zona Violeta</option>
          <option value="Zona 3">Zona Naranja</option>
          <option value="Zona 4">Zona Azul</option>
        </select>
      </div>

      <div className="combos">
        <p>Cantidad:</p>
        <select name="comboCantidad">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <button className="btn-reservar">RESERVAR ENTRADAS</button>
      
    </div>
  );
}
