import { useEffect, useState } from 'react';
import './MiCuenta.css';

interface User {
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    dni: string;
    tel: string;
    email: string;
}

export default function MiCuenta() {
    const [usuario, setUsuario] = useState<User | null>(null);

    useEffect(() => {
        const userMongoId = localStorage.getItem('idMongo');
        const token = localStorage.getItem('token');

        if (!token) {
          
            window.location.href = '/registrarse';
            return;
        }

        fetch(`http://localhost:3000/usuarios/${userMongoId}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    if (!usuario) {
        return <div>Cargando datos del usuario...</div>; 
    }

    return (
        <div className="micuenta-contenedor">
            <h1>Datos del Usuario</h1>

            <div>
                <label>Nombre: {usuario.nombre}</label>
            </div>

            <div>
                <label>Apellido: {usuario.apellido}</label>
            </div>

            <div>
                <label>Fecha de Nacimiento: {usuario.fechaNacimiento}</label>
            </div>

            <div>
                <label>DNI: {usuario.dni}</label> 
            </div>

            <div>
                <label>Teléfono: {usuario.tel}</label>
            </div>

            <div>
                <label>Email: {usuario.email}</label>
            </div>
        </div>
    );
}
