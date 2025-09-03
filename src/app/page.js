import Image from "next/image";
import '../index.css';


export default function Home() {
  return (
    <div className="steps">
      <div className="numbers">

        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>


      <p className="message">Hello</p>


      <div className="buttons">
        <button>pervious</button>
        <button>Next</button>

      </div>
    </div>
  );
}
