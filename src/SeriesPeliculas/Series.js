import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CobraKai from '../img/cobrakai.jpg';
import './PeliculasSeries.css';

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
         <div class="container p-3 my-3 border">
  <div class="row">
    <div class="col">
    <img src={CobraKai} alt="Serie de cobra kai" />
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