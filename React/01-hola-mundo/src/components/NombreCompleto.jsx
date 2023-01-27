import '../App.css'
import { Edad } from './Edad';

export const NombreCompleto = (props) => {
    console.log("props", props);
    return (
      <>
        <h3 className = "Juan">Me llamo {props.name}</h3>
        <Edad edad={props.age}/>
      </>
    )
  }

  //export default NombreCompleto
  