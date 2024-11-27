import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from "react";
import CounterGroup from "./CounterGroup";
import "./MultipleCounter.css"
const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    return (
        <div className={"multiple-counter-wrapper"}>
            <CounterGroupGenerator setSize={setSize}/>
            <CounterGroup size={size}/>
        </div>
    )
};

export default MultipleCounter;