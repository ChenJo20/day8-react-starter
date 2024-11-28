import Counter from "./Counter";
import "./Counter.css"
import {useEffect, useState} from "react";

const CounterGroup = (props) => {
    const [sum, setSum] = useState(0);
    let array = [];
    for (let i = 1; i <= props.size; i++) {
        array.push(i);
    }
    useEffect(() => {
        setSum(0);
    }, [props.size])
    return (
        <div>
            <div className={"sum-wrapper"}>
                <span>sum:</span>
                <span>{sum}</span>
            </div>
            {array.map((_, index) => {
                return (<Counter sum={sum} setSum={setSum} key={index + props.size}/>)
            })}
        </div>
    )
}

export default CounterGroup;