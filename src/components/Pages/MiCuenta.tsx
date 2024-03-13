
import './MiCuenta.css'; 

interface propTypes {
  nombre: string;
  apellido: string;
  fecha: string;
  dni: string;
  telefono: string;
  email: string;
}

export default function MiCuenta(props: propTypes) {
    return (
      <div className="micuenta-contenedor">
        <h1>Datos del Usuario</h1>
  
        <div className="campos-micuenta">
          <label>Nombre:</label>
          <p>{props.nombre}</p>
        </div>
  
        <div className="campos-micuenta">
          <label>Apellido:</label>
          <p>{props.apellido}</p>
        </div>
  
        <div className="campos-micuenta">
          <label>Fecha de Nacimiento:</label>
          <p>{props.fecha}</p>
        </div>
  
        <div className="campos-micuenta">
          <label>DNI:</label>
          <p>{props.dni}</p>
        </div>
  
        <div className="campos-micuenta">
          <label>Teléfono:</label>
          <p>{props.telefono}</p>
        </div>
  
        <div className="campos-micuenta">
          <label>Email:</label>
          <p>{props.email}</p>
        </div>
      </div>
    );
}
