import './styles.css'

import { useInView } from 'react-intersection-observer';

interface LT{
    srcone: string,
    srctwo: string,
    title: string,
    text: string,
  }

export function LeftText(props : LT){
    const { ref, inView } = useInView({
        triggerOnce: true, // Ativa a animação apenas uma vez
        threshold: 0.1, // A animação será ativada quando pelo menos 10% do elemento estiver visível
      });
    return(
   
       <div className='eu-lport'>
        <div className='WidthLeft'>
        <div className='container-left'>
        <div className='text-left'>
            <div className='borr-l'>
          <img className='bor-l' src={props.srctwo} alt='borrão'/>
            </div>
            <div className='porte-l'>
            <h1 className='title-port-l' dangerouslySetInnerHTML={{ __html: props.title }} />
             <h3 className='text-port-l'> {props.text}</h3>
            </div>
        </div>
                 <img src={props.srcone} alt='eu' ref={ref}className={`animate__animated img-r animate__slower ${inView ? 'animate__backInRight' : ''}`}/>
        </div>  
        </div>     
       </div>
       

    )
}