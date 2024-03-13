import './Reserva.css';
import FotoMonumental from '../../assets/ReservasMonumental.png';
import FotoCentral from'../../assets/ReservasCentral.png';

interface propTypes {
    Nombre: string;
    fecha: string;
    Sede: string;
    Zona: string;
    Cantidad: string;
   
 }

export default function Reserva() {

  const sede = localStorage.getItem('eventSede');
  return (
    <div className="reserva-contenedor">

      <h1>{localStorage.getItem('eventNombre')}</h1>
      <h2>{localStorage.getItem('eventFecha')}</h2>
      <h2>{localStorage.getItem('eventSede')}</h2>

      <h2>Seleccione una Ubicación</h2>
      <img className="imgMapa" src={sede === 'Gigante' ? FotoCentral : FotoMonumental} alt="imagenEstadio" />

      <div className="combos">
        <p>Zona:</p>
        <select name="cmbZonas">
          {sede === 'Gigante' ? (
            <>
              <option value="Zona 1">Zona Campo</option>
              <option value="Zona 2">Zona General</option>
              <option value="Zona 3">Zona Platea Cordiviola</option>
              <option value="Zona 4">Zona Platea Rio</option>
            </>
          ) : (
            <>
              <option value="Zona 1">Zona Naranja</option>
              <option value="Zona 2">Zona Rojo</option>
              <option value="Zona 3">Zona Blanco</option>
              <option value="Zona 4">Zona Amarillo</option>
              <option value="Zona 5">Zona Celeste</option>
              <option value="Zona 6">Zona Azul</option>
            </>
          )}
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
