import { useEffect, useState } from "react";
import { Regiones } from "../../../models/Regiones";
import { URLS } from "../../../utilities/dominios/uris";
import { ServicioGet } from "../../../service/ServicioGet";

export const RegionesListar = () => {
    const [arrRegiones, setArrRegiones] = useState<Regiones[]>([]);

    const consultar = async () => {
        try {
            const urlServicio = URLS.API_URL + URLS.REGIONES;
            const resultado = await ServicioGet.peticionGetPublica(urlServicio);
            
            console.log("Respuesta de la API:", resultado); // Verificar formato

            if (Array.isArray(resultado)) {
                setArrRegiones(resultado);
            } else {
                setArrRegiones([]);
            }
        } catch (error) {
            console.error("Error al obtener regiones", error);
            setArrRegiones([]);
        }
    };

    useEffect(() => {
        consultar();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {arrRegiones.length > 0 ? (
                    arrRegiones.map((region) => (
                        <tr key={region.id}>
                            <td>{region.id}</td>
                            <td>{region.name}</td>
                            <td>{region.desription}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No hay regiones disponibles</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
