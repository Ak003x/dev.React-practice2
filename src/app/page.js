import Image from "next/image";
import '../index.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function Home() {
  return (
    <div className="steps">
      <div className="numbers">

        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>


      <p className="message">Hello</p>


      <div className="buttons">
        <button style={{ background: "#7950f3", color: "#fff" }}>pervious</button>
        <button style={{ background: "#7950f3", color: "#fff" }}>Next</button>

      </div>
    </div>
  );
}
