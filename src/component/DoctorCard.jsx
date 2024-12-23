export default function DoctorCard({ doctor, experiencia, descripcion, especialidad }) {
    return (
        <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
                <article className="card-body">
                    <h4>{doctor}</h4>
                    <div>{experiencia}</div>
                    <p>{descripcion}</p>
                    <p>{especialidad}</p>
                </article>
            </div>
        </div>

    );
}