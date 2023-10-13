import { useState, useEffect } from 'react';
import './App.css';


import astro from './images/astro.png'
import { Home } from './pages/Home';


const Introduction = () => {
  return (
     <div className="introduction">
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
  <div className="animation-wrapper">
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>
  <div className="particle particle-4"></div>
</div>
      {showIntroduction && <Introduction />}
      {!showIntroduction &&   <Home/>}




    </div>
  );
}

export default App;
