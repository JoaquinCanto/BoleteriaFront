import './Modal.css'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface propTypes {
	onClose: () => void,
	data: data
};

type data = {
	id: string,
	nombre: string,
	banda: string,
	fecha: string,
	hora: string,
	descripcion: string,
	sede: string,
	reservas: number,
	maxEntradas: number,
};

type RecitalSubmitForm = {
	nombre: string,
	banda: string,
	fecha: string,
	hora: string,
	descripcion: string,
	sede: string,
	reservas: number,
	maxEntradas: number,
};

export default function ModalConsulta(props: propTypes) {
	const {
		register,
		setValue,
		formState: { errors },
	} = useForm<RecitalSubmitForm>();

	useEffect(() => {
		setValue("nombre", props.data.nombre);
		setValue("banda", props.data.banda);
		setValue("fecha", props.data.fecha);
		setValue("hora", props.data.hora);
		setValue("descripcion", props.data.descripcion);
		setValue("sede", props.data.sede);
		setValue("reservas", props.data.reservas);
		setValue("maxEntradas", props.data.maxEntradas);
	}, [])

	return (
		<div className="modal">
			<div className="overlay"></div>
			<div className="formRecital">
				<form>
					<div>
						<label className="label">Nombre</label>
						<input className="campo" type="text" placeholder="Nombre" {...register("nombre", { required: "Este campo es requerido.", maxLength: { value: 50, message: "No debe ser mayor de 50 caracteres." } })} />
						{errors.nombre && <span className="error">{errors?.nombre?.message}</span>}
					</div>
					<div>
						<label className="label">Banda</label>
						<input className="campo" type="text" placeholder="Banda" {...register("banda", { required: "Este campo es requerido.", maxLength: { value: 50, message: "No debe ser mayor de 50 caracteres." } })} />
						{errors.banda && <span className="error">{errors?.banda?.message}</span>}
					</div>
					<div>
						<label className="label">Fecha</label>
						<input className="campo" type="text" placeholder="Fecha" {...register("fecha", { required: "Este campo es requerido.", maxLength: { value: 10, message: "No debe ser mayor de 10 caracteres." } })} />
						{errors.fecha && <span className="error">{errors?.fecha?.message}</span>}
					</div>
					<div>
						<label className="label">Hora</label>
						<input className="campo" type="text" placeholder="Hora" {...register("hora", { required: "Este campo es requerido.", maxLength: { value: 8, message: "No debe ser mayor de 8 caracteres." } })} />
						{errors.hora && <span className="error">{errors?.hora?.message}</span>}
					</div>
					<div>
						<label className="label">Sede</label>
						<select name="cmbSedes">
							<option value="Monumental">Monumental</option>
							<option value="Gigante">Gigante</option>
						</select>
					</div>
					<div>
						<label className="label">Reservas</label>
						<input className="campo" type="number" placeholder="Reservas" {...register("reservas", { required: "Este campo es requerido.", min: { value: 0, message: "No pueden ser negativas." }, max: { value: 84000, message: "No pueden superar la cantidad permitida." } })} />
						{errors.reservas && <span className="error">{errors?.reservas?.message}</span>}
					</div>
					<div>
						<label className="label">Max Entradas</label>
						<input className="campo" type="number" placeholder="Max Entradas" {...register("maxEntradas", { required: "Este campo es requerido.", min: { value: 10000, message: "No pueden ser menos de 10.000 personas." }, max: { value: 84000, message: "No pueden ser más de 84.000 personas." } })} />
						{errors.maxEntradas && <span className="error">{errors?.maxEntradas?.message}</span>}
					</div>
					<div>
						<label className="label">Descripción</label>
						<textarea className="campo"  {...register("descripcion", { required: "Este campo es requerido." })} />
						{errors.descripcion && <span className="error">{errors?.descripcion?.message}</span>}
					</div>
				</form>
				<button className="btnCancelar" onClick={props.onClose}>Volver</button>
			</div>
		</div>
	)
}