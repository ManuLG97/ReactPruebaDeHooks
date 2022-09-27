import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import karatekidfoto from '../img/thekaratekid.jpg';
import rockybalboa from '../img/rockybalboa1.jpg';
import elseñordelosanillos from '../img/elseñordelosanillos.jpg';
import IndianaJones from '../img/IndianaJonesLostArk.jpg';
import Footer from '../Footer/Footer.js';
import './PeliculasSeries.css';
import PeliculaVistaIndividual from './PeliculaVistaIndividual/PeliculaVistaIndividual';
import CinderellaMan from '../img/CinderellaManElhombre.jpg';

import useHover from "@react-hook/hover";
import { styles } from "@dash-ui/styles";



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
<div >


     <div class="container border rounded bg-light p-4 my-5">
  <div class="row">
  <div class="col titulopelicula"> 

    <img src={rockybalboa} class="imgportadapeli" alt="LogoRockyBalboa" onClick={GoToPeliculaVista}/>
    <p>Rocky Balboa</p>
  </div>
  
    <div class="col titulopelicula">    
     <img src={karatekidfoto}  class="imgportadapeli"  alt="LogoKarateKid" />
     <p>Karate Kid</p>
         </div>
    <div class="col titulopelicula">
    <img src={elseñordelosanillos}  class="imgportadapeli"  alt="Pelicula 1 del Señor de los anillos" />
    <p >El señor de los anillos</p>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="col titulopelicula">
    <img src={IndianaJones}  class="imgportadapeli"  alt="Pelicula 1 del Señor de los anillos" />
    <p>Indiana Jones</p>
    </div>
    <div class="col titulopelicula">
    <img src={CinderellaMan}  class="imgportadapeli"  alt="Pelicula de Cinderella Mans" />
    <p>Cinderella Man</p>
    </div>

</div>
</div>
</div>

  );
  
}




export default Peliculas;