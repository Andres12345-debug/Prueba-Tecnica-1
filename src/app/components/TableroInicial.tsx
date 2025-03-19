import { ServicioGet } from "../../service/ServicioGet";
import { URLS } from "../../utilities/dominios/uris";
import { RegionesListar } from "./Regiones/RegionesListar";
export const TableroInicial =() => {

    

    return(
        <div className="container py-5">
            <h1>Hola</h1>
            <RegionesListar></RegionesListar>
        </div>
    )
}