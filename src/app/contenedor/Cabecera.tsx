import { Link } from "react-router-dom";

export const Cabecera = () => {
  return (
    <div className="container p-2">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-2 textosAmarillo fw-bold jump textos">
            N<span className="textosAzul">ues</span><span className="textosRojos">tra </span>
            <span className="textosRojos">
              <span className="textosAmarillo">Col</span><span className="textosAzul">om</span><span className="textoRojo">bia</span>
            </span>
          </span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link active">Inicio</Link></li>
          <li className="nav-item"><Link to="/viaja" className="nav-link">Viaja Por Colombia</Link></li>
          <li className="nav-item"><Link to="/presidentes" className="nav-link">Presidentes</Link></li>
          <li className="nav-item"><Link to="/regiones" className="nav-link">Regiones</Link></li>
        </ul>
      </header>
    </div>
  );
};
