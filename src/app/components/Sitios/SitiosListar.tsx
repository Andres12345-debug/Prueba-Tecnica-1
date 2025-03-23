import { useEffect, useState } from "react";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";
import { Modal, Button } from "react-bootstrap";
import { Sitios } from "../../../models/Sitios";

export const Sitiosistar = () => {
    const [arrSitios, setArrSitios] = useState<Sitios[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSitios, setSelectedSitios] = useState<Sitios | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.SITIOS;
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Respuesta de la API:", resultado);

            setArrSitios(Array.isArray(resultado) ? resultado : []);
        } catch (error) {
            console.error("Error al obtener sitios", error);
            setArrSitios([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    // Mostrar modal con detalles del sitio seleccionado
    const handleShowModal = (sitios: Sitios) => {
        setSelectedSitios(sitios);
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSitios(null);
    };

    // Navegar a la siguiente slide
    const handleNext = () => {
        if (arrSitios.length <= 3) return;
        setCurrentIndex(prevIndex => 
            prevIndex + 3 >= arrSitios.length ? 0 : prevIndex + 3
        );
    };

    // Navegar a la slide anterior
    const handlePrev = () => {
        if (arrSitios.length <= 3) return;
        setCurrentIndex(prevIndex => 
            prevIndex - 3 < 0 ? Math.floor((arrSitios.length - 1) / 3) * 3 : prevIndex - 3
        );
    };

    // Obtener los sitios visibles actualmente (3 por slide)
    const getVisibleSitios = () => {
        return arrSitios.slice(currentIndex, currentIndex + 3);
    };

    // Calcular el número total de slides
    const totalSlides = Math.ceil(arrSitios.length / 3);
    const currentSlide = Math.floor(currentIndex / 3);

    return (
        <>
            <div className="container">
                <h3 className="mb-4 text-center"><span className="textosAmarillo">Sitios </span><span className="textosAzul">Des</span ><span className="textosRojos">tacados</span></h3>                
                {arrSitios.length > 0 ? (
                    <div className="position-relative">
                        {/* Controles del slider */}
                        {arrSitios.length > 3 && (
                            <>
                                <button
                                    className="btn btn-primary rounded-circle position-absolute"
                                    onClick={handlePrev}
                                    style={{ 
                                        left: "-20px", 
                                        top: "50%", 
                                        transform: "translateY(-50%)",
                                        zIndex: 10,
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <button
                                    className="btn btn-primary rounded-circle position-absolute"
                                    onClick={handleNext}
                                    style={{ 
                                        right: "-20px", 
                                        top: "50%", 
                                        transform: "translateY(-50%)",
                                        zIndex: 10,
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </>
                        )}

                        {/* Slider de sitios */}
                        <div className="slider-container overflow-hidden">
                            <div 
                                className="row gy-4"
                                style={{
                                    transition: "transform 0.5s ease",
                                }}
                            >
                                {getVisibleSitios().map((sitios, index) => (
                                    <div className="col-md-4" key={currentIndex + index}>
                                        <div 
                                            className="card shadow-sm bg-secondary-subtle h-100" 
                                            style={{ 
                                                cursor: "pointer",
                                                transition: "transform 0.3s ease"
                                            }}
                                            onClick={() => handleShowModal(sitios)}
                                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                        >
                                            <div className="card-img-top p-3" style={{ height: "200px", overflow: "hidden" }}>
                                                {sitios.images && sitios.images.length > 0 ? (
                                                    <img 
                                                        src={sitios.images[0]} 
                                                        alt={sitios.name} 
                                                        loading="lazy" 
                                                        className="w-100 h-100 object-fit-cover" 
                                                    />
                                                ) : (
                                                    <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                                                        <span className="text-muted">Sin imagen</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text fw-bold textosAzul">{sitios.name}</p>
                                               
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Indicadores de slides */}
                        {totalSlides > 1 && (
                            <div className="d-flex justify-content-center mt-4">
                                {Array.from({ length: totalSlides }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`mx-1 rounded-circle ${currentSlide === idx ? 'bg-primary' : 'bg-secondary'}`}
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            border: "none"
                                        }}
                                        onClick={() => setCurrentIndex(idx * 3)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">No hay sitios disponibles en este momento.</p>
                    </div>
                )}
            </div>

            {/* Modal para mostrar los detalles del sitio */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedSitios?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                        {selectedSitios?.images && selectedSitios.images.length > 0 && (
                            <div className="me-md-4 mb-3 mb-md-0" style={{ flex: "0 0 40%" }}>
                                <img 
                                    src={selectedSitios.images[0]} 
                                    alt={selectedSitios.name} 
                                    className="img-fluid rounded" 
                                />
                            </div>
                        )}
                        <div style={{ flex: 1 }}>
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