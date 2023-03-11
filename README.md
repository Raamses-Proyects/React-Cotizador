# React-Cotizador-Autos
Sobre el proyecto

    Cotizador de gastos de autos, el cual consta de dos select y dos radio buttons
    para obtener la información del usuario.

    Este proyecto obtiene los datos que requiere con un objeto de manera dinámica
    en lugar de crear una variable/state para cada campo.

    Se usaron los Hooks de useState, useEffec y useContext. Y por primera vez los
    Hooks de useCallback y useRef para evitar que React renderize siempre.

    Este proyecto es importante ya que se ve como evitar que React siempre se
    este renderinzando lo cual es algo muy util en ciertas situaciones. 


CSS

    Los estilos se hicieron con tailwindcss
    1.- Instalar con el comando:
        npm i tailwindcss postcss autoprefixer
    
    2.- Crear archivo de configuración de tailwindcss ( tailwind.config.cjs ):
        npx tailwindcss init -p
    
    3.- Configurando archivo de tailwind.config.cjs:
        /** @type {import('tailwindcss').Config} */
        module.exports = {
            content: ["index.html", "./src/**/*.jsx"], // solo se agrega esto de aquí
            theme: {
                extend: {},
            },
            plugins: [],
        }


React

    1.- El proyecto se creo con VITE con el comando de: 
        npm create vite@latest
        Y se siguieron las siguientes instrucciones

    2.- Llenar un select con un arreglo dinamicamente ( Video 307. Creando el Formulario )
        y el ejemplo de como hacerlo esta en el componente de Formulario.jsx

    3.- Los datos se obtuvieron de manera dinámica llenando un objeto, en lugar de crear
        un state para cada variable ( Video 312. Creando el State para el Formulario )
        Ejemplos en CotizadorProvider.jsx y Formulario.jsx
    
    4.- Hooks para evitar que React vuelva a renderizar
        useCallback:
            Evita que se haga el rirender hasta que le digamos cuando, pide dos parámetros
            una función y, en base a que va a estar atento para hacer el cambio. O sea un array
            de dependencias con el useEffect, por ejemplo:
            const textoMarca = useCallback( función, [resultado] )
            // Enlace: https://es.reactjs.org/docs/hooks-reference.html#usecallback

        useRef:
            Hace los mismo que useCallback pero este no requiere de dos argumentos,
            solo de uno, por ejemplo si no queremos que year se este actualizando
            solo colocamos: 
            const yearRef = useRef(year)
            Enlace: https://es.reactjs.org/docs/hooks-reference.html#useref

        useMemo:
            Es lo mismo que useCallback pero a este le tienes que agregar () => a la
            funcion que estes utilizando, por ejemplo
            const textoMarca = useCallback( () => funcion, [resultado] )
            Enlace: https://es.reactjs.org/docs/hooks-reference.html#usememo

        En general useCallback, useRef y useMemo ayudan a mejorar el rendimiento
        de la aplicacion web, pero no se recomienda usarlo en exceso

        Videos, y ejemplos en el archivo de Resultado.jsx
        ( 321. Como utilizar useCallback y useRef )
        ( 322. Como utilizar useMemo y Fin de Proyecto )


JavaScript/Funcionalidades

    1.- Ejemplo de uso de un switch en la función de switch del archivo 
        de helpers index.js

    2.- Formatear dinero, con las mejor explicación:
        ( Video 316. Trabajando con el Algoritmo de Cotización (parte 2 de 2) )

    3.- Spinner: de la pagina de https://tobiasahlin.com/spinkit/
        ( Video 318. Añadiendo un Spinner de Carga )
