import { ServicioGet } from "../../service/ServicioGet";
import { URLS } from "../../utilities/dominios/uris";
import { Cabecera } from "../contenedor/Cabecera";
import { ColombiaListar } from "./Colombia/ColombiaListar";
import { DepartamentoListar } from "./Departamentos/DepartamentosListar";
import { RegionesListar } from "./Regiones/RegionesListar";
import { Sitiosistar } from "./Sitios/SitiosListar";
export const TableroInicial =() => {
  

    return (
        <div>
            <Cabecera />
            <div className="container">
            <ColombiaListar/>
            </div>
            <div className="container py-5">
                <RegionesListar />
            </div>
            <div className="container py-5">
                <DepartamentoListar />
            </div>
        </div>
    );
    
}