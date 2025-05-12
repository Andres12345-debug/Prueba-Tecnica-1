import { ServicioGet } from "../../service/ServicioGet";
import { URLS } from "../../utilities/dominios/uris";
import { Cabecera } from "../contenedor/Cabecera";
import { ColombiaListar } from "../components/Colombia/ColombiaListar";
import { DepartamentoListar } from "../components/Departamentos/DepartamentosListar";
import { RegionesListar } from "../components/Regiones/RegionesListar";
import { Sitiosistar } from "../components/Sitios/SitiosListar";
import { ReactComponent as Logo } from "../../assets/Img/Fondos/fondo.svg";
import logo from "../../assets/Img/Fondos/fondoSvg.svg"; // Importar como URL
import { Mapas } from "../../models/Mapa.s";
import { MapasListar } from "../components/Mapas/MapasListar";


export const TableroInicial = () => {
    return (
        <div className="container">
            <ColombiaListar />
        </div>
    );

}