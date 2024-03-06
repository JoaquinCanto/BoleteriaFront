import './Usuario.css'
import React, { useState } from 'react';

const LogIn: React.FC = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes realizar cualquier acción necesaria con las credenciales enviadas
        console.log('Credenciales enviadas:', credentials);
    };

    return (
        <div className="LogIn">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit} className="formLogIn">
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default LogIn;
