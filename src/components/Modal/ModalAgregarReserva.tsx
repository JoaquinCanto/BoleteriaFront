import { useEffect } from 'react';
import './Modal.css'
import { useForm } from 'react-hook-form';
import { PrivateRoutes } from '../Models/Routes';
import { useNavigate } from 'react-router-dom';

interface propTypes {
	nombre: string;
	fecha: string;
	sede: string;
	zona: string;
	cantidad: number;
	onClose: () => void,
	// trigger: () => void,
};

type ReservasSubmitForm = {
	nombre: string;
	fecha: string;
	sede: string;
	zona: string;
	cantidad: number;
	idEvento: string;
	idUsuario: string;
};

export default function ModalAgregar(props: propTypes) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ReservasSubmitForm>();
	const sede = localStorage.getItem('eventSede');
	const navigate = useNavigate();

	useEffect(() => {
		setValue("nombre", props.nombre);
		setValue("fecha", props.fecha);
		setValue("sede", props.sede);
		setValue("idEvento", props.idEvento);
		setValue("idUsuario", props.idUsuario);

	}, [])

	async function onSubmit(data: ReservasSubmitForm) {
		console.log(JSON.stringify(data))
		try {
			const response = await fetch("http://localhost:3000/reservas", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const responseData = await response.json();
			if (responseData.status === 201) {
				props.onClose();
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
		// navigate(PrivateRoutes.MISRESERVAS);

	}
	return (
		<div className="modal">
			<div className="overlay"></div>
			<div className="formRecital">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label className="label">Nombre</label>
						<input className="campo" type="text" placeholder="Nombre" {...register("nombre", { required: "Este campo es requerido.", maxLength: { value: 50, message: "No debe ser mayor de 50 caracteres." } })} disabled />
						{errors.nombre && <span className="error">{errors?.nombre?.message}</span>}
					</div>
					<div>
						<label className="label">Fecha</label>
						<input className="campo" type="text" placeholder="Fecha" {...register("fecha", { required: "Este campo es requerido.", maxLength: { value: 10, message: "No debe ser mayor de 10 caracteres." } })} disabled />
						{errors.fecha && <span className="error">{errors?.fecha?.message}</span>}
					</div>
					<div>
						<label className="label">Sede</label>
						<input className="campo" type="text" placeholder="Sede" {...register("sede", { required: "Este campo es requerido.", maxLength: { value: 10, message: "No debe ser mayor de 10 caracteres." } })} disabled />
						{errors.sede && <span className="error">{errors?.sede?.message}</span>}
					</div>
					<div className="combos">
						<p>Zona:</p>
						<select {...register("zona", { required: "Este campo es requerido." })}>
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
						<select {...register("cantidad", { required: "Este campo es requerido." })}>
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

					<input className="hidden" type="text" {...register("idEvento", { required: "Este campo es requerido." })} disabled />
					<input className="hidden" type="text" {...register("idUsuario", { required: "Este campo es requerido." })} disabled />


					<input className="btnAceptar" type="submit" value="Agregar" />
				</form>
				<button className="btnCancelar" onClick={props.onClose}>Cancelar</button>
			</div>
		</div>
	)
}