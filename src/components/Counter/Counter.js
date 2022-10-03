import { useState } from "react";

const Counter = () =>{

    const initial = 1
    const stock = 10
    const [counter, setCounter] = useState (initial)

    const decrement = () =>{
        if (counter > initial){
            setCounter(counter - 1)
        }
    }
    const increment = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    }
    return (
        <div className="card mx-auto" style={{width: 250}}>
            <div className="card-body">
            <h2>{counter}</h2>
            <button className="btn btn-primary mx-2" onClick={decrement}>Restar</button>
            <button className="btn btn-primary mx-2" onClick={increment}>Sumar</button>
            </div>
        </div>

    )


}
export default Counter