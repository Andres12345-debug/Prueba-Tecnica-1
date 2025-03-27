import { ServicioGet } from "../../service/ServicioGet";
import { URLS } from "../../utilities/dominios/uris";
import { Cabecera } from "../contenedor/Cabecera";
import { ColombiaListar } from "./Colombia/ColombiaListar";
import { DepartamentoListar } from "./Departamentos/DepartamentosListar";
import { RegionesListar } from "./Regiones/RegionesListar";
import { Sitiosistar } from "./Sitios/SitiosListar";
import { ReactComponent as Logo } from "../../assets/Img/Fondos/fondo.svg";
import logo from "../../assets/Img/Fondos/fondoSvg.svg"; // Importar como URL


export const TableroInicial = () => {
    return (
        <div className="jumbo">
            <div className="container">
                <ColombiaListar />
            </div>
        </div>
    );

}