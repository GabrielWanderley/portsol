import Saturn from '../../images/saturn.png'
import  venus  from '../../images/venus.png'
import  terra  from '../../images/earth.png'
import  marte from '../../images/mars.png'
import jupiter  from '../../images/jupiter.png'
import  uranus  from '../../images/uranus.png'
import  neptune  from '../../images/neptune.png'


import './styles.css'
import { useState } from 'react'

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



export function NavBar(){
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
        className='modau'
      >
        <img src={close} alt='close' onClick={closeModal1} className='close'/>
        <img src={eu} alt='eu' className='eu'/>
        <h2 className='ola'>ola a todos! Eu sou <span> Gabriel wanderley </span></h2>
        <h3 className='work'>Desenvolvedor web / Analista e desenvolvedor de sistemas</h3>
        <p className='resto'>Sou programador e faço faculdade de analise e desenvolvimento de sistemas, gosto das melhores tecnologias, tenho bastante experiencia com React, pratico bastante e sigo evoluindo minhas habilidades,para saber um pouco mais</p>
        <button className='modal-button'>clique aqui</button>
      </Modal>

          <div className='planets-t' onClick={openModal1}>
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