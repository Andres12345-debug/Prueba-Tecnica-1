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
        <div className=" container">
            <div className="col-md-6 p-lg-5 mx-auto my-5 p-4"> <h1 className="fs-1 fw-bold textos">Bienvenidos a mí <span className="textosAzul">país</span></h1></div>
            <div className="container my-5">
                <ColombiaListar />
            </div>
        </div>
    );

}