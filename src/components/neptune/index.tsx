import './styles.css'

import Modal from 'react-modal';
import { useState } from 'react';


Modal.setAppElement('#root')
export function Neptune(){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }
  
    const closeModal = () => {
      console.log("close")
      setModalIsOpen(false);
    }
    return(
        <div>
            <div className="neptune-outline">
                <div className="neptune"onClick={openModal}>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo Modal"
      >
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal...</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
                    <p className='p-neptune'>
                        
                    </p>
                </div>
            </div>
        </div>
    )
}