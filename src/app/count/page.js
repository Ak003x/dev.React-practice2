"use client"
import "../../index.css"
import { useState } from "react"

export default function App() {
    return (
        <div className="App">
            <Count />
        </div>
    )
};




function Count() {
    const [count, setCount] = useState(0)

    return (
        <div >
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <h1>count:{count}</h1>
            <button onClick={() => count > 0 ? setCount(c => c - 1) : ""}>-</button>



        </div >
    )
}
