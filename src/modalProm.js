import './modalProm.css';
function Modal({ caracT, openModal }) {

    return (
        <>

            <div className="container-modal">

                <p>{((caracT.reduce((a, b) => a + b, 0) / caracT.length)).toFixed(1)}</p>
                <button onClick={() => openModal(false)}>Listo!</button>
            </div>
        </>
    )

}

export default Modal;