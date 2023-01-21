import { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'

function Resultado() {

  // State Global
  const { resultado, datos } = useCotizador()
  const { marca, year, plan } = datos
  const yearRef = useRef(year) // usando useRef para evitar el rirender del valor en el componente

  // Extrayendo el nombre de la marca
  // Con useCallback
  // const [textoMarca] = useCallback( MARCAS.filter( (m) => m.id === Number(marca)), [resultado] )
  // const [textoPlanes] = useCallback( PLANES.filter( (p) => p.id === Number(plan)), [resultado])
  // Con useMemo
  const [textoMarca] = useMemo( () => MARCAS.filter( (m) => m.id === Number(marca)), [resultado] )
  const [textoPlanes] = useMemo( () => PLANES.filter( (p) => p.id === Number(plan)), [resultado])

  // Si es 0 se evita que se muestre el 0 y se detiene el programa
  if( resultado === 0 ) {
    return null
  }

  return (
    <div className='text-center bg-gray-100 mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>
        <p className='my-2'>
            <span className='font-bold'>Marca: </span>{textoMarca?.nombre}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Plan: </span>{textoPlanes?.nombre}
        </p>
        <p className='my-2'>
            <span className='font-bold'>Año del auto: </span>{yearRef.current}
        </p>
        <p className='my-2 text-2xl'>
            <span className='font-bold'>Total Cotización: </span>{resultado}
        </p>
    </div>
  )
}

export default Resultado