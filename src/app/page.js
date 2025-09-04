
'use client';

import Image from "next/image";
import '../index.css';
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const step = 1;


export default function Home() {
  const [step, setSteps] = useState(1)
  // const [test, setTest] = useState({name:"akash"}) using object..



  const handlePervious = () => {
    (step > 1) ? setSteps(step - 1) : "";
  }
  const handleNext = () => {
    (step < 3) ? setSteps(step + 1) : "";
    // setTest({name:"ak"}) using object
  }


  return (
    <div className="steps">
      <div className="numbers">

        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>


      <p className="message">Step {step}: {messages[step - 1]}
        {/* {test.name} */}
        </p>


      <div className="buttons">
        <button style={{ background: "#7950f3", color: "#fff" }} onClick={handlePervious} >pervious</button>
        <button style={{ background: "#7950f3", color: "#fff" }} onClick={handleNext}>Next</button>

      </div>
    </div>
  );
}
