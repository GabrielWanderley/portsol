import phone from "../../images/phone.png"

import './styles.css'

export function Contacts(){
    return(
        <div className="contatos-container">
            <img  src={phone} alt="phone" className="phone"/>
            <h1>Contatos</h1>
          <ul className='links'>
            <li><a href="gabriewanderley08gmail.com" >gabriewanderley08gmail.com</a></li>
            <li><a href='https://www.linkedin.com/in/gabriel-wanderley-600b24234/'>Linkedin</a></li>
            <li><a href='https://www.instagram.com/gabriel.wanderley/'>Instagram</a></li>                        
            <li><a href="https://api.whatsapp.com/send?phone=81995037414">Whatsapp</a></li>
            <li><p>(81)995037414</p></li>
            </ul>
        </div>
    )
}