import { useState } from "react";
import './buscarDatos.css';
function BuscarDato({ funcionTraerDato, openModal}) {
    const [dataJugador, setJugador] = useState("");
    const [caracteristicaJugador, setCaracteristicaJugador] = useState("");

    const cambiarOption = e => {
        setJugador(e.target.value);
    }
    const cambiarOption2 = e => {
        setCaracteristicaJugador(e.target.value);
    }
    
    function doble() {
        funcionTraerDato(dataJugador,caracteristicaJugador);
        openModal(true)

        
    }
    
    return (
        <>
        <div className="container">
            <form className="form-select" onClick={(e) => e.preventDefault()}>
            
                <select name="Jugadores" onChange={cambiarOption}>

                    <option value="">Seleccionar</option>

                    <option value="Jokic">Jokic</option>

                    <option value="JamesL">James</option>

                    <option value="PaulC">Paul</option>

                </select>
                
                <button className="button-mostrar" onClick={() => dataJugador && funcionTraerDato(dataJugador,caracteristicaJugador)}>Buscar</button>
            </form>
            <form className="form-select2" onClick={(e) => e.preventDefault()}>
                <div>
                 <select name="Jugadores" onChange={cambiarOption2}>

                    <option value="">Seleccionar</option>

                    <option value="Asistencias">Asistencias</option>

                    <option value="Puntos">Puntos</option>

                    <option value="Rebotes">Rebotes</option>

                </select> 
              
                <button className="button-mostrar" onClick={(caracteristicaJugador && dataJugador) && doble}>Promedio</button>
                </div>

          </form>

          </div>
        </>
    )
}


export default BuscarDato;