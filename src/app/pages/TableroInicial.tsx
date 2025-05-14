import { ServicioGet } from "../../service/ServicioGet";
import { URLS } from "../../utilities/dominios/uris";
import { Cabecera } from "../contenedor/Cabecera";
import { ColombiaListar } from "../components/Colombia/ColombiaListar";
import { DepartamentoListar } from "../components/Departamentos/DepartamentosListar";
import { RegionesListar } from "../components/Regiones/RegionesListar";
import { Sitiosistar } from "../components/Sitios/SitiosListar";
import logo from "../../assets/Img/Contenidos/logoColombia.svg";
import { Mapas } from "../../models/Mapa.s";
import { MapasListar } from "../components/Mapas/MapasListar";
import { url } from "inspector";


export const TableroInicial = () => {
    return (
        <div className="container my-5">
            <div>
                <div className="container col-xxl-8 px-4"> 
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5"> 
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={logo} alt="Logo" height="500" className="d-block mx-lg-auto img-fluid rounded-4 shadow-lg" loading="lazy" />
                             </div> 
                        <div className="col-lg-6">
                             <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1> 
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p> <div className="d-grid gap-2 d-md-flex justify-content-md-start"> <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> </div> </div> </div> </div>
            </div>
            <ColombiaListar />
        </div>
    );

}