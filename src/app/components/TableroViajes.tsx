import { Sitios } from "../../models/Sitios";
import { Cabecera } from "../contenedor/Cabecera";
import { Sitiosistar } from "./Sitios/SitiosListar";

export const TableroViajes = () => {
    return (
        <div>
            <div className="container">
                <Sitiosistar />
            </div>
        </div>
    );

}