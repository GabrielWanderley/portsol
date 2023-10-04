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

import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





export function SolarSystem() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);
  const [modal5IsOpen, setModal5IsOpen] = useState(false);
  const [modal6IsOpen, setModal6IsOpen] = useState(false);
  const [modal7IsOpen, setModal7IsOpen] = useState(false);
  const [modal8IsOpen, setModal8IsOpen] = useState(false);
  const [modal9IsOpen, setModal9IsOpen] = useState(false);


  function openModal1() {
    setModal1IsOpen(true)
  }

  const closeModal1 = () => {
    setModal1IsOpen(false);
  }


  function openModal2() {
    setModal2IsOpen(true)
  }

  const closeModal2 = () => {
    setModal2IsOpen(false);
  }

  function openModal3() {

    setModal3IsOpen(true)
  }

  const closeModal3 = () => {
    setModal3IsOpen(false);
  }


  function openModal4() {
    setModal4IsOpen(true)
  }

  const closeModal4 = () => {
    setModal4IsOpen(false);
  }

  function openModal5() {
    setModal5IsOpen(true)
  }

  const closeModal5 = () => {
    setModal5IsOpen(false);
  }


  function openModal6() {
    setModal6IsOpen(true)
  }

  const closeModal6 = () => {
    setModal6IsOpen(false);
  }



  function openModal7() {
    setModal7IsOpen(true)
  }

  const closeModal7 = () => {
    setModal7IsOpen(false);
  }

  function openModal8() {
    setModal8IsOpen(true)
  }

  const closeModal8 = () => {
    setModal8IsOpen(false);
  }

  function openModal9() {
    setModal9IsOpen(true)
  }

  const closeModal9 = () => {
    setModal9IsOpen(false);
  }

  return (
    <div>

      <Modal
        onHide={closeModal1}
        show={modal1IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal1} className='close' />
          <img src={eu} alt='eu' className='bo-eu' />
          <h2 className='bo-ola'>ola a todos! Eu sou <span> Gabriel wanderley </span></h2>
          <h3 className='bo-work'>Desenvolvedor web / Analista e desenvolvedor de sistemas</h3>
          <p className='bo-resto'>Sou programador e faço faculdade de analise e desenvolvimento de sistemas, gosto das melhores tecnologias, tenho bastante experiencia com React, pratico bastante e sigo evoluindo minhas habilidades,para saber um pouco mais</p>
          <button className='modal-button' onClick={closeModal1}>clique aqui</button>
        </Modal.Body>

      </Modal>
      <div className="sun-container" onClick={openModal1}>

      </div>




      <Modal
        onHide={closeModal2}
        show={modal2IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal2} className='close' />
          <img src={mim} alt='mim' className='bo-eu' />

          <h2 className='bo-pouco'><span>Um pouco sobre mim</span></h2>
          <h3 className='bo-work'>Desenvolvedor web</h3>
          <p className='bo-resto'>gosto de empreender e de trabalhar em equipe, atualmente estou focando na faculdade enquanto faço alguns projetos e estudo alguns cursos, meu nivel atual de ingles é intermediario, para saber um pouco mais </p>
          <button className='modal-button' onClick={closeModal2}>clique aqui</button>
        </Modal.Body>

      </Modal>

      <div className="mercury-outline" onClick={openModal2}>
        <div className='mercury'>

        </div>
      </div>




      <Modal
        onHide={closeModal3}
        show={modal3IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal3} className='close' />
          <img src={financer} alt='mim' className='bo-eu' />
          <h2 className='bo-pouco'> <span>Financer</span> </h2>
          <h3 className='bo-work'>Projeto</h3>
          <p className='bo-resto'>Foi um projeto que desenvolvi, com o intuito de fazer sua organizção financeira, nele podera calcular seus gatos e lucros mensais, para saber um pouco mais</p>
          <button className='modal-button' onClick={closeModal3}>clique aqui</button>
        </Modal.Body>

      </Modal>
      <div className="venus-outline" onClick={openModal3}>
        <div className="venus">

        </div>
      </div>



      <Modal
        onHide={closeModal4}
        show={modal4IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal4} className='close' />
          <img src={facul} alt='mim' className='bo-eu' />
          <h2 className='bo-pouco'> <span>Faculdade</span> </h2>
          <h3 className='bo-work'>Analise e desenvolvimento de sistemas</h3>
          <p className='bo-resto'>A faculdade está impulsionando meus estudos, tenho aulas de programação a sistemas em si, aprendo da estrutura de um computador, até aos bits e como entendelos, para saber um pouco mais</p>
          <button className='modal-button' onClick={closeModal4}>clique aqui</button>
        </Modal.Body>

      </Modal>

      <div className="earth-outline" onClick={openModal4}>
        <div className='earth'>
          <div className='earth-circle'>
            <div className='earth-inner'>

            </div>
          </div>
        </div>
      </div>


      <Modal
        onHide={closeModal5}
        show={modal5IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>

          <img src={close} alt='close' onClick={closeModal5} className='close' />
          <img src={Skills} alt='mim' className='bo-eu' />
          <h1 className='bo-pouco'><span>Habilidades</span></h1>
          <h3 className='bo-work'>O quanto eu domino de</h3>
          <h2>React</h2>
          <div className='content-re'>
            <div className='re'></div>
          </div>
          <h2>Typescript</h2>
          <div className='content-re'>
            <div className='type'></div>
          </div>
          <p className='mt'>Para saber um pouco mais</p>
          <button className='modal-button' onClick={closeModal5}>clique aqui</button>
        </Modal.Body>

      </Modal>

      <div className="mars-outline" onClick={openModal5}>
        <div className="mars">

        </div>
      </div>


      <Modal
        onHide={closeModal6}
        show={modal6IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal6} className='close' />
          <img src={exp} alt='mim' className='eux' />
          <h2 className='bo-pouco'> <span>Experiencias</span> </h2>
          <h3 className='bo-work'>Projetos</h3>
          <p className='bo-resto'> minha maior fonte de experiencias vem dos meus projetos, em que trabalho com diversas tecnoligias e me aperfeiçoou junto com eles, para saber um pouco mais</p>
          <button className='modal-button' onClick={closeModal6}>clique aqui</button>
        </Modal.Body>

      </Modal>

      <div className="jupiter-outline" onClick={openModal6}>
        <div className="jupiter">

        </div>
      </div>


      <Modal
        onHide={closeModal7}
        show={modal7IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal7} className='close' />
          <img src={notss} alt='mim' className='bo-eu' />
          <h2 className='bo-pouco'> <span>Notss</span> </h2>
          <h3 className='bo-work'>Projeto</h3>
          <p className='bo-resto'> Notss é um projeto onde você pode fazer anotações e pode editalas, da forma que desejar melhor, para saber um pouco mais</p>
          <button className='modal-button' onClick={closeModal7}>clique aqui</button>
        </Modal.Body>

      </Modal>
      <div className="saturn-outline" onClick={openModal7}>
        <div className="saturn">

        </div>
      </div>


      <Modal
        onHide={closeModal8}
        show={modal8IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal8} className='close' />
          <img src={avat} alt='mim' className='bo-eu' />
          <h2 className='bo-pouco'><span>Ig-news</span></h2>
          <h3 className='bo-work'>Projeto</h3>
          <p className='bo-resto'>O Ig-news é um projeto de um blog de noticias, onde o usuario tem que fazer um pagamento de para boter ter acesso as postagens, que vem do meu banco de dados, para saber um pouco mais  </p>
          <button className='modal-button' onClick={closeModal8}>clique aqui</button>
        </Modal.Body>

      </Modal>
      <div className='uranus-outline' onClick={openModal8}>
        <div className="uranus" >

        </div>
      </div>

      <Modal
        onHide={closeModal9}
        show={modal9IsOpen}
        className='modalb'
      >
        <Modal.Body className='modal-bo'>
          <img src={close} alt='close' onClick={closeModal9} className='close' />
          <img src={cont} alt='mim' className='bo-eu' />
          <h2 className='bo-pouco'><span>Contatos</span></h2>
          <h3 className='bo-work'>emails, links e numeros</h3>
          <ul className='links'>
            <li><a href="gabriewanderley08gmail.com" >gabriewanderley08gmail.com</a></li>
            <li><a href='https://www.linkedin.com/in/gabriel-wanderley-600b24234/'>Linkedin</a></li>
            <li><a href='https://www.instagram.com/gabriel.wanderley/'>Instagram</a></li>
            <li><p>(81)995037414</p></li>
            <li><a href="https://api.whatsapp.com/send?phone=81995037414">Whatsapp</a></li>
          </ul>
          <button className='modal-button' onClick={closeModal9}>clique aqui</button>
        </Modal.Body>

      </Modal>
      <div className="neptune-outline" onClick={openModal9}>
        <div className="neptune">


        </div>
      </div>
    </div>

  )

}