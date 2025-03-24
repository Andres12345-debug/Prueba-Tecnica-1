import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Cabecera } from "./app/contenedor/Cabecera";
import { ToastContainer } from 'react-toastify';
import { RuteoPrincipal } from "./routes/RuteoPrincipal";

const cargarComponente = ()=>{
  return(
  <div className='d-flex justify-content-center'>
     <div className='mt-3'>
       <span className='spinner-grow-sm fs-4 fw-bold text-danger'></span>
       <br/>
       <span className='text-center fst-italic fs-3 text-primary'>Cargando ...</span>
     </div>
   </div>
  );
 }
 
 function App() {
   return (
     <BrowserRouter>
     <ToastContainer/>
     <Cabecera></Cabecera>
          <Suspense fallback={cargarComponente()}>
     <RuteoPrincipal/>
     </Suspense>     
     </BrowserRouter>    
   );
 }
 
 export default App;
 