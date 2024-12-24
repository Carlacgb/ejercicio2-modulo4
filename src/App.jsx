
/*import { useEffect, useState } from 'react'
import DoctorCard from './component/doctorCard'
import ServiceList from './component/ServiceList';
import AppointmentForm from './component/AppointmentForm';
import './App.css'
//Context
import { AppProvider, AppContext } from './AppContext';

function App() {

  /*const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);

  const [citaEnviada, setCitaEnviada] = useState(false);
    const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

  //Context
  const {
    doctores,
    setDoctores,
    servicios,
    setServicios,
    citaEnviada,
    setCitaEnviada,
    doctorSeleccionado,
    setDoctorSeleccionado
  } = useContext(AppContext);

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

//Context
function RootApp() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default App */

import React, { useEffect, useState, createContext, Profiler, memo } from 'react';
import './App.css';
import DoctorCard from './component/DoctorCard';
import ServiceList from './component/ServiceList';
import ApoinmentForm from './component/AppointmentForm';

// 1. Crear el Context
const HospitalContext = createContext();
export { HospitalContext };

// Componentes memoizados
const MemoizedDoctorCard = memo(DoctorCard);
const MemoizedServiceList = memo(ServiceList);

function App() {
  const [doctores, setDoctores] = useState([]);
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Simulando una carga de datos (puedes reemplazar esto con una llamada a una API)
    const doctoresData = [
      {
        id: 1,
        nombre: 'Doctor 1',
        experiencia: ' 5 años',
        descripcion: 'Descripcion del doctor 1 que tiene 5 años de experiencia y sabemos que no tiene experiencia',
        especialidad: 'Broncopulmonar'
      },
      {
        id: 2,
        nombre: 'Doctor 2',
        experiencia: '3 años',
        descripcion: 'Descripcion del doctor 2 que tiene 3 años de experiencia',
        especialidad: 'Pediatria'
      },
      {
        id: 3,
        nombre: 'Doctor 3',
        experiencia: ' 5 años',
        descripcion: 'Descripcion del doctor 3 que tiene 5 años de experiencia y sabemos que no tiene experiencia',
        especialidad: 'Examenes'
      },
      {
        id: 4,
        nombre: 'Doctor 4',
        experiencia: '9 años',
        descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia',
        especialidad: 'Imagen'
      },
      {
        id: 5,
        nombre: 'Doctor 5',
        experiencia: '9 años',
        descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia',
        especialidad: 'Kinesiologia'
      },
      {
        id: 6,
        nombre: 'Doctor 6',
        experiencia: '9 años',
        descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia',
        especialidad: 'Broncopulmonar'
      },
      {
        id: 7,
        nombre: 'Doctor 7',
        experiencia: '5 años',
        descripcion: 'Descripcion del doctor 4 que tiene 9 años de experiencia',
        especialidad: 'Pediatria'
      },
      {
        id: 8,
        nombre: 'Doctor 8',
        experiencia: '9',
        descripcion: 'Descripcion del doctor 8 que tiene 9 años de experiencia',
        especialidad: 'Examenes'
      }
    ];

    const serviciosData = ['Broncopulmonar', 'Pediatria', 'Examenes', 'Imagen', 'Kiniseologia'];

    // Establecer los datos en el estado
    setDoctores(doctoresData);
    setServicios(serviciosData);
  }, []);

  const hospitalData = {
    doctores,
    servicios,
  };

  // Callback para el Profiler
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log(`${id} phase:${phase} actualDuration:${actualDuration} baseduration:${baseDuration}`)
};

  return (
    // 2. Proveer el Context
    <HospitalContext.Provider value={hospitalData}>
      <>
      <h1>Hospital</h1>
        <section className="container">
        <Profiler id="doctorList" onRender={onRender}>
          <div className='row g-4'>
            {doctores.map(({ id, nombre, experiencia, descripcion, especialidad }) => (
              <MemoizedDoctorCard key={id} doctor={nombre} experiencia={experiencia} descripcion={descripcion} especialidad={especialidad} />
            )
            )}
          </div>
        </Profiler>
        </section>

        <section className='container my-3'>
          <h2>Servicios Médicos</h2>
          <p>Conoce nuestra variedad de servicios médicos</p>
          <Profiler id="serviceList" onRender={onRender}>
          <ul className="list-group">
            {servicios.map((servicio, index) => (
              <MemoizedServiceList key={index} servicio={servicio} />
            ))}
          </ul>
          </Profiler>
        </section>

        <section>
          <h2>Reservar Cita</h2>
          <ApoinmentForm doctores={doctores} />
        </section>
      </>
    </HospitalContext.Provider>
  );
}

export default App;
