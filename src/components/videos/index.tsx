import './styles.css'
import rocket from "../../images/rocket.png"

interface vi{
    video:string;
    titulov:string;
}

export function Videos( props : vi){
  return(
       <div className='video-content'>
        <img src={rocket} alt='rock' className='img-video'/>
        <h1 className='titulo-video'> {props.titulov}</h1>
     <video src={props.video} className='video' controls/>
       </div>
  )
}