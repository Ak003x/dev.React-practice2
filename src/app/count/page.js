"use client"
import "../../index.css"
import "../globals.css"

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
    const [steps, setSteps] = useState(0)
    const data = new Date("2025-09-08");
    data.setDate(data.getDate() + count)

    return (
        <div className="text-center">


            <div className="flex flex-row items-center justify-center gap-5">
                <button onClick={() => setSteps(c => c - 1)}>-</button>
                <h1>steps:{steps} </h1>
                <button onClick={() => setSteps(c => c + 1)}>+</button>

            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                <button onClick={() => setCount(c => c - steps)}>-</button>
                <h1>count:{count} </h1>
                <button onClick={() => setCount(c => c + steps)}>+</button>
            </div>
            <p className="mt-5">
                <span className="text-2xl font-bold">{count === 0 ? " Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `} </span>
                <span>{data.toLocaleDateString()}</span>



            </p>

        </div >
    )
}
