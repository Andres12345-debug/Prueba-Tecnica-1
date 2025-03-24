import { lazy } from 'react';
import { Route, Routes } from "react-router-dom"
import { Error } from "../app/shared/Error";
import {  TableroViajes } from '../app/components/TableroViajes';
import { TableroInicial } from '../app/components/TableroInicial';

const LazyBienvenida = lazy(()=>import('../app/components/TableroInicial').then(() => ({default:  TableroInicial})));
const LazyViajes = lazy(()=>import('../app/components/TableroViajes').then(() => ({default:  TableroViajes})));

const LazyError = lazy(()=>import('../app/shared/Error').then(() => ({default:Error})));

export const RuteoPrincipal = () =>{
    return(
        <Routes>
            
            <Route path="/bienvenidaUsuario" element={<LazyBienvenida />} />
            <Route path="/viaja" element={<LazyViajes />} />

            {/*********OBLIGATORIAS********* */}
            <Route path="/" element={<LazyBienvenida/>}></Route>
            <Route path="*" element={<LazyError/>}></Route>

        </Routes>
    )
}