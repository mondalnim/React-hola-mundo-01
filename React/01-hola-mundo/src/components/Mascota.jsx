import { Edad } from "./Edad"
import '../App.css'


const Mascota= ({name, age})=> {
    return (
        <>
        <h3 className= "Mascota">Soy una mascota y me llamo {name}</h3>
        <Edad className= "Mascota" edad={age} />
        </>
    )
}

export default Mascota;