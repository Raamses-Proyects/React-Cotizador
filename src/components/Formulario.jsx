import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Alerta from './Alerta'

function Formulario() {

  // State Global
  const { handleChangeDatos, datos, error, setError, cotizarSeguro } = useCotizador()

  // Funciones
  const handleSubmit = (e) => {
    e.preventDefault()
    if( Object.values(datos).includes('') ) {
        setError('Todos los campos son obligatorios')
        return
    }
    setError('')
    cotizarSeguro()
  }

  return (
    <>
        { error && <Alerta /> }
        <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <select 
                    name="marca" 
                    className='w-full p-3 bg-white border border-gray-200'
                    onChange={(e) => handleChangeDatos(e) }
                    value={datos.marca}
                    >
                    <option value="">--Selecciona Marca--</option>
                    { MARCAS.map( (marca) => (
                        <option key={ marca.id } value={ marca.id }>
                            { marca.nombre }
                        </option>
                    )) }
                </select>
            </div>

            <div className='my-5'>
                <label htmlFor="year" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <select 
                    name="year" 
                    className='w-full p-3 bg-white border border-gray-200'
                    onChange={(e) => handleChangeDatos(e) }
                    value={datos.year}
                    >
                    <option value="">--Selecciona Año--</option>
                    { YEARS.map( (year) => (
                        <option key={ year } value={ year }>
                            { year }
                        </option>
                    )) }
                </select>
            </div>

            <div className='my-5'>
                <label htmlFor="plan" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <div className='flex gap-3 items-center'>
                    { PLANES.map((plan) => (
                        <Fragment key={plan.id}>
                            <label htmlFor={plan.nombre}>{plan.nombre}</label>
                            <input 
                                type="radio" 
                                name="plan" 
                                id={plan.nombre} 
                                value={plan.id}
                                onChange={(e) => handleChangeDatos(e) }
                                />
                        </Fragment>
                    )) }
                </div>

                <input type="submit" value="Cotizar"
                       className='w-full bg-indigo-500 hover:bg-indigo-600 
                        hover:cursor-pointer transition-colors text-white 
                        p-3 uppercase font-bold mt-2'
                    />
            </div>
        </form>
    </>
  )
}

export default Formulario