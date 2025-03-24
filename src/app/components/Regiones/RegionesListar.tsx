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
            <div className="container mt-5">
            <h1 className="mb-4 border-bottom border-primary pb-2 fs-2 textosAzul text-center textos fw-bold">
                    Regiones Colombianas
                </h1>
                {/* Publicaciones estilo Instagram */}
                <div className="container mt-4"></div>
                <div className="row gy-4">
                    {arrRegiones.length > 0 ? (
                        arrRegiones.map((region, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card shadow-sm bg-secondary-subtle" 
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleShowModal(region)}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <div className="card-body">
                                        <h4 className="fw-bold textosAzul textos">{region.name}</h4>                                        
                                        <p className="textos">{region.description}</p>
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
            </div>

            {/* Modal para mostrar los detalles de la región */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRegion?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                        <div className="mt-3" style={{ flex: 1 }}>
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
