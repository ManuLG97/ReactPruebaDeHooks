import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import rockybalboa from '../../img/rockybalboa1.jpg';
import rockybalboaimg1 from '../../img/slider/1.jpg';
import rockybalboaimg2 from '../../img/slider/2.jpg';
import rockybalboaimg3 from '../../img/slider/3.jpg';
import rockybalboaimg4 from '../../img/slider/4.jpg';
import rockybalboaimg5 from '../../img/slider/5.jpg';
import rockybalboaimg6 from '../../img/slider/6.jpg';
import './PeliculaVistaIndividual.css';


function PeliculaVistaIndividual() {
   let numero = 1;
   let nombrefoto = "rockybalboaimg" + numero;

   let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear"
}
  


return (   
    <div>
    
    <br/>
    <div class="container p-3 my-3  border rounded bg-light">
  <div class="row">
  <div class="col"> 

    <img src={rockybalboa} class="imgportada" alt="LogoRockyBalboa" />
 
  </div>

    <div class="col"><span class="bolder">Pelicula:</span> Rocky Balboa (1976) <br/> <br/>
    <span class="bolder">Plataforma:</span> Youtube,AppleTV <br/> <br/> <span class="bolder">Idiomas:</span> Esp,Eng,Esp(lat) <br/> <br/>  <span class="bolder"> Categoria:</span> Deporte y Drama
    </div>
    <div class="row"> 
    <div class="col">
    <br/><br/>
    <span class="bolder">Descripción: </span> Rocky es una película estadounidense de 1976 escrita y protagonizada por Sylvester Stallone 
    y dirigida por John G. Avildsen. La historia narra la búsqueda del sueño americano por parte de Rocky Balboa, un italoestadounidense de clase
     baja que se dedica a cobrar los créditos de un prestamista de Filadelfia. 
     Aunque tiene talento para el boxeo, le falta motivación, pero la encuentra
      ante la oportunidad única de combatir por el título de los pesos pesados
       y por el amor de una mujer. El reparto de la película se completa con Talia
       Shire como Adriane Pennino, Burt Young como Paulie (el hermano de Adriane),
        Burgess Meredith como Mickey Goldmill (su entrenador) y Carl Weathers como
        Apollo Creed, el campeón mundial y rival de Rocky. <br/> <br/>
    </div>

    </div>
   </div>
   <br/>
   <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" src={rockybalboaimg1} />
                    </div>
                   
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" src={rockybalboaimg2} />
                    </div>
                    </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" src={rockybalboaimg3} />
                    </div>
                  
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" src={rockybalboaimg4} />
                    </div>
                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" src={rockybalboaimg5} />
                    </div>
                    
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img class="imgdelapelicula" src={rockybalboaimg6} />
                    </div>
                    
                </div>
            </div>
        </Slider>
        <br/>
   </div>
   </div>
  );
}

export default PeliculaVistaIndividual;