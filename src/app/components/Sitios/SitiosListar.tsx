import { useEffect, useState } from "react";
import { Regiones } from "../../../models/Regiones";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";
import { Modal, Button } from "react-bootstrap";
import { Sitios } from "../../../models/Sitios";

export const Sitiosistar = () => {
    const [arrSitios, setArrSitios] = useState<Sitios[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSitios, setSelectedSitios] = useState<Sitios | null>(null);

    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.SITIOS;
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Respuesta de la API:", resultado);

            setArrSitios(Array.isArray(resultado) ? resultado : []);
        } catch (error) {
            console.error("Error al obtener regiones", error);
            setArrSitios([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    // Mostrar modal con detalles de la región seleccionada
    const handleShowModal = (sitios: Sitios) => {
        setSelectedSitios(sitios);
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSitios(null);
    };

    return (
        <>
            <div className="container mt-5">
                {/* Publicaciones estilo Instagram */}
                <div className="container mt-4"></div>
                <div className="row gy-4">
                    {arrSitios.length > 0 ? (
                        arrSitios.map((sitios, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card shadow-sm bg-secondary-subtle" 
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleShowModal(sitios)}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <div className="card-img-top p-3" style={{ height: "200px", overflow: "hidden" }}>
                                    <img src={sitios.images[0]} alt={sitios.name}  loading="lazy" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text fw-bold textosAzul">{sitios.name}</p>                                        
                                        <p className="card-text">{sitios.description}</p>
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
            </div>

            {/* Modal para mostrar los detalles de la región */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedSitios?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                        <div className="mt-3" style={{ flex: 1 }}>
                            {selectedSitios?.description && (
                                <p className="mb-2"><strong>Descripción:</strong> {selectedSitios.description}</p>   
                            )}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
