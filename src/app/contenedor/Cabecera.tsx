export const Cabecera = () => {

  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-2 textosAmarillo fw-bold jump textos">N<span className="textosAzul">ues</span><span className="textosRojos">tra </span><span className="textosRojos"><span className="textosAmarillo">Col</span><span className="textosAzul">om</span><span className="textoRojo">bia</span></span></span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Inicio</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Quienes Somos</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Presidentes</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Regiones</a></li>
      </ul>
    </header>
  </div>
  )
}