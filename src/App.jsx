
import { useEffect, useState } from 'react'
import DoctorCard from './component/doctorCard'
import ServiceList from './component/ServiceList';
import AppointmentForm from './component/AppointmentForm';
import './App.css'

function App() {

  const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);

  const [citaEnviada, setCitaEnviada] = useState(false);
    const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  useEffect(() => {

    const doctoresData = [
      {
        id: 1,
        nombre: 'Doctora 1',
        experiencia: '5 años',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat odio condimentum aliquam dignissim eget, porttitor vitae tellus nulla felis nam.',
        especialidad: 'Medicina general'
      },
      {
        id: 2,
        nombre: 'Doctor 2',
        experiencia: '3 años',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat odio condimentum aliquam dignissim eget, porttitor vitae tellus nulla felis nam.',
        especialidad: 'Ginecología'
      },
      {
        id: 3,
        nombre: 'Doctor 3',
        experiencia: '6 años',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat odio condimentum aliquam dignissim eget, porttitor vitae tellus nulla felis nam.',
        especialidad: 'Cardiología'
      },
      {
        id: 4,
        nombre: 'Doctor 4',
        experiencia: '1 años',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat odio condimentum aliquam dignissim eget, porttitor vitae tellus nulla felis nam.',
        especialidad: 'Psicología'
      },
      {
        id: 5,
        nombre: 'Doctor 5',
        experiencia: '10 años',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat odio condimentum aliquam dignissim eget, porttitor vitae tellus nulla felis nam.',
        especialidad: 'Broncopulmonar'
      }
    ]

    const serviciosData = ['Medicina general', 'Ginecología', 'Nutrición', 'Piscología', 'Broncopulmonar'];
    setDoctores(doctoresData);
    setServicios(serviciosData);

  }, []);

    // Callback para el envío del formulario
    const handleFormSubmit = (datosCita) => {
      console.log("Formulario enviado", datosCita);
      setCitaEnviada(true);
  };

  // Callback para la selección de un doctor
  const handleDoctorSelect = (doctorId) => {
    const selectedDoctor = doctores.find(doctor => doctor.id === doctorId);
    setDoctorSeleccionado(selectedDoctor);
    console.log("Doctor seleccionado:", selectedDoctor);
};


  return (
    <>
      <h3 className='p-3 mb-2 bg-info text-dark'>Nuestros Doctores</h3>
      <section className="row">
        {doctores.map(({ id, nombre, experiencia, descripcion, especialidad }) => (
          <DoctorCard key={id} doctor={nombre} experiencia={experiencia} descripcion={descripcion} especialidad={especialidad} />
        ))}
      </section>

      <h3 className='p-3 mb-2 bg-info text-dark'>Lista de servicios médico</h3>
      <section className="grillaflex">
        {servicios.map((servicio, index) => (
          <ServiceList key={index} servicio={servicio} />
        ))}
      </section>

      <h3 className='p-3 mb-2 bg-info text-dark'>Seleccione su Cita</h3>
      <section className='container'>
        <AppointmentForm
          doctores={doctores}
          onFormSubmit={handleFormSubmit}
          onDoctorSelect={handleDoctorSelect}
        />
           {citaEnviada && <p>La cita fue enviada correctamente.</p>}
            {doctorSeleccionado && <p>Has seleccionado al doctor: {doctorSeleccionado.nombre}</p>}
      </section>
    </>
  )
}

export default App