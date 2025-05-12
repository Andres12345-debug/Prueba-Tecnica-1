import { Sitios } from "../../models/Sitios";
import { Cabecera } from "../contenedor/Cabecera";
import { DepartamentoListar } from "../components/Departamentos/DepartamentosListar";
import { RegionesListar } from "../components/Regiones/RegionesListar";
import { Sitiosistar } from "../components/Sitios/SitiosListar";

export const TableroGeografia = () => {
    return (
        <div className="container">
            <RegionesListar />
            <DepartamentoListar />
        </div>
    );

}