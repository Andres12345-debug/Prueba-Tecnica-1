import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
import { Error } from "../app/shared/Error";
import { TableroInicial } from '../app/components/TableroInicial';
import { RegionesListar } from '../app/components/Regiones/RegionesListar';
import { TableroGeografia } from '../app/components/TableroGeografia';

const LazyBienvenida = lazy(()=>import('../app/components/TableroInicial').then(() => ({default:  TableroInicial})));
const LazyRegiones = lazy(()=>import('../app/components/Regiones/RegionesListar').then(() => ({default:  RegionesListar})));
const LazyGeografia = lazy(()=>import('../app/components/TableroGeografia').then(() => ({default:  TableroGeografia})));
const LazyError = lazy(()=>import('../app/shared/Error').then(() => ({default:Error})));

export const RuteoPrincipal = () =>{
    return(
        <Routes>
            <Route path="/bienvenidaUsuario" element={<LazyBienvenida />} />
            <Route path="/regiones" element={<LazyRegiones />} />

            <Route path="/geografia" element={<LazyGeografia />} />

            {/*********OBLIGATORIAS********* */}
            <Route path="/" element={<LazyBienvenida/>}></Route>
            <Route path="*" element={<LazyError/>}></Route>

        </Routes>
    )
}