"use client"
import { useState } from "react"

export default function App() {
    return (
        <Count />
    )
};




function Count() {
    const [count, setCount] = useState(1)

    return (
        <div>
            <h1>count:{count}</h1>



        </div>
    )
}
