import { useEffect, useState } from "react";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";
import { ServicioGetMoneda } from "../../../service/ServicioGetMoneda";

export const MonedaListar = () => {
    const [rate, setRate] = useState(null);
    const [error, setError] = useState<string | null>(null);

    const consultar = async () => {
        const resultado = await ServicioGetMoneda.peticionGetPublica("https://api.exchangerate.host/convert?from=USD&to=COP");

        console.log("Datos recibidos en consultar:", resultado);

        if (!resultado || !resultado.info || !resultado.info.rate) {
            console.log("No se encontró la tasa de conversión");
            return;
        }

        const tasa = resultado.info.rate;
        setRate(tasa);
        setError(null);
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Tasa de Cambio USD a COP</h2>

            {error && (
                <div className="alert alert-danger">{error}</div>
            )}

            {rate ? (
                <div className="alert alert-success">
                    1 USD = {rate} COP
                </div>
            ) : (
                !error && <p className="text-muted">Cargando...</p>
            )}
        </div>
    );
};
