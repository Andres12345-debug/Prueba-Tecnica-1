import { ServicioGet } from "../../service/ServicioGet";
import { URLS } from "../../utilities/dominios/uris";
import { Cabecera } from "../contenedor/Cabecera";
import { RegionesListar } from "./Regiones/RegionesListar";
export const TableroInicial =() => {
  

    return (
        <div>
            <Cabecera />
            <div className="container py-5">
                <RegionesListar />
            </div>
        </div>
    );
    
}