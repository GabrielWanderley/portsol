import { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';
import 'animate.css/animate.min.css'

import astro from './images/astro.png'
import { Home } from './pages/Home';


const Introduction = () => {
  return (
     <div className="introduction animate__animated animate__bounceOut animate__delay-5s">
       <div className='inicio2'>
               <h1 className='inicio'>Bem-vindo ao meu <span>Portifolio</span>,<br/> tenha o <span>sistema solar</span>  na palma da sua mão  </h1>
       </div>
       <img src={astro} alt='astro' className='astro'/>
    
     </div>


  );
};




function App() {
  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
  
    setTimeout(() => {
      setShowIntroduction(false);
    }, 6000);
  }, [])




  return (
    <div className="App">
      {showIntroduction && <Introduction />}
      {!showIntroduction &&   <Home/>}




    </div>
  );
}

export default App;
