import { useState } from 'react';
import './styles.css'
import Modal from 'react-modal';



Modal.setAppElement('#root')


export function Saturn(){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
    }

    return(
        <div>
            <div className="saturn-outline">
                <div className="saturn"onClick={openModal}>
          <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo Modal"
      >
        <h2>Título do Modal</h2>
        <p>Conteúdo do modal...</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
                    <p className='p-saturn'>
                        Saturn
                    </p>
                </div>
            </div>
        </div>
    )
}