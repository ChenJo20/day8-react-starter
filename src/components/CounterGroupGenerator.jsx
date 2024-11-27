import {useState} from "react";
import "./CounterGroupGenetor.css"

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0)
    const handleChange = (e) => {
        if(e.target.value < 0){
            setSize(0)
        }
        else if(e.target.value > 20){
            setSize(20)
        }
        else {
            setSize(e.target.value);
        }
    };
    const handleReset = () => {
        if (size !== props.size) {
            props.setSize(size);
            props.setSum(0);
        }
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