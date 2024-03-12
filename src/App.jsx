import { useState } from "react"
import Counter from "./Components/Counter"
import Entrada from "./Components/Entrada"

export default function App() {

    return (
        <div>
            <div className="cards">
                <Counter title="Jugador 1" initialValue={40} />
                <Counter title="Jugador 2" initialValue={40} />
                <Counter title="Jugador 3" initialValue={40} />
                <Counter title="Jugador 4" initialValue={40} />
            </div>
            <div>
                <Entrada />
            </div>
        </div>

    )
}

