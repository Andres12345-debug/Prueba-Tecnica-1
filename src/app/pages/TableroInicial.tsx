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
import { DatosListar } from "../components/Moneda/DatosListar";
import { Carrucel } from "../contenedor/Carrucel";
import { HoraColombia } from "../components/Hora/Hora";


export const TableroInicial = () => {
    return (
        <div className="container my-5">
            <div className="col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={logo} alt="Logo" height="500" className="d-block mx-lg-auto img-fluid rounded-4 shadow-lg" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="titulo lh-1 mb-3 border-bottom border-primary pb-2">Colombia es una chimba <span className="textosRojos">parce !</span></h1>
                        <p className="descripcion">Colombia es una tierra llena de magia, cultura y gente increíble. Desde los paisajes espectaculares de la Sierra Nevada hasta las vibrantes calles de Medellín, cada rincón tiene su propio encanto.
                            Tenemos una gastronomía brutal—¿quién le dice no a una buena bandeja paisa o a unas empanadas con ají picante? Ni hablar de la música, porque el vallenato, la salsa y el reggaetón nos ponen a bailar en cualquier ocasión. Y lo mejor, la calidez de la gente, que siempre recibe con una sonrisa y un buen parche.
                        </p> <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div>
            </div>
            <ColombiaListar />
            <DatosListar></DatosListar>
            <HoraColombia></HoraColombia>
            <div className="container my-5">
                <Carrucel></Carrucel>
            </div>
        </div>
    );

}