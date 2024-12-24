import React, { creatContext, useState} from 'react';
import { useTransition } from 'react';
import { Children } from 'react';
import PropTypes from "prop-types";


export const AppContext = creatContext();

export const AppProvider = ({ Children }) => {
    const [doctores, setDoctores] = useState ([]);
    const [servicios, setServicios] = useState ([]);
    const [cita, citaEnviada] = useState (false);
    const [doctorSeleccionado, setDoctorSeleccionado] = useState (null);
    
    const contextValue = {
        doctores,
        setDoctores,
        servicios,
        setServicios,
        cita,
        citaEnviada,
        doctorSeleccionado,
        setDoctorSeleccionado
    };

    return (
        <AppContext.Provider value={contextValue}>
            {Children}
        </AppContext.Provider>
    )

}