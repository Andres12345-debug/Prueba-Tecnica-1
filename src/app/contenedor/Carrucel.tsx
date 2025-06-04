import React from 'react';
import logo from '../../assets/Img/Contenidos/logoColombia.svg';

export const Carrucel = () => {
  return (
    <div className="container my-5 border rounded-4 shadow-lg">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} className="d-block w-100" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="Logo Colombia" />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="Imagen 2" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
