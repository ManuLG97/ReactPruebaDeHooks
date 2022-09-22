import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CobraKai from '../img/cobrakai.jpg';
import lacasadeldragon from '../img/lacasadeldragon.jpeg';
import JuegoDeTronos from '../img/juegodetronos.jpg';
import JuegoDelCalamar from '../img/juegodelcalamar.jpeg';
import BreakingBad from '../img/breakingbad.jpg';
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
         <div class="container border rounded bg-light p-4 my-5">
  <div class="row">
    <div class="col titulopelicula">
    <img class="imgportadaserie" src={CobraKai} alt="Serie de cobra kai" />
    <p>Cobra Kai</p>
    </div>
    <div class="col titulopelicula">
    <img class="imgportadaserie" src={lacasadeldragon} alt="Serie de cobra kai" />
    <p>La Casa Del Dragon</p>
    </div>
    <div class="col titulopelicula">
    <img class="imgportadaserie" src={BreakingBad} alt="Serie de cobra kai" />
    <p>Breaking Bad</p>
    </div>
    <div class="row">
    <div class="col titulopelicula">
    <img class="imgportadaserie" src={JuegoDelCalamar} alt="Serie de cobra kai" />
    <p>Juego Del Calamar</p>
    </div>
    <div class="col titulopelicula">
    <img class="imgportadaserie" src={JuegoDeTronos} alt="Serie de cobra kai" />
    <p>Juego De Tronos</p>
    </div>
    </div>
  </div>


  
  


</div>  

</div> 


  );
}

export default Series;