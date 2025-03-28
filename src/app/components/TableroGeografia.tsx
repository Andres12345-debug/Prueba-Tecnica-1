import { Sitios } from "../../models/Sitios";
import { Cabecera } from "../contenedor/Cabecera";
import { DepartamentoListar } from "./Departamentos/DepartamentosListar";
import { RegionesListar } from "./Regiones/RegionesListar";
import { Sitiosistar } from "./Sitios/SitiosListar";

export const TableroGeografia = () => {
    return (
        <div className="container">
            <RegionesListar />
            <DepartamentoListar />
        </div>
    );

}