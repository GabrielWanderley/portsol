import './styles.css'

import astro from '../../images/astromon.png'

import { useInView } from 'react-intersection-observer';


export function Habilities() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ativa a animação apenas uma vez
        threshold: 0.1, // A animação será ativada quando pelo menos 10% do elemento estiver visível
    });
    return (
        <div className='cards'>
            <img src={astro} alt='astromon' className='astromon' />
            <div className='card-body'>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h1 className='title-card'>
                                React
                            </h1>
                            <div className='content-rec'>
                                <div className={inView ? 'rec' : ''} ref={ref}></div>
                            </div>
                            <p className='p-card'>quer saber um pouco mais? coloque o mouse em cima</p>
                        </div>
                        <div className="back">
                            <p className='back-p'>Trabalho com React há mais de dois anos, já estou mais habituado e tenho bastante experiencia,</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h1 className='title-card'>
                                TypeScript
                            </h1>
                            <div className='content-rec'>
                                <div className={inView ? 'types' : ''} ref={ref}></div>
                            </div>
                            <p className='p-card'>quer saber um pouco mais? coloque o mouse em cima</p>
                        </div>
                        <div className="back">
                            <p className='back-p'>pratico a mais de 1 ano e meio já desenvolvi habilidades sólidas na criação de aplicações escaláveis</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h1 className='title-card'>
                                Javascript
                            </h1>
                            <div className='content-rec'>
                                <div className={inView ? 'js' : ''} ref={ref}></div>
                            </div>
                            <p className='p-card'>quer saber um pouco mais? coloque o mouse em cima</p>
                        </div>
                        <div className="back">
                            <p className='back-p'>Trabalho com javascript a mais de dois anos, já fiz inúmeros projetos mas não é meu foco no momento </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h1 className='title-card'>
                                Next.js
                            </h1>
                            <div className='content-rec'>
                                <div className={inView ? 'next' : ''} ref={ref}></div>
                            </div>
                            <p className='p-card'>quer saber um pouco mais? coloque o mouse em cima</p>
                        </div>
                        <div className="back">
                            <p className='back-p'>Trabalho com next a pouco mais de um ano, estou aprimorando mais as minhas habilidades nessa tecnologia </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}