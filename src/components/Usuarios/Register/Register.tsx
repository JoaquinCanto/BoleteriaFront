import './Register.css'
import React, { useState } from 'react';

const Registro: React.FC = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        dni: '',
        telefono: '',
        correo: '',
        contraseña: '',
        repetirContraseña: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes realizar cualquier acción necesaria con el formulario enviado
    };

    return (
        <div className='Registro'>
            <h2>REGISTRO</h2>
            <div className="formuPrincipal">
                <form onSubmit={handleSubmit}>
                    <input className='campos' type="text" name="nombre" value={formulario.nombre} onChange={handleChange} placeholder="Nombre" />
                    <input className='campos' type="text" name="apellido" value={formulario.apellido} onChange={handleChange} placeholder="Apellido" />
                    <input className='campos' type="date" name="fechaNacimiento" value={formulario.fechaNacimiento} onChange={handleChange} placeholder="Fecha de Nacimiento" />
                    <input className='campos' type="text" name="dni" value={formulario.dni} onChange={handleChange} placeholder="DNI" />
                    <input className='campos' type="text" name="telefono" value={formulario.telefono} onChange={handleChange} placeholder="Teléfono" />
                    <input className='campos' type="email" name="correo" value={formulario.correo} onChange={handleChange} placeholder="Correo Electrónico" />
                    <input className='campos' type="password" name="contraseña" value={formulario.contraseña} onChange={handleChange} placeholder="Contraseña" />
                    <input className='campos' type="password" name="repetirContraseña" value={formulario.repetirContraseña} onChange={handleChange} placeholder="Repetir Contraseña" />
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Registro;
