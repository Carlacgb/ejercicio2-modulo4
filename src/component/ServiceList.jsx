

/*export default function ServiceList ({servicio}){
    return(
        <li>{servicio}</li>
    );
}*/

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { HospitalContext } from '../App';

function ServiceList(props) {
    const { servicios } = useContext(HospitalContext);
    const servicio = servicios && servicios.find(ser => ser === props.servicio);

    if (!servicio) {
        return <div>Servicio no encontrado</div>;
    }
    return (
        <li className="list-group-item">{servicio}</li>
    );
}

ServiceList.propTypes = {
    servicio: PropTypes.string.isRequired,
};

export default ServiceList;

