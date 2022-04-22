import { useState } from 'react';
import './App.css';
import BuscarDato from './buscarDatos';
import Modal from './modalProm';


function App() {

  const [caracteristicaValor, setCaracteristicaValor] = useState([])
  const [caracteristicaValor2, setCaracteristicaValor2] = useState("")
  const [nombreJugador, setNombreJugador] = useState("")
  const [abrirModal, setabrirModal] = useState(false)


  const arrayWithCategories = ["Fecha", "EquipoContrario", "Asistencias", "Puntos", "Rebotes", "Minutos"]
  const obtenerDato = (datoJugador, caracteristicaJugador) => {
   
    fetch("/jugadores.json",
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    )

      .then(response => response.json())
      .then(data => {
        const arregloJugador = data.Jugadores.find(item => item.Nombre === datoJugador);

        const arregloCaracteristica = arregloJugador.Partidos;
        const promedioCaracteristica = arregloCaracteristica.map(item => item[caracteristicaJugador]);
        // console.log(promedioCaracteristica.reduce((a,b) => a+b,0))
        setNombreJugador(arregloJugador)
        setCaracteristicaValor(arregloCaracteristica)
        setCaracteristicaValor2(promedioCaracteristica)
      });

  }


  return (
    <>
      <div className='contenedor'>

        <BuscarDato funcionTraerDato={obtenerDato} openModal={setabrirModal} />

       <div className='contenedor-tabla'>
         
          <table className='table'>
            <div className='foto' >
              <tr className="nombre">{<img src={nombreJugador.Foto} style={{ width: '400px' }} />}</tr>

              <div>
                <tr className='detalle-jugador'><td>{nombreJugador.Nombre}</td>
                  <td>{(nombreJugador.Edad) && <tr className='edad'>{"Edad: " + nombreJugador.Edad}</tr>}</td>
                  <td className="nombre">{<img src={nombreJugador.Bandera} style={{ width: '40%' }} />}</td>
                </tr>


              </div>
            </div>

            <tr className='caracteristica'>
              {nombreJugador.Nombre && arrayWithCategories.map(item => <td>{item}</td>)}
              {caracteristicaValor.map(partido => <tr className='tr-caracteristica'>{arrayWithCategories.map(item => <td>{partido[item]}</td>)}</tr>)}

            </tr>

          </table>
         </div>
         



      </div>
      {(abrirModal) && <Modal caracT={caracteristicaValor2} openModal={setabrirModal} />}
    </>
  );
}

export default App;
