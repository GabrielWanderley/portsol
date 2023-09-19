import { useState } from 'react';
import './styles.css'
import '../../styless.css'

import Modal from 'react-modal';



Modal.setAppElement('#root')

export function SolarSystem(){
    const [modal1IsOpen, setModal1IsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);
    const [modal4IsOpen, setModal4IsOpen] = useState(false);
    const [modal5IsOpen, setModal5IsOpen] = useState(false);
    const [modal6IsOpen, setModal6IsOpen] = useState(false);
    const [modal7IsOpen, setModal7IsOpen] = useState(false);
    const [modal8IsOpen, setModal8IsOpen] = useState(false);
    const [modal9IsOpen, setModal9IsOpen] = useState(false);


    const [z, setz] =useState(false)



    function openModal1 (){
      setz(true)
      setModal1IsOpen(true)
    }
  
    const closeModal1 = () => {
      setz(false)
      setModal1IsOpen(false);
    }
    function openz  (){
        setz(true)
    }

    function openModal2 (){
        setz(true)
        setModal2IsOpen(true)
      }
    
      const closeModal2 = () => {
        setz(false)
        setModal2IsOpen(false);
      }

      function openModal3 (){
        setz(true)
        setModal3IsOpen(true)
      }
    
      const closeModal3 = () => {
        setz(false)
        setModal3IsOpen(false);
      }


      function openModal4 (){
        setz(true)
        setModal4IsOpen(true)
      }
    
      const closeModal4 = () => {
        setz(false)
        setModal4IsOpen(false);
      }

      function openModal5 (){
        setz(true)
        setModal5IsOpen(true)
      }
    
      const closeModal5 = () => {
        setz(false)
        setModal5IsOpen(false);
      }

      
      function openModal6 (){
        setz(true)
        setModal6IsOpen(true)
      }
    
      const closeModal6 = () => {
        setz(false)
        setModal6IsOpen(false);
      }


            
      function openModal7 (){
        setz(true)
        setModal7IsOpen(true)
      }
    
      const closeModal7 = () => {
        setz(false)
        setModal7IsOpen(false);
      }

        function openModal8 (){
        setz(true)
        setModal8IsOpen(true)
      }
    
      const closeModal8 = () => {
        setz(false)
        setModal8IsOpen(false);
      }

      function openModal9 (){
        setz(true)
        setModal9IsOpen(true)
      }
    
      const closeModal9 = () => {
        setz(false)
        setModal9IsOpen(false);
      }

return(
    <>        
    <Modal
        isOpen={modal1IsOpen}
        onRequestClose={closeModal1}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>solll</p>
        <button onClick={closeModal1}>Fechar</button>
      </Modal>
        <div className={`sun-container ${z ? 'z' : ''}`} onClick={()=>{openModal1(); openz();}}>

        </div>      




        <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>mercurio</p>
        <button onClick={closeModal2}>Fechar</button>
      </Modal>

        <div className={`mercury-outline ${z ? 'z' : ''}`} onClick={()=>{openModal2(); openz();}}>
            <div className='mercury'>
                 
            </div>
        </div>




        <Modal
        isOpen={modal3IsOpen}
        onRequestClose={closeModal3}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>venus</p>
        <button onClick={closeModal3}>Fechar</button>
      </Modal>
        <div className={`venus-outline ${z ? 'z' : ''}`} onClick={()=>{openModal3(); openz();}}>
                <div className="venus">

                </div>
            </div>



     <Modal
        isOpen={modal4IsOpen}
        onRequestClose={closeModal4}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>terra</p>
        <button onClick={closeModal4}>Fechar</button>
      </Modal>

            <div className={`earth-outline ${z ? 'z' : ''}`} onClick={()=>{openModal4(); openz();}}>
            <div className='earth'>
                <div className='earth-circle'>
                    <div className='earth-inner'>

                    </div>
                </div>
            </div>
        </div>


        <Modal
        isOpen={modal5IsOpen}
        onRequestClose={closeModal5}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>marte</p>
        <button onClick={closeModal5}>Fechar</button>
      </Modal>

        <div className={`mars-outline ${z ? 'z' : ''}`} onClick={()=>{openModal5(); openz();}}>
                <div className="mars">

                </div>
            </div>


            <Modal
        isOpen={modal6IsOpen}
        onRequestClose={closeModal6}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>jupiter</p>
        <button onClick={closeModal6}>Fechar</button>
      </Modal>

            <div className={`jupiter-outline ${z ? 'z' : ''}`} onClick={()=>{openModal6(); openz();}}>
                <div className="jupiter">

                </div>
            </div>


      <Modal
        isOpen={modal7IsOpen}
        onRequestClose={closeModal7}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>saturn</p>
        <button onClick={closeModal7}>Fechar</button>
      </Modal>
            <div className={`saturn-outline ${z ? 'z' : ''}`} onClick={()=>{openModal7(); openz();}}>
                <div className="saturn">

                </div>
            </div>

            <Modal
        className='modall'
        isOpen={modal8IsOpen}
        onRequestClose={closeModal8}
        contentLabel="Exemplo Modal"
      >
        <h2>Título do Modal</h2>
        <p>uranus</p>
        <button onClick={closeModal8}>Fechar</button>
      </Modal>
            <div className={`uranus-outline ${z ? 'z' : ''}`} onClick={()=>{openModal8(); openz();}}>
                                <div className="uranus" >
 
                </div>
            </div>

      <Modal
        isOpen={modal9IsOpen}
        onRequestClose={closeModal9}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal...</p>
        <button onClick={closeModal9}>Fechar</button>
      </Modal>
            <div className={`neptune-outline ${z ? 'z' : ''}`} onClick={()=>{openModal9(); openz();}}>
                <div className="neptune">


                </div>
            </div>
      </>
    
)

}