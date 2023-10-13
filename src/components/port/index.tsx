import './styles.css'

import astro from '../../images/astro.png'

import { useEffect, useRef } from 'react'

export function Port(){
    
    return(
        <div className='port'>
            <img src={astro} alt='astro' className='astro-'/>
            <h1 className='h1'>Ola a todos,<br/> bem vindos ao meu <span>Portifolio</span></h1>
            <h3 className='width-p'> Vim aqui para falar um pouco sobre a criação do meu projeto principal. Sempre fui fascinado pelo espaço e decidi incorporar esse interesse no meu projeto. Foi através desse questionamento que decidi criá-lo. Trabalhei e estudei várias tecnologias, incluindo Bootstrap, entre outras, para desenvolvê-lo.</h3>
        </div>
    )
}