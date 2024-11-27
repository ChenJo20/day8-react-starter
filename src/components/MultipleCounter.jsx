import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from "react";
import CounterGroup from "./CounterGroup";
import "./MultipleCounter.css"
const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);
    return (
        <div className={"multiple-counter-wrapper"}>
            <CounterGroupGenerator size={size} setSize={setSize} sum={sum} setSum={setSum}/>
            <CounterGroup size={size} sum={sum} setSum={setSum}/>
        </div>
    )
};

export default MultipleCounter;