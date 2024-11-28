import {useState} from "react";
import "./CounterGroupGenetor.css"

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0)
    const handleChange = (event) => {
        if (checkShouldNoLessThanZero(event) && checkShouldNoHigherThanTwenty(event)) {
            setSize(event.target.value);
        }
    };
    const handleReset = () => {
        props.setSize(size);
    }
    const checkShouldNoLessThanZero = (event) => {
        if (event.target.value < 0) {
            setSize(0)
            return false;
        }
        return true;
    }
    const checkShouldNoHigherThanTwenty = (event) => {
        if (event.target.value > 20) {
            setSize(20)
            return false;
        }
        return true;
    }
    return (
        <div className={"counter-group-generator-wrapper"}>
            <span>size:</span>
            <input min={0} max={20} type="number" value={size} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )

}

export default CounterGroupGenerator;