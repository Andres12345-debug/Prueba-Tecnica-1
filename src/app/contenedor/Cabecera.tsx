import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <div className="container p-2">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-2 textosAmarillo fw-bold jump textos">
            N<span className="textosAzul">ues</span><span className="textosRojos">tra </span>
            <span className="textosRojos">
              <span className="textosAmarillo">Col</span><span className="textosAzul">om</span><span className="textoRojo">bia</span>
            </span>
          </span>
        </NavLink>
        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Inicio</NavLink></li>
          <li className="nav-item"><NavLink to="/geografia" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Geografía</NavLink></li>
          <li className="nav-item"><NavLink to="/mapas" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Mapas</NavLink></li>
          <li className="nav-item"><NavLink to="/regiones" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Regiones</NavLink></li>
        </ul>
      </header>
    </div>
  );
};
