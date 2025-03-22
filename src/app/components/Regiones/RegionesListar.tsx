import { useEffect, useState } from "react";
import { Regiones } from "../../../models/Regiones";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";

export const RegionesListar = () => {
    const [arrRegiones, setArrRegiones] = useState<Regiones[]>([]);

    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.REGIONES;
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);

            console.log("Respuesta de la API:", resultado); // Verificar formato

            if (Array.isArray(resultado)) {
                setArrRegiones(resultado);
            } else {
                setArrRegiones([]);
            }
        } catch (error) {
            console.error("Error al obtener regiones", error);
            setArrRegiones([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    return (
        <div className="row">
            {arrRegiones.length > 0 ? (
                arrRegiones.map((region) => (
                    <div className="col-lg-4" key={region.id}>
                        <svg
                            className="bd-placeholder-img rounded-circle"
                            width="140"
                            height="140"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                        </svg>
                        <h2 className="fw-normal">{region.id}</h2>
                        <p>{region.description}</p>
                        <p>
                            <a className="btn btn-secondary" href="#">
                                View details »
                            </a>
                        </p>
                    </div>
                ))
            ) : (
                <p>No hay regiones disponibles.</p>
            )}
        </div>



    );
};
