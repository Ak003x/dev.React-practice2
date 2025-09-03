import Image from "next/image";
import '../index.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const step = 3;


export default function Home() {
  return (
    <div className="steps">
      <div className="numbers">

        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>


      <p className="message">Step {step}: {messages[step - 1]}</p>


      <div className="buttons">
        <button style={{ background: "#7950f3", color: "#fff" }}>pervious</button>
        <button style={{ background: "#7950f3", color: "#fff" }}>Next</button>

      </div>
    </div>
  );
}
