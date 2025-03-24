import { useEffect, useState } from "react";
import { Departamentos } from "../../../models/Departamentos";
import { ServicioGet } from "../../../service/ServicioGet";
import { URLS } from "../../../utilities/dominios/uris";

export const DepartamentoListar = () => {
    const [arrDepartamento, setArrDepartamento] = useState<Departamentos[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.DEPARTAMENTO;
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Respuesta de la API:", resultado);
            setArrDepartamento(Array.isArray(resultado) ? resultado : []);
        } catch (error) {
            console.error("Error al obtener regiones", error);
            setArrDepartamento([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    const totalPages = Math.ceil(arrDepartamento.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = arrDepartamento.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center textos">
                {selectedItems.length > 0 ? (
                    selectedItems.map((departamento, index) => (
                        <div className="col" key={index}>
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal textosRojos fw-bold">{departamento.name}</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>{departamento.description}</li>
                                        <li className="lead textosRojos">Capital: {departamento.cityCapital?.name || "Ciudad desconocida"}</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="textos">No hay regiones disponibles en este momento.</p>
                    </div>
                )}
            </div>
            {/* Controles de paginación */}
            <div className="d-flex justify-content-center mt-3">
                <button 
                    className="btn btn-primary me-2"
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button 
                    className="btn btn-primary ms-2"
                    disabled={currentPage === totalPages} 
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
