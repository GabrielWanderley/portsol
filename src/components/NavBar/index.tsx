import Saturn from '../../images/saturn.png'
import  venus  from '../../images/venus.png'
import  terra  from '../../images/earth.png'
import  marte from '../../images/mars.png'
import jupiter  from '../../images/jupiter.png'
import  uranus  from '../../images/uranus.png'
import  neptune  from '../../images/neptune.png'



import './styles.css'

import Modal from 'react-modal';
import eu from "../../images/unnamedd.jpg"
import { useState } from 'react'
import close from "../../images/icon.png"







export function NavBar(){
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [z, setz] =useState(false)

function Modal1 (){
  setz(true)
  setModal1IsOpen(true)  

  
}

const closeModal1 = () => {
  setz(false)
  setModal1IsOpen(false);
}


    return(
        <div className='bot'>
          <div className='planets-t'>
            <img src={Saturn} className='imag' alt='saturn'/>
            <p className='text'>Notss</p>
          </div>
          <div className='planets-t'>
            <img src={venus} className='imag' alt='saturn'/>
            <p className='text'>Financer</p>
          </div>
          <div className='planets-t'>
            <img src={terra} className='imag' alt='saturn'/>
            <p className='text'>Faculdade</p>
          </div>
          <div className='planets-t'>
            <img src={marte} className='imag' alt='saturn'/>
            <p className='text'>Habilidades</p>
          </div>
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
          <div className='planets-t' onClick={Modal1}>
            <div className='soll'></div>
            <p className='text'><span>...</span>Eu<span>...</span></p>
          </div>


          <div className='planets-t'>
            <div className='mercuri'></div>
            <p className='text'>Sobre mim</p>
          </div>
          <div className='planets-t'>
            <img src={jupiter} className='imag' alt='saturn'/>
            <p className='text'>Experiencias</p>
          </div>
          <div className='planets-t'>
            <img src={uranus} className='imag' alt='saturn'/>
            <p className='text'>Ig-news</p>
          </div>
          <div className='planets-t'>
            <img src={neptune} className='imag' alt='saturn'/>
            <p className='text'>Contatos</p>
          </div>
        </div>
    )
}