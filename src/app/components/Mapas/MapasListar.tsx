import { Mapas } from "../../../models/Mapa.s";
import { ServicioGet } from "../../../service/ServicioGet";
import { URLS } from "../../../utilities/dominios/uris";
import { useEffect, useState } from "react";


export const MapasListar = () => {

        // Estado para almacenar las regiones de Colombia
        const [arrMapa, setArrMapa] = useState<Mapas[]>([]);
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
    
    

    return(
        <div className="container">
            {arrMapa.length > 0 ? (
                arrMapa.map((mapa, index) => (
                    <div className="row flex-lg-row-reverse align-items-center" key={index}>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img 
                                src={mapa.urlImages[0]} // ✅ Ahora sí tomamos la imagen del JSON
                                className="d-block mx-lg-auto img-fluid" 
                                alt={mapa.name} 
                                width="700" 
                                height="500" 
                                loading="lazy" 
                                                            />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-4 border-bottom border-primary pb-2 fs-2 textosAzul textos fw-bold text-center">
                                {mapa.name} {/* ✅ Ahora muestra "mapa" */}
                            </h1>
                            <p className="textos">{mapa.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center">
                    <p className="text-muted textos">No hay informacion disponibles en este momento.</p>
                </div>
            )}
        </div>
    )
}