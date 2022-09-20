import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import karatekidfoto from '../img/thekaratekid.jpg';
import rockybalboa from '../img/rockybalboa1.jpg';
import elseñordelosanillos from '../img/elseñordelosanillos.jpg';
import IndianaJones from '../img/IndianaJonesLostArk.jpg';
import Footer from '../Footer/Footer.js';
import './PeliculasSeries.css';
import PeliculaVistaIndividual from './PeliculaVistaIndividual/PeliculaVistaIndividual'

function Peliculas() {
      
  const navigate = useNavigate();

  const GoToSeries = () => {
      navigate('/Series', {
          replace: true
      });
    }

  

    const GoToPeliculaVista = () => {
        navigate('/PeliculaVistaIndividual', {
            replace: true
        });
      }
    
return (   
<div>
    
     <br/>
     <div class="container p-3 my-3 border">
  <div class="row">
  <div class="col"> 

    <img src={rockybalboa} class="imgportadapeli" alt="LogoRockyBalboa" onClick={GoToPeliculaVista}/>
 
  </div>
  
    <div class="col">    
     <img src={karatekidfoto}  class="imgportadapeli"  alt="LogoKarateKid" />
         </div>
    <div class="col">
    <img src={elseñordelosanillos}  class="imgportadapeli"  alt="Pelicula 1 del Señor de los anillos" />
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
    <img src={IndianaJones}  class="imgportadapeli"  alt="Pelicula 1 del Señor de los anillos" />
    </div>
    <div class="col">
     SUPERSALIDOS
    </div>
    <div class="col">
      NOCHE DE MIEDO
    </div>

</div>
</div>
</div>
  );
}

export default Peliculas;