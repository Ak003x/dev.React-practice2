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
    const data = new Date("2025-09-08");
    data.setDate(data.getDate() + count)

    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <h1>count:{count} </h1>
            <button onClick={() => setCount(c => c - 1)}>-</button>

            <p>
                <span>{count === 0 ? " Today is " : count > 0 ? `${count} days from today is ` : `${count} days ago was `} </span>
                <span>{data.toLocaleDateString()}</span>



            </p>

        </div >
    )
}
