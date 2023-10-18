import { NavBar } from "../../components/NavBar"
import { SolarSystem } from "../../components/SolarSystem"
import { RightText } from "../../components/rightText"
import { Port } from "../../components/port"
import { LeftText } from "../../components/leftText"
import { Habilities } from "../../components/Habilities"


import eu from '../../images/unnamedd.jpg'
import bor from '../../images/pink.png'
import mim from "../../images/mim.png"
import blue from "../../images/blue.png"
import exp from "../../images/projects.png"
import pla from "../../images/planetss.png"
import facul from "../../images/faculdade.png"
import ig from "../../movies/ig.mov"
import fina from "../../movies/financer.mov"
import nots from "../../images/notsss.png"
import { Videos } from "../../components/videos"
import { Contacts } from "../../components/Contatos"




export function Home(){
    return(
        <div > 
        <NavBar/>
        <SolarSystem/>    
        <Port/>
        <RightText 
        srcone={eu} 
        srctwo={bor} 
        title='Olá a todos eu me chamo <br/> <span>Gabriel wanderley <span/>'
        text='Sou programador e faço faculdade de analise e desenvolvimento de sistemas, gosto das melhores tecnologias, tenho bastante experiencia com React, pratico bastante e sigo evoluindo minhas habilidades com Typescript, além de já ter feitos projetos com o Next e ter uma boa experiencia com Javascript, tenho conhecimento em backend, já trabalhei ultilizando o Prismic como armazenamento e o Fauna como banco de dados, e tenho interesse em aprender muito mais'/>
        <Videos
          titulov="Ig.news"
          video={ig}
        />
        <LeftText
                srcone={mim} 
                srctwo={blue} 
                title='vou falar um pouco <br/> <span> sobre mim <span/>'
                text='Gosto de empreender e de trabalhar em equipe. Atualmente, estou focado na faculdade e participando de alguns projetos. Meu nível atual de inglês é intermediário. Também gosto muito de trabalhar em equipe e de praticar esportes como vôlei e basquete, apesar de não ser tão alto kkkk. Sou dedicado e não desisto de algo até conseguir. Esta imagem faz parte de um projeto que será explicado em breve.'
        />

        <Habilities/>        
        <RightText 
        srcone={exp} 
        srctwo={pla} 
        title='De onde vem minhas <br/> <span> experiencias <span/>'
        text='Minha maior fonte de experiência vem dos meus próprios projetos, onde mergulho de cabeça em um universo de tecnologias diversas. Ao trabalhar com uma gama variada de ferramentas, aprimoro minhas habilidades em cada uma delas, enriquecendo assim minha bagagem profissional.'/>
        <Videos
          titulov="Financer"
          video={fina}
        />
         <LeftText
            srcone={facul} 
            srctwo={bor} 
            title='<span> Analise e desenvolvimento de sistemas<span/>'
            text='A faculdade tem sido uma fonte incrível de aprendizado e está impulsionando meus estudos de maneiras fascinantes. Em minhas aulas de programação e sistemas, mergulho profundamente na essência da computação. Aprendo desde os fundamentos, como a estrutura básica de um computador, até nuances complexas, como a manipulação de bits e sua interpretação.'
        />
        <RightText 
        srcone={nots} 
        srctwo={blue} 
        title=' <span> Notss <span/>'
        text='O Notss é um projeto que permite fazer anotações e editá-las conforme sua preferência. Seja para organizar ideias, planejar projetos ou simplesmente capturar pensamentos espontâneos'/>
        <Contacts/>
        </div>
    )
}