import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PeliculasSeries.css';
import Footer from '../Footer/Footer.js';

function Series() {
      
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
    
return (
    <div>
    
         <br/>    
         <div class="container">
  <div class="row">
    <div class="col">
      COBRA KAI
    </div>
    <div class="col">
     EL JUEGO DEL CALAMAR
         </div>
    <div class="col">
      STRANGER THINGS
    </div>
  </div>






</div>  

</div> 


  );
}

export default Series;