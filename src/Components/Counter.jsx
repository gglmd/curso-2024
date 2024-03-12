import { useState } from "react"

export default function Counter(props) {

    const [counter, setCounter] = useState(props.initialValue) //useState METODO = a 'let number = 0;'

    const add = () => setCounter(counter + 1)
    const reset = () => setCounter(40)
    /* const subs = () => setCounter(counter - 1) */

    const custom = (operation) => setCounter(counter + operation) //funcion reducida

    return (
            <div className="card">
                <h1>{props.title}</h1>
                <h2>{counter}</h2>
                <button onClick={add}>+</button>
                <button onClick={reset}>Reset</button>
                <button onClick={()=>custom(-1)}>-</button>
                
            </div>
    )
}

            {/* <button onClick={add}>+</button>
                <button onClick={reset}>Reset</button>
                <button onClick={()=>custom (-1)}>-</button> */}

//let comer = () => {}  funcion de flecha
