import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';



function Home() {

  
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
    

    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);
    const name = "Manuel López";
  return(
    <div>


 <br/>
 <div>
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(count + 1)}>
   Click here to add 1
 </button> <br/>
 <button onClick={() => setCount(count - 1)}>
   Click here to subtract 1
 </button>
</div>  



</div> 

  );
}

export default Home;