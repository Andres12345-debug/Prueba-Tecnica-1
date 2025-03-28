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
            console.log("URL completa:", urlServicio);

            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            console.log("Resultado recibido:", resultado);

            if (!resultado) {
                console.error("Error: La API devolvió un valor nulo o indefinido");
                setArrColombia([]);
                return;
            }

            if (Array.isArray(resultado)) {
                setArrColombia(resultado);
            } else if (typeof resultado === "object") {
                setArrColombia([resultado]); // Envolver objeto en array si es necesario
            } else {
                console.error("Error: La API devolvió un tipo de dato inesperado", resultado);
                setArrColombia([]);
            }

        } catch (error) {
            console.error("Error en la petición:", error);
            setArrColombia([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    return (
        <div className="container">
            {arrColombia.length > 0 ? (
                arrColombia.map((colombia, index) => (
                    <div className="row flex-lg-row-reverse align-items-center" key={index}>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img 
                                src={colombia.flags[0]} // ✅ Ahora sí tomamos la imagen del JSON
                                className="d-block mx-lg-auto img-fluid" 
                                alt={colombia.name} 
                                width="700" 
                                height="500" 
                                loading="lazy" 
                                                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-4 border-bottom border-primary pb-2 fs-2 textosAzul textos fw-bold text-center">
                                {colombia.name} {/* ✅ Ahora muestra "Colombia" */}
                            </h1>
                            <p className="textos">{colombia.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center">
                    <p className="text-muted textos">No hay informacion disponibles en este momento.</p>
                </div>
            )}
        </div>
    );
};