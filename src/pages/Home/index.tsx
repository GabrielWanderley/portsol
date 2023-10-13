import { NavBar } from "../../components/NavBar"
import { SolarSystem } from "../../components/SolarSystem"
import { Port } from "../../components/port"


export function Home(){
    return(
        <div > 
        <NavBar/>
        <SolarSystem/>    
        <Port/>
        </div>
    )
}