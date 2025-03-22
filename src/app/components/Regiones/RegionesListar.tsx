import { useEffect, useState } from "react";
import { Regiones } from "../../../models/Regiones";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";
import { Modal, Button } from "react-bootstrap";

export const RegionesListar = () => {
    const [arrRegiones, setArrRegiones] = useState<Regiones[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<Regiones | null>(null);

    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.REGIONES;
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Respuesta de la API:", resultado);

            setArrRegiones(Array.isArray(resultado) ? resultado : []);
        } catch (error) {
            console.error("Error al obtener regiones", error);
            setArrRegiones([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    // Mostrar modal con detalles de la región seleccionada
    const handleShowModal = (region: Regiones) => {
        setSelectedRegion(region);
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRegion(null);
    };

    return (
        <>
            <div className="row">
                {arrRegiones.length > 0 ? (
                    arrRegiones.map((region, index) => (
                        <div className="col-lg-4" key={region.id || index}>
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
                            <p>{region.name}</p>
                            <p>
                                <Button variant="secondary" onClick={() => handleShowModal(region)}>
                                    Ver detalles »
                                </Button>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No hay regiones disponibles.</p>
                )}
            </div>

            {/* Modal para mostrar los detalles de la región */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRegion?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                        <div className="mt-3" style={{ flex: 1 }}>
                            <h5 className="fw-bold mb-3">ID: {selectedRegion?.id}</h5>
                            <p className="mb-2"><strong>Nombre:</strong> {selectedRegion?.name}</p>
                            {selectedRegion?.description && (
                                <p className="mb-2"><strong>Descripción:</strong> {selectedRegion.description}</p>
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
