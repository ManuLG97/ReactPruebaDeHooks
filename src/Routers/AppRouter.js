import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

import Home from '../Home/Home.js';
import Series from '../SeriesPeliculas/Series'
import Peliculas from '../SeriesPeliculas/Peliculas'
import PeliculaVistaIndividual from '../SeriesPeliculas/PeliculaVistaIndividual/PeliculaVistaIndividual'

//Los routers son el mecanísmo del código que irá haciendo el cambio de los componentes, la redirección de los path por decirlo de alguna manera.

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                
            <Route path="/" element={<Home />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/Peliculas" element={<Peliculas />} />  
            <Route path="/PeliculaVistaIndividual" element={<PeliculaVistaIndividual />} />  
               
            </Routes>

        <Footer/>
        </BrowserRouter>
    )
}