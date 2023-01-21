import { createContext, useState } from 'react'
import { obtenerDireferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers/index'

const CotizadorContext = createContext()
const CotizadorProvider = ({children}) => {

    // States
    const [datos, setDatos] = useState({marca: '', year: '', plan: ''})
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)


    // Funciones
    const handleChangeDatos = (e) => {
        // Guardando los datos en el objeto
        setDatos( { ...datos, [e.target.name]: e.target.value } )
    }
    const cotizarSeguro = () => {
        // Una base
        let resultado = 2000

        // Obtener diferencia de años
        const diferencia = obtenerDireferenciaYear(datos.year)
        

        // Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100


        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca)


        // Basico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)
        resultado = formatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000)
    }


    return(
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext