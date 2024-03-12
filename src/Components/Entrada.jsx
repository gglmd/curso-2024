import { useState } from "react";

export default function Entrada() {
    const [age, setAge] = useState(18)

    const givePermission = () => {
        if(age > 18) {
            return "Puede Entrar"
        } else if (age === 18) {
            return "En el limite"
        }
        else {
            return "No Puede Entrar"
        }        
    }

    const handleAge = (event) => {
        const ageInNumber = Number(event.target.value)
        setAge(ageInNumber)
    }

    return (
        <div>
            <input type="number" onChange={handleAge} />
            <div>
                {givePermission()}
            </div>
            
        </div>
    )
}