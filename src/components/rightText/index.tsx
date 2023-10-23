import './styles.css'


import { useInView } from 'react-intersection-observer';

interface RT{
  srcone: string,
  srctwo: string,
  title: string,
  text: string,
  id: string,
}
export function RightText( props : RT){
    const { ref, inView } = useInView({
        triggerOnce: true, // Ativa a animação apenas uma vez
        threshold: 0.1, // A animação será ativada quando pelo menos 10% do elemento estiver visível
      });

    return(
       <div className='eu-port' id={props.id}>
        <div className='container-right'>
                <img src={props.srcone} alt='eu' ref={ref}className={`animate__animated img-l animate__slower ${inView ? 'animate__backInLeft' : ''}`}/>
        <div className='text-rigth'>
            <div className='borr'>
          <img className='bor' src={props.srctwo} alt='borrão'/>
            </div>
            <div className='porte'>
            <h1 className='title-port' dangerouslySetInnerHTML={{ __html: props.title }} />
             <h3 className='text-port'> {props.text}</h3>
            </div>

        </div>
        </div>
       </div>
    )
}