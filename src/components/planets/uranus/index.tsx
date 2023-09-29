import './styles.css'
import '../../styless.css'


import Modal from 'react-modal';
import { useState } from 'react';



Modal.setAppElement('#root')
export function Uranus(){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [z, setz] =useState(false)


    const openModal = () => {
        setz(true)
        setModalIsOpen(true);
        
    }
  
    const closeModal = () => {
      setz(false)
      setModalIsOpen(false);
    }
    
    return(
        <div>              
       <Modal
        className='modall'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo Modal"
      >
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal...</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
            <div className={`uranus-outline ${z ? 'z' : ''}`}onClick={openModal}>
                                <div className="uranus" >
 
                </div>
            </div>
        </div>
    )
}