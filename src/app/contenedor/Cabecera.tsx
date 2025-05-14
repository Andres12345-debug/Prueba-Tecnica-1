import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <div className="container p-2">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom rounded-4 shadow-lg colorGris">
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <svg className="bi bi-8-square me-2" width="40" height="32"></svg>
          <span className="fs-3 fw-bold jump titulo">
              <span className="textosAmarillo">Colombia</span>
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
