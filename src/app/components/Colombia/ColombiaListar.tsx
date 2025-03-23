import { useEffect, useState } from "react";
import { Colombia } from "../../../models/Colombia";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";

export const ColombiaListar = () => {
    // Estado para almacenar las regiones de Colombia
    const [arrColombia, setArrColombia] = useState<Colombia[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedColombia, setSelectedColombia] = useState<Colombia | null>(null);

    // Método para consultar datos de la API
    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.COLOMBIA;
            console.log("URL completa:", urlServicio); // Log para verificar la URL
            
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Respuesta de la API:", resultado);
            
            if (resultado === null) {
                console.error("La API devolvió null - posible error de red o servidor");
                setArrColombia([]);
                return;
            }
            
            // Verificar si la API devuelve un array o un objeto
            if (Array.isArray(resultado)) {
                setArrColombia(resultado);
            } else {
                setArrColombia([resultado]);
            }
        } catch (error) {
            console.error("Error al obtener regiones", error);
            setArrColombia([]);
        }
    };
    

    useEffect(() => {
        consultar();
    }, []);

    // Mostrar modal con detalles de la selección
    const handleShowModal = (colombia: Colombia) => {
        setSelectedColombia(colombia);
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedColombia(null);
    };

    return (
        <>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                {arrColombia.length > 0 ? (
                    arrColombia.map((colombia, index) => (
                        <div className="col-10 col-sm-8 col-lg-6" key={index}>
                            <img
                                src={colombia.flags[0]} // ✅ Ahora sí tomamos la imagen del JSON
                                className="d-block mx-lg-auto img-fluid"
                                alt={colombia.name}
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                                    {colombia.name} {/* ✅ Ahora muestra "Colombia" */}
                                </h1>
                                <p className="lead">{colombia.description}</p> {/* ✅ Ahora muestra la descripción real */}
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg px-4 me-md-2"
                                        onClick={() => handleShowModal(colombia)}
                                    >
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">No hay regiones disponibles en este momento.</p>
                    </div>
                )}

            </div>

            {/* Modal para mostrar detalles (opcional) */}
            {showModal && selectedColombia && (
                <div className="modal fade show d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedColombia.name}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Detalles de {selectedColombia.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
