import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
import { Error } from "../app/shared/Error";
import { TableroInicial } from '../app/pages/TableroInicial';
import { RegionesListar } from '../app/components/Regiones/RegionesListar';
import { TableroGeografia } from '../app/pages/TableroGeografia';
import { MapasListar } from '../app/components/Mapas/MapasListar';

const LazyBienvenida = lazy(()=>import('../app/pages/TableroInicial').then(() => ({default:  TableroInicial})));
const LazyRegiones = lazy(()=>import('../app/components/Regiones/RegionesListar').then(() => ({default:  RegionesListar})));
const LazyGeografia = lazy(()=>import('../app/pages/TableroGeografia').then(() => ({default:  TableroGeografia})));
const LazyMapas = lazy(()=>import('../app/components/Mapas/MapasListar').then(() => ({default:  MapasListar})));
const LazyError = lazy(()=>import('../app/shared/Error').then(() => ({default:Error})));


export const RuteoPrincipal = () =>{
    return(
        <Routes>
            <Route path="/bienvenidaUsuario" element={<LazyBienvenida />} />
            <Route path="/regiones" element={<LazyRegiones />} />
            <Route path="/geografia" element={<LazyGeografia />} />
            <Route path="/mapas" element={<LazyMapas />} />

            {/*********OBLIGATORIAS********* */}
            <Route path="/" element={<LazyBienvenida/>}></Route>
            <Route path="*" element={<LazyError/>}></Route>

        </Routes>
    )
}