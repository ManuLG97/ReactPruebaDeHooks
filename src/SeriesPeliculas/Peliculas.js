import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import karatekidfoto from '../img/thekaratekid.jpg';
import rockybalboa from '../img/rockybalboa1.jpg';
import elseñordelosanillos from '../img/elseñordelosanillos.jpg';
import Footer from '../Footer/Footer.js';
import './PeliculasSeries.css';

function Peliculas() {
      
  const navigate = useNavigate();

  const GoToSeries = () => {
      navigate('/Series', {
          replace: true
      });
    }

  const GoToPeliculas = () => {
      navigate('/Peliculas', {
          replace: true
        });  
      }
    
return (   <div>
    
     <br/>
     <div class="container">
  <div class="row">
    <div class="col">
    <img src={rockybalboa} alt="LogoRockyBalboa" />
    </div>
    <div class="col">    
     <img src={karatekidfoto} alt="LogoKarateKid" />
         </div>
    <div class="col">
    <img src={elseñordelosanillos} alt="Pelicula 1 del Señor de los anillos" />
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
      INDIANA JONES
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