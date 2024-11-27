import "./Counter.css"
import {useState} from "react";

const Counter = () => {
    let [counterNumber, setCounterNumber] = useState(0);

    function increase() {
        setCounterNumber(counterNumber + 1)
    }

    function decrease() {
        setCounterNumber(counterNumber - 1)
    }

    return (
        <div className={"counter-wrapper"}>
            <button onClick={increase}>+</button>
            <span>{counterNumber}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
};

export default Counter;