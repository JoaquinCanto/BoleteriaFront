
import './MisReservas.css'; 

interface propTypes {
  evento: string;
  fecha: string;
  zona: string;
 
}

export default function MiCuenta(props: propTypes) {
    return (
      <div className="misreservas-contenedor">
        <h1>Mis Reservas</h1>
  
        <div className="campos-misreservas">
          <label>Evento:</label>
          <p>{props.evento}</p>
        </div>
  
        <div className="campos-misreservas">
          <label>Fecha:</label>
          <p>{props.fecha}</p>
        </div>
  
        <div className="campos-misreservas">
          <label>Zona:</label>
          <p>{props.zona}</p>
        </div>
  
        
      </div>
    );
}
