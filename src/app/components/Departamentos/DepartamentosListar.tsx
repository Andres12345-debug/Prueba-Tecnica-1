import { useEffect, useState } from "react";
import { Departamentos } from "../../../models/Departamentos";
import { ServicioGet } from "../../../service/ServicioGet";
import { URLS } from "../../../utilities/dominios/uris";
import { Button, Modal } from "react-bootstrap";

export const DepartamentoListar = () => {
    const [arrDepartamento, setArrDepartamento] = useState<Departamentos[]>([]);

    //modal
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState<Departamentos | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);



    const [currentPage, setCurrentPage] = useState(1); //PAra el paginador
    const itemsPerPage = 3; //PAra el paginador

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

    //PAginador
    const totalPages = Math.ceil(arrDepartamento.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = arrDepartamento.slice(startIndex, startIndex + itemsPerPage);

    //Modal
    // Mostrar modal con detalles del sitio seleccionado
    const handleShowModal = (departamentos: Departamentos) => {
        setSelected(departamentos);
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelected(null);
    };

    return (
        <>
            <div className="container my-5">
                <h1 className="mb-4 border-bottom border-danger pb-2 titulo text-center fw-bold mt-4">
                    Departamentos Colombianos
                </h1>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center descripcion">
                    {selectedItems.length > 0 ? (
                        selectedItems.map((departamento, index) => (
                            <div className="col" key={index}
                                onClick={() => handleShowModal(departamento)}
                                style={{ cursor: "pointer" }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 descripcion fw-bold">{departamento.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{departamento.description}</li>
                                            <li className="lead descripcion">Capital: {departamento.cityCapital?.name || "Ciudad desconocida"}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="descripcion">No hay regiones disponibles en este momento.</p>
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
            </div>
            {/* Modal para mostrar los detalles de la región */}
            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selected?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column flex-md-row align-items-start">
                        <div className="mt-3" style={{ flex: 1 }}>
                            <p className="descripcion">{selected?.description}</p>
                            <p className="descripcion">Tiene una superficie de: {selected?.surface}</p>
                            <p className="descripcion">Su poblacion consta de: {selected?.population} habitantes</p>
                            <p className="descripcion">Tiene : {selected?.municipalities} municipios</p>
                            <p className="descripcion"><span className="fw-bold">Su capital:</span> {selected?.cityCapital?.description}</p>

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
