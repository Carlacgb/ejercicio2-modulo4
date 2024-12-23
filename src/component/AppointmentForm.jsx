import React, { useState } from 'react';

function AppointmentForm({ doctores, onFormSubmit, onDoctorSelect }) {
    const [selectedDoctorId, setSelectedDoctorId] = useState('');
    const [nombrePaciente, setNombrePaciente] = useState('');
    const [fechaCita, setFechaCita] = useState('');

    const handleSelectChange = (event) => {
        const doctorId = parseInt(event.target.value);
        setSelectedDoctorId(doctorId);
        onDoctorSelect(doctorId); // Notificar la selección al padre
    };

    const handleInputChange = (event) => {
        setNombrePaciente(event.target.value);
    };

    const handleCitaChange = (event) => {
        setFechaCita(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Preparar los datos de la cita
        const citaData = {
            doctorSeleccionado: parseInt(selectedDoctorId),
            nombrePaciente,
            fechaCita,
        };
        onFormSubmit(citaData); // Notificar al componente padre
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">Nombre del Paciente</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Escribe tu nombre"
                        onChange={handleInputChange}
                        value={nombrePaciente}
                        required
                    />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Especialidad del Doctor</label>
                    <select
                        className="form-control"
                        id="lastName"
                        value={selectedDoctorId}
                        onChange={handleSelectChange}
                        required
                    >
                         <option value="">-- Seleccionar --</option>
                        {doctores.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.especialidad}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="username" className="form-label">Fecha Cita</label>
                    <input
                        type="date"
                        className="form-control"
                        id="username"
                        placeholder="Ingrese la Fecha de la Cita"
                        onChange={handleCitaChange}
                        value={fechaCita}
                        required
                    />
                </div>
                <button className="w-50 btn btn-primary btn-lg mx-auto" type="submit">
                    Reservar Cita
                </button>
            </div>
        </form>
    );
}

export default AppointmentForm;