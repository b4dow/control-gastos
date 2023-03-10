import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {
    const [ mensaje, setMensaje ] = useState('')
    const handlePresupuesto = e => {
        e.preventDefault()

        if(!presupuesto || presupuesto < 0 ) {
            setMensaje('No es un presupuesto valido')

            return // Detenemos la ejecucion
        } 

        setMensaje('')
        setIsValidPresupuesto(true)

    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form  onSubmit={handlePresupuesto} className='formulario' action="">
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                    type="text"
                    value={presupuesto}
                    className='nuevo-presupuesto'
                    placeholder='Añade tu Presupuesto' 
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
            </div>
            <input type="submit" value='Añadir' />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto