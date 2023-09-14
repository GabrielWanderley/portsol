import { useState } from 'react';
import './styles.css'
import '../../styless.css'

import Modal from 'react-modal';



Modal.setAppElement('#root')

export function Sun(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [z, setz] =useState(false)



    const openModal = () => {
      setz(true)
      setModalIsOpen(true)
    }
  
    const closeModal = () => {
      setz(false)
      setModalIsOpen(false);
    }

    return(
    <>        
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo Modal"
        className='modall'
      >
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal...</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
        <div className={`sun-container ${z ? 'z' : ''}`} onClick={openModal}>

        </div>          

      </>
    )
}