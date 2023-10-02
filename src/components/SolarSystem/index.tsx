import { useState } from 'react';
import './styles.css'
import '../../styless.css'

import close from "../../images/icon.png"
import eu from "../../images/unnamedd.jpg"
import mim from "../../images/mim.png"
import Skills from "../../images/skills.png"
import avat from '../../images/avatar.svg'
import financer from '../../images/financer.png'
import facul from '../../images/faculdade.png'
import notss from '../../images/notsss.png'
import exp from '../../images/projects.png'
import cont from '../../images/contact.png'

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
    <div className='pf'>        
    <Modal
        isOpen={modal1IsOpen}
        onRequestClose={closeModal1}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <img src={close} alt='close' onClick={closeModal1} className='close'/>
        <img src={eu} alt='eu' className='eu'/>
        <h2 className='ola'>ola a todos! Eu sou <span> Gabriel wanderley </span></h2>
        <h3 className='work'>Desenvolvedor web / Analista e desenvolvedor de sistemas</h3>
        <p className='resto'>Sou programador e faço faculdade de analise e desenvolvimento de sistemas, gosto das melhores tecnologias, tenho bastante experiencia com React, pratico bastante e sigo evoluindo minhas habilidades,para saber um pouco mais</p>
        <button className='modal-button'>clique aqui</button>
      </Modal>
        <div className={`sun-container ${z ? 'z' : ''}`} onClick={()=>{openModal1(); openz();}}>

        </div>      




        <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        contentLabel="Exemplo Modal"
        className='modall'
      >
       <img src={close} alt='close' onClick={closeModal2} className='close'/>
       <img src={mim} alt='mim' className='eu'/>

        <h2 className='pouco'><span>Um pouco sobre mim</span></h2>
        <h3 className='work'>Desenvolvedor web</h3>
        <p className='resto'>gosto de empreender e de trabalhar em equipe, atualmente estou focando na faculdade enquanto faço alguns projetos e estudo alguns cursos, meu nivel atual de ingles é intermediario, para saber um pouco mais </p>
        <button className='modal-button'>clique aqui</button>

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
       <img src={close} alt='close' onClick={closeModal3} className='close'/>
        <img src={financer} alt='mim' className='eu'/> 
        <h2 className='pouco'> <span>Financer</span> </h2>
        <h3 className='work'>Projeto</h3>
        <p className='resto'>Foi um projeto que desenvolvi, com o intuito de fazer sua organizção financeira, nele podera calcular seus gatos e lucros mensais, para saber um pouco mais</p>
        <button className='modal-button'>clique aqui</button>
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
       <img src={close} alt='close' onClick={closeModal4} className='close'/>
        <img src={facul} alt='mim' className='eu'/>  
        <h2 className='pouco'> <span>Faculdade</span> </h2>
        <h3 className='work'>Analise e desenvolvimento de sistemas</h3>
        <p className='resto'>A faculdade está impulsionando meus estudos, tenho aulas de programação a sistemas em si, aprendo da estrutura de um computador, até aos bits e como entendelos, para saber um pouco mais</p>
        <button className='modal-button'>clique aqui</button>
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
       <img src={close} alt='close' onClick={closeModal5} className='close'/>
       <img src={Skills} alt='mim' className='eu'/>
       <h1 className='pouco'><span>Habilidades</span></h1>
       <h3 className='work'>O quanto eu domino de</h3>
       <h2>React</h2>
       <div className='content-re'>
        <div className='re'></div>
       </div>
       <h2>Typescript</h2>
       <div className='content-re'>
        <div className='type'></div>
       </div>
         <p className='mt'>Para saber um pouco mais</p>
        <button className='modal-button'><span>clique aqui</span></button> 

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
       <img src={close} alt='close' onClick={closeModal6} className='close'/>
        <img src={exp} alt='mim' className='eu'/> 
        <h2 className='pouco'> <span>Experiencias</span> </h2>
        <h3 className='work'>Projetos</h3>
        <p className='resto'> minha maior fonte de experiencias vem dos meus projetos, em que trabalho com diversas tecnoligias e me aperfeiçoou junto com eles, para saber um pouco mais</p>
        <button className='modal-button'>clique aqui</button>
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
       <img src={close} alt='close' onClick={closeModal7} className='close'/>
       <img src={notss} alt='mim' className='eu'/> 
        <h2 className='pouco'> <span>Notss</span> </h2>
        <h3 className='work'>Projeto</h3>
        <p className='resto'> Notss é um projeto onde você pode fazer anotações e pode editalas, da forma que desejar melhor, para saber um pouco mais</p>
        <button className='modal-button'>clique aqui</button>
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
      <img src={close} alt='close' onClick={closeModal8} className='close'/>
       <img src={avat}alt='mim' className='eu'/>
       <h2 className='pouco'><span>Ig-news</span></h2>
        <h3 className='work'>Projeto</h3>
        <p className='resto'>O Ig-news é um projeto de um blog de noticias, onde o usuario tem que faer um pagamento de para boter ter acesso as postagens, que vem do meu banco de dados, para saber um pouco mais  </p>
        <button className='modal-button'>clique aqui</button>
        
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
      <img src={close} alt='close' onClick={closeModal9} className='close'/>
        <img src={cont}alt='mim' className='eu'/> 
       <h2 className='pouco'><span>Contatos</span></h2>
        <h3 className='work'>emails, links e numeros</h3>
        <ul className='links'>
           <li><a href="gabriewanderley08gmail.com" >gabriewanderley08gmail.com</a></li>
           <li><a href='https://www.linkedin.com/in/gabriel-wanderley-600b24234/'>Linkedin</a></li>
           <li><a href='https://www.instagram.com/gabriel.wanderley/'>Instagram</a></li>
           <li><p>(81)995037414</p></li>
           <li><a href="https://api.whatsapp.com/send?phone=81995037414">Whatsapp</a></li>
        </ul>

        <button className='modal-button'>clique aqui</button>
      </Modal>
            <div className={`neptune-outline ${z ? 'z' : ''}`} onClick={()=>{openModal9(); openz();}}>
                <div className="neptune">


                </div>
            </div>
      </div>
    
)

}