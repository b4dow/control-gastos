import React from 'react'
import CerrarModal from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal,setAnimarModal }) => {
    const ocultarModal = () => {
        
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }
    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img src={CerrarModal}
                    alt="cerrar modal"
                    onClick={ocultarModal} />
            </div>

            <form  className={`formulario ${animarModal ? "animar" : 'cerrar'}`} action="">
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input type="text" placeholder="Añade el Nombre del Gasto" />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input type="number" placeholder="Añade la cantidad del Gasto" />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoría</label>
                    <select id="categoria">
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" />
            </form>

        </div>


    )
}

export default Modal
