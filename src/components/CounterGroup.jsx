import Counter from "./Counter";
import "./Counter.css"
const CounterGroup = (props) => {
    let array = [];
    for (let i = 1; i <= props.size; i++) {
        array.push(i);
    }
    return (
        <div>
            <div className={"sum-wrapper"}>
                <span>sum:</span>
                <span>{props.sum}</span>
            </div>
            {array.map((_, index) => {
                return (<Counter sum={props.sum} setSum={props.setSum} key={index + props.size}/>)
            })}
        </div>
    )
}

export default CounterGroup;