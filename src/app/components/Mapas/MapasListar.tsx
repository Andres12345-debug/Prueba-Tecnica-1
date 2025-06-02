import { Mapas } from "../../../models/Mapa.s";
import { ServicioGet } from "../../../service/ServicioGet";
import { URLS } from "../../../utilities/dominios/uris";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";



export const MapasListar = () => {

    // Estado para almacenar las regiones de Colombia
    const [arrMapa, setArrMapa] = useState<Mapas[]>([]);
    //modal
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState<Mapas | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    const [currentPage, setCurrentPage] = useState(1); //PAra el paginador
    const itemsPerPage = 3; //PAra el paginador

    //PAginador
    const totalPages = Math.ceil(arrMapa.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = arrMapa.slice(startIndex, startIndex + itemsPerPage);



    // Método para consultar datos de la API
    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.MAPAS;
            console.log("URL completa:", urlServicio);

            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Resultado recibido:", resultado);

            if (!resultado) {
                console.error("Error: La API devolvió un valor nulo o indefinido");
                setArrMapa([]);
                return;
            }

            if (Array.isArray(resultado)) {
                setArrMapa(resultado);
            } else if (typeof resultado === "object") {
                setArrMapa([resultado]); // Envolver objeto en array si es necesario
            } else {
                console.error("Error: La API devolvió un tipo de dato inesperado", resultado);
                setArrMapa([]);
            }

        } catch (error) {
            console.error("Error en la petición:", error);
            setArrMapa([]);
        }
    };
    useEffect(() => {
        consultar();
    }, []);

    // Mostrar modal con detalles del sitio seleccionado
    const handleShowModal = (mapas: Mapas) => {
        setSelected(mapas);
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelected(null);
    };



    return (
        <div className="container my-5">
            <div className="row">
                {selectedItems.length > 0 ? (
                    selectedItems.map((mapa, index) => (
                        <div className="col-md-4 mb-4" key={index}
                            onClick={() => handleShowModal(mapa)} // Añadir evento onClick para abrir el modal
                            style={{ cursor: "pointer" }} // Cambiar el cursor al pasar por encima
                        > {/* Añadir clave y espacio entre filas */}

                            <div className="card shadow-sm">
                                <img
                                    src={mapa.urlImages[0]}
                                    className="card-img-top"
                                    alt={mapa.name}
                                    style={{ height: "200px", objectFit: "cover" }} // Ajustar imagen
                                />
                                <div className="card-body">
                                    <h5 className="card-title descripcion fw-bold">{mapa.name}</h5>
                                    <p className="card-text descripcion">{mapa.description}</p>

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="descripcion">No hay información disponible en este momento.</p>
                    </div>
                )}
            </div>
            {/* Controles de paginación */}
            <div className="d-flex justify-content-center mt-3">
                <button
                    className="btn btn-danger me-2"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Anterior
                </button>
                <span>Página {currentPage} de {totalPages}</span>
                <button
                    className="btn btn-danger ms-2"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Siguiente
                </button>
            </div>

            {/* Modal para mostrar los detalles de la región */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selected?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                        <div style={{ flex: 1 }}>
                            <img
                                    src={selected?.urlImages[0]}
                                    className="card-img-top"
                                    alt={selected?.name}
                                    style={{ height: "100%", objectFit: "cover" }} // Ajustar imagen
                                    
                                />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>



    );
}