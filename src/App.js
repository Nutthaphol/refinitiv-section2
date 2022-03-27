import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Column1 from "./components/Column1";
import Column2 from "./components/Column2";
import Column3 from "./components/Column3";

const calculationFn = ["isPrime", "isFibonacci"];

function App() {
  const [number, setNumber] = useState("");
  const [calculation, setCalculation] = useState("isPrime");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (number) {
      calculation == calculationFn[0] ? calIsPrime() : calIsFibonacci();
    }
  }, [number, calculation]);

  const calIsPrime = () => {
    let tmp = 0;
    for (let i = 2; i <= parseInt(number / 2); i++) {
      if (number % i == 0) {
        tmp++;
      }
    }
    if (tmp == 0) {
      setAnswer("True");
    } else {
      setAnswer("False");
    }
  };

  const calIsFibonacci = () => {
    let first = 0,
      second = 1,
      cal = first + second;
    let ans = "False";
    if (number == first || number == second) {
      ans = "True";
    }
    while (cal <= number) {
      if (cal == number) {
        ans = "True";
        break;
      } else {
        first = second;
        second = cal;
        cal = first + second;
      }
    }
    setAnswer(ans);
  };

  return (
    <div className="App">
      <div className="container">
        <Column1 number={number} setNumber={setNumber} />
        <Column2
          calculation={calculation}
          setCalculation={setCalculation}
          calculationFn={calculationFn}
        />
        <Column3 answer={answer} />
      </div>
    </div>
  );
}

export default App;
