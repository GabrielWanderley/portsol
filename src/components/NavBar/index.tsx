import Saturn from '../../images/saturn.png'
import  venus  from '../../images/venus.png'
import  terra  from '../../images/earth.png'
import  marte from '../../images/mars.png'
import jupiter  from '../../images/jupiter.png'
import  uranus  from '../../images/uranus.png'
import  neptune  from '../../images/neptune.png'


import './styles.css'



export function NavBar(){
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
          <div className='planets-t'>
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